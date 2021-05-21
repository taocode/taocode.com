---
title: Cloud Function to Send Email
slug: cloud-function-send-email
# description: 
# created: 2020-10-10
creationDate: '2021-03-23'
# 09:20:00Z
category: Programming
excerpt: Firebase Cloud Function to send email via MailJet with nodemailer
lead: Lessons learned creating a Firebase Cloud Function to send an HTML form submission email via MailJet.
layout: blog
author: Mark Jones
tags:
  - Email
  - MailJet
  - Firebase
  - Cloud Function
  - Learning
---
The Hire Me form on [MarkJonesVoice](/portfolio/markjonesvoice) needed to be handled by *something.* Before, it was a PHP script, adapted from a the [Hugo Zen Theme's contact.php](https://github.com/frjo/hugo-theme-zen/blob/master/php/contact.php.example) and running on Google Compute Engine instance.

The PHP solution seems anachronistic and requires a server just be available online, sitting there. Also, the resulting PHP code was not exactly pretty and wasn't flexible enough to send ad-hoc fields; they needed to be named in the script explicitly. The code could've accommodated that but requiring a server sitting there waiting for the occassional email just seemed wasteful.

## Formsubmit.io 

I came across [formsubmit.io](https://formsubmit.io/) and really liked how it handled email with ad-hoc fields, *really cool*. You can choose from 3 templates to somewhat customize your email. If you want to exclude a field from being added to the email, it only needs to be prefixed with '_', also how they require the "control" fields like '_reply', etc...

Ultimately, the lack of style control led me to make my own Cloud Function but I designed it to be more like formsubmit than my lackluster PHP handler.

## Firebase Cloud Function

The code segments below contain just the relevant parts of the for handling AJAX (multipart/form-data). You may want to check out any of the [recommended reading](#recommended-reading) for links to get you started.

### Busboy for "multipart/form-data" (and AJAX) submission

I discovered that I couldn't receive the POST via AJAX in the Cloud Function without processing it through Busboy. *Why?* When submitting an HTML Form element using AJAX (on-page submission), it's always sent as `enctype="multipart/form-data"`. This surprised me as the PHP script seamlessly handled `multipart/form-data` but node requires something to extract the fields. 

Note that this wasn't an issue for posting directly to the Cloud Function with the default `enctype="application/x-www-form-urlencoded"`. But I wanted on-page submission, so... I tracked down this code to extract the fields:


``` ts
const Busboy = require('busboy');

function extractMultipartFormData (req: functions.https.Request): Record<string,any> {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      return reject(405);
    } else {
      const busboy = new Busboy({ headers: req.headers });
      const fields: Record<string,any> = {};

      busboy.on('field', (fieldname: string, val: any) => (fields[fieldname] = val));
      busboy.on('finish', async () => {
        const result = { fields };
        resolve(result);
      });
      busboy.on('error', reject);
      if (req.rawBody) {
        busboy.end(req.rawBody);
      } else {
        req.pipe(busboy);
      }
    }
  });
};
```

## Email Form Handler Function

``` ts
export const emailFormHandler =  functions.https.onRequest(async (req,res) => {
    try {

    const origin = ''+req.headers.origin;
    if (/markjonesvoice\.com/.test(origin)) {
        res.set('Access-Control-Allow-Origin', origin);
        res.set('Vary', 'Origin');    
    } else {
        console.log('Unauthorized origin domain: '+origin);
        res.status(403);
        res.send(`Domain ${origin} not authorized.`);
        return;
    }
    const mpfd = await extractMultipartFormData(req);
    const fields = mpfd.fields;

    const json = fields.hasOwnProperty('_json');

    if (req.method !== "POST") {
        if (json) {
            res.json({'status':'Error','message':'Requires POST method.'});
        } else {
            res.status(405).end();
        }
        return;
    }

    // set some defaults in case required control fields are missing
    const mSubject = (fields.hasOwnProperty('_subject')) ? fields._subject : "New Form Submission";
    const fromUrl = (fields.hasOwnProperty('_referer') ? fields._referer : req.get('referer'));
    const fromEmail = (fields.hasOwnProperty('_from_email') ? fields._from_email : "mark@markjonesvoice.com");
    const fromName = (fields.hasOwnProperty('_from_name') ? fields._from_name : "Mark Jones Voice");
    const nextUrl = (fields.hasOwnProperty('_next') && fields['_next'] !== '') ? fields._next : fromUrl;
    const includeAll = (fields.hasOwnProperty('_include_fields') && fields._include_fields === 'all'); 
    const includeEmpty = (fields.hasOwnProperty('_include_fields') && fields._include_fields === 'empty'); 

    // honey trap... '_url' or '_honey' are never set except by bots
    if (fields.hasOwnProperty('_honey') && fields._honey !== "" 
    || fields.hasOwnProperty('_url') && fields._url !== ""
    || fields.hasOwnProperty('name') && 
        (fields.name === undefined || fields.name === "No Script" || fields.name === "")) {
    if (json) {
        res.json({status:"Error",message:"Rejected for honeypot or name."});
    } else {
        res.status(400).end();
    }
    functions.logger.warn('HoneyPot or invalid name submission rejected:',fields);
    return;
    }

    let reportHTML = 
    `<div style="font-size: 1.1em; background-color: #301F2F; color: #DADADA; text-align: center; padding: 1.5em 0.5em;">
    <div><a style="font-weight: 900; font-size: 2.5em; text-decoration: none;" href="https://markjonesvoice.com/"><img alt="Mark Jones Voice" style="max-width: 100%; width: 75%; min-width: 300px;" src="${logoGreen}"></a></div>
    <p><i>Received: ${(new Date()).toLocaleString("en-US",{timeZone:"America/New_York"})}</i>.</p>
    <table width="100%" border=0 cellspacing=0>
    <thead>
    <tr style="color: #DADADA; background-color: #241d24; font-size: 1.2em;">
        <th style='padding: 0.5em 0.75em;'>⚿</th>
        <th style='padding: 0.5em 0.75em;'>🛈</th>
    </tr>
    </thead><tbody>`;
    for (const key in data) {
        const item = data[key];
        reportHTML += `<tr><td style='background-color: #301F2F; color: #AAA; padding: 0.5em; text-align: right; font-size: 75%;'><b>${key.toUpperCase().replace(/_/g,' ')}</b></td>
        <td style='background-color: #F4F4F4; border-bottom: 3px solid #301F2F; border-top: 3px solid #301F2F; color: #111; padding: 0.5em; text-align: left;'>${item.toString().replace(/\n\r?/g,"<br>")}</td></tr>`;
    }
    reportHTML += `</tbody></table>
    <p>From: <a style="color: #96ab37;" href="${fromUrl}">${fromUrl}</a></p>
    </div>`;

    const reportOpts = {
        // from: `${fields.name} <${fields.email}>`,
        from: `${fromName} <${fromEmail}>`, // sender address
        to: reportRecipients,
        cc: fields.hasOwnProperty('cc') ? fields.email : '',
        replyTo: `${fields.name} <${fields.email}>`,
        subject: mSubject, // Subject line
        // text: '!' + reportHTML, // plain text body
        html: reportHTML, // html body
    };

  /* send reporting email */
    const transporter = nodemailer.createTransport(
        `smtps://userid:password@in-v3.mailjet.com`
    );

    //this is callback function to return status to firebase console
    const getDeliveryStatus = function (error: any, info: { messageId: any; }) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    if ( ! fields.hasOwnProperty('cc') && fields.hasOwnProperty('_autoreply')) {
        const replyHTML = `<div style="font-size: 1.2em; padding: 1.5em;">
    <div><a style="font-weight: 900; font-size: 2.5em; text-decoration: none;" href="https://markjonesvoice.com/"><img alt="Mark Jones Voice" style="max-width: 100%; width: 75%; min-width: 400px;" src="${logoPurple}"></a></div>
    <p>Hi ${fields.name},</p>
    <p>${fields._autoreply}</p>
    <p>I've received your request and will get back to you shortly.</p>
    <p>- Mark</p>
    <div><small style="color: #333"><i>Received: ${(new Date()).toLocaleString("en-US",{timeZone:"America/New_York"})}</i></small></div>
    <div><small style="color: #333"><i>From: <a style="color: #61435e;" href="${fromUrl}">${fromUrl}</a></i></small></div>
    </div>`;
        const replyOpts = {
            from: `${fromName} <${fromEmail}>`, // sender address
            to: fields.email, // list of receivers
            subject: (fields.hasOwnProperty('_autoreply_subject') ? fields._autoreply_subject : 'MJV Submission Received'), // Subject line
            html: replyHTML,
        };
        // if (false) console.log('RO',transporter,reportOpts,firestore,replyOpts,getDeliveryStatus);
        transporter.sendMail(replyOpts, getDeliveryStatus);
    }

    //call of this function send an email, and return status
    transporter.sendMail(reportOpts, getDeliveryStatus);
    if (json) {
        res.json({status:"Sent",message:"Your message was sent"});
    } else { 
        res.redirect(nextUrl+"?status=Sent");
    }

    } catch (err) {
        console.log('Error in emailFormHandler()',err);
    }
});
```

### Bonus: Store Submission Data in Firestore

Firestore must be set up and inialized by this point.

``` ts
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "path/to/your/firestore",
});

interface IContactData extends Record<string,any> {
    date: Date,
    subject: string,
    email: string,
    name?: string,
    message?: string,
    fromURL?: string,
}
/* store data */
const data: IContactData = {
    date: new Date(),
    subject: mSubject,
    email: fields.email,
    name: fields.name,
    from_URL: fromUrl,
}
function addField(fieldName:string) {
    if (fields.hasOwnProperty(fieldName) 
    && (includeEmpty || fields[fieldName] !== '')) {
        data[fieldName] = fields[fieldName];
    }
}
for (const key in fields) {
    if (includeAll || ! key.startsWith('_')) {
      addField(key);
    }
}

const collection = firestore.collection('web_forms');
const docref = collection.add(data)
.then(function() {
    console.log("Saved!",docref);
}).catch(function (error) {
    console.log("Error while saving,",error);
});
/* end store data */
```

## Recommended Reading

Because this page assumes you've already got yourself set up with Firebase, I skip all that. But perhaps you'd like to start with someone's getting started guide:

- [Using Node.js and Firebase Cloud Functions to send an email - DEV Community](https://dev.to/lornasw93/using-node-js-firebase-cloud-functions-and-nodemailer-smtp-to-send-an-email-51j8)
- [Automailler for Firebase Cloud Function with Nodemailer](https://medium.com/@kemalekren/automailler-for-firebase-cloud-function-with-nodemailer-be113234cee6)

## Conclusion

My cloud function does what I want it to do and does a fair job filtering spam thanks to the honeypot. The only real trick that I'm sharing is how to handle the AJAX with busboy; I didn't find a great reference for just wanting to deal with the fields, most of the time Busboy is introduced to receive the file for upload, hence multipart.