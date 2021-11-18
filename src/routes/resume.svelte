<script>
  import SEO from '$lib/SEO.svelte';
</script>

<svelte:head>
  <title>Resume | Mark Jones</title>
  <meta name="description" content="My up-to-date resume, hire me, a quality programmer!" />
</svelte:head>

<SEO />

<section class="container mj-container">
  <h1 class="text-center pt-6">
    <div class="sr-only">Resume</div>
    <div class="text-center tracking-widest">Mark Jones</div>
  </h1>

    <div class="text-center font-display text-xl my-3">
      <p class="text-center"><a href="mailto:mark@taocode.com">mark@taocode.com</a></p>
      
      <p class=""><a href="tel:+1-336-608-9475">336.608.9475</a></p>
    </div>
    <h2>About Me</h2>
    <p>I am a thoughtful nerd that is continually problem solving. I   enjoy programming and have developed websites for over a dozen   years beginning with NT 3.51 and ASP using VBScript. We've all   come a long way since then and I have taught myself many more   programming languages and techniques including most of the usual   suspects (Java, SQL, PHP, Javascript, OOP, etc...). I'm a   tenacious debugger and feel very strongly about my ability to   analyze project needs and create elegant, forward-thinking   solutions. I've worked with a variety of business systems and   databases throughout my career and have written multithreaded,   multi-user, networked, distributed applications. Beyond   programming, I have a broad variety of web-relevant skills   including image optimization and a thorough knowledge of CSS. I   consider myself a good fit for a position that requires a   flexible, agile programmer/go-to-guy.</p>
    <h2>Objective</h2>
    <p>I want a leadership role with a dynamic team to create quality   software that employs best-of-breed technologies to leverage all   participants and their time effectively. I have rich experience   in a broad number of programming languages and have learned and   implemented industry best practices to efficiently and   consistently produce quality work. Understanding what's available   and how to bring the pieces together are a big part of being   effective in technology and, specifically, on the web. I am a   problem solver and debugger by nature and have a habit of   modeling internal systems from external evidence. I am   self-taught in the programming/web building realm and have   learned not only design patterns and object oriented programming   practices, but how to best streamline the development cycle with   an emphasis on reusing solutions by integrating existing projects   where appropriate. I want to share this knowledge and experience   with coworkers to make the work enjoyable, reliable and on, if   not ahead of, schedule.</p>
    <h2>Summary</h2>
    <ul>
    <li>Excellent verbal and written communication abilities</li>
    <li>Fourteen years of direct experience developing web     applications including:<br> Integration, Plone, Joomla!, Servlets, JSP, XML, XSLT, ASP,     CGI, CSS2, XHTML, HTML, CFML, and PHP</li>
    <li>Extensive experience with several programming languages and     application platforms:<br> Java, Python, JavaScript, XSLT, Visual Basic, VB Script, UML,     and SQL</li>
    <li>Experience with distributed applications using J2EE:<br> JFC/Swing User Interface, JDBC, RMI, Java networking     libraries</li>
    <li>Theoretical and practical knowledge of reusable design     patterns and Object Oriented Programming practices</li>
    <li>Mastery of all Windows flavors (Vista, XP, 2k, NT...), and     UN*X (Mac OS X, Ubuntu, Linux, FreeBSD)</li>
    <li>Experienced with office suites (Microsoft Office, Open     Office) and graphics and publishing programs (GIMP, Inkscape,     Scribus, PhotoShop, Illustrator, Publisher, Visio)</li>
    </ul>
    <h2>Experience</h2>
    <h3>Salem Academy and College<br></h3>
    <h4>Webmaster, Migration Specialist (10/08 -Present)</h4>
    <ul>
    <li>Maintained and enhanced www.salem.edu and     www.salemacademy.com</li>
    <li>Used ClickHeat and Google AdSense to analyze the multiple     dimensions of the site's usability and online presence. Using     these tools we were able to gain the insight into what worked     and what didn't. In the end we improved time spent on site by     20% and dropped the bounce rate by nearly 15%.</li>
    <li>Streamlined online media delivery including work with Flash     Video and YouTube publication depending on target audience and     goals of the specific media</li>
    <li>Interviewed content producers and managers to determine the     organization's system's needs. After comparing the features     offered my many open source, non-commercial and commercial     solutions (Drupal, ExpressionEngine, Final Site, Systems     Alliance, Sylvia, and more...), found Plone to be the most     compatible and usable for Salem's needs.</li>
    <li>Created data migration scripts to export from Joomla that     translated site-intrinsic assets (images and internal links in     the article content) to search engine optimized (SEO) URIs     based on the Joomla menu hierarchy, falling back on Section and     Category where appropriate. This automated roughly 90% of the     data migration of the over 1,600 articles and vastly expedited     the migration.</li>
    <li>Enhanced the ZipFileImport plugin for Plone to import Core     (most of the Dublin Core) metadata during import when provided.     This allows for import to include: Title, Description,     Subject(s), Creation Date, Publication Date, Expiration Date,     and Include/Exclude from navigation.</li>
    <li>Optimized search engine effectiveness by migrating to SEO     URLs and Google listing maintenance operations using Google's     Webmaster Tools.</li>
    <li>Repaired/cleaned/removed previous website hacking and     optimized robots.txt file to reduce the visibility to would-be     hackers using Google and other search engines as a tool for     discovering potential vulnerabilities. I worked closely with     the server administrators to include counter-measures to secure     website against future attacks.</li>
    </ul>
    <h3>North American Realty Services, Inc.</h3>
    <h4>Systems Engineer, Programmer (02/03 -06/08)</h4>
    <ul>
    <li>Designed and implemented a custom solution for Trust     Document creation based on a flexible variable dataset.</li>
    <li>Worked closely with staff to provide technical solutions     for the business needs.</li>
    <li>High quality print documents were originally created using     RTF based on Microsoft Word generated documents, but later we     migrated to PDF using Flyer Saucer's XHTML/CSS2 rendering     engine.</li>
    <li>Originally used the work from Trinil, Inc. to realize a     production system that was in daily use by the company for 5     years.</li>
    <li>This was the premier application of the simultaneous work     for Trinil, Inc. I became the only maintainer of the Trinil     code and modified and enhanced the code to suit NARS'     needs.</li>
    <li>When Trinil folded, NARS migrated to PHP and I lead the     team in creating the next generation application to ensure that     all the technical and business discoveries made throughout my     time were not lost, saving the company valuable time in     defining the replacement application.</li>
    </ul>
    <h3>Trinil, Inc.</h3>
    <h4>Programmer (9/01 -02/05)</h4>
    <ul>
    <li>Worked directly under technical lead to develop a     proprietary Symmetric Object Oriented Distributed Data Base     using Java RMI.</li>
    <li>Created JSP Tag Library to automate data display and form     field creation. This was created to give logical access to any     data structure with a staging step for the data to be validated     before it was committed to the database.</li>
    <li>Created Java Object to SQL storage automation to store any     object structure to any database (though only implemented for     PostgreSQL).</li>
    <li>Created wrapper layer that would Òpush downÓ     a query to the underlying SQL database for search speed.</li>
    <li>Created asynchronous database commits to aid in application     performance. This enabled the in-use objects to stay available     via smart caching, while keeping transactions safe from data     loss.</li>
    <li>Created a multiple document interface in Java Swing that     gave advanced, secure and flexible access to the remote     repository. Menu items, editing tabs and available actions were     automatically registered to object types for     ÒsmartÓ editing of objects.</li>
    </ul>
    <h3>HomeStore.com, Inc</h3>
    <h4>Integration Specialist contractor (2/01 -8/01)</h4>
    <ul>
    <li>Applications technical lead for integration of rent.net and     springstreet.com apartment and rentals listings.</li>
    <li>Contract position focused on integrating the two disparate     databases/applications and enhancing the final product to have     the best of both source databases/applications.</li>
    <li>Skills/languages used: UML, SQL Server, ASP, VB/COM, VSS,     PERL, ColdFusion, and accounting systems (Solomon)     integration.</li>
    </ul>
    <h3>MyEzWeb.com, Inc</h3>
    <h4>Senior Architect (5/00 -11/00)</h4>
    <ul>
    <li>Technical lead for a small group of developers where I lead     the design, implementation and organization of     code/objects.</li>
    <li>Skills/tools involved included Bugzilla (<a href="https://web.archive.org/web/20111130070137/http://bugzilla,mozilla.org/">http://bugzilla,mozilla.org/</a>)     for bug tracking/quality assurance, Concurrent Versioning     System (CVS) for version control, Junit unit testing, and Ant     (like make but better for java) for build control/automated     testing/deployment/containment of unit test code to keep out of     deployment code.</li>
    <li>In addition to my contributions in object/database design     and application lifecycle management, I was leading the way in     the Research and Development for the future of the company's     technical direction, including employing IBM's SanFrancisco,     J2EE technologies (JNDI, EJB, JMS) and making recommendations     based on my experience with the products and the needs of the     company.</li>
    <li>As well as setting up the plumbing for a successful     programming environment and laying down the foundation for the     technical direction/future of the company, I helped train the     team of programmers in OOP techniques and practices including     Object Patterns, general rules of encapsulation, abstraction     and interface design and implementation.</li>
    </ul>
    <h3>Dotster SDK</h3>
    <h4>Java Beans Developer (4/00 -5/00)</h4>
    <ul style="margin-top: 0in">
    <li>Java Beans were used to make a cross-platform middleware     agent to the dotster registrar service. The same source     code/compiled java bytecode worked for ASP (as COM/ActiveX),     JSP/Servlets, ColdFusion and any other platform that gives a     handle to a Java Beans object/component layer.</li>
    <li>Socket communications to the Dotster server were pooled and     used encryption to send information securely to the Dotster     server from anywhere on the Internet.</li>
    <li>JavaDoc comments were used throughout the code for the API     documentation.</li>
    </ul>
    <h3>Omnikron Systems, Inc.</h3>
    <h4>ColdFusion Developer/Technical Lead (11/99 -4/00)</h4>
    <ul>
    <li>ColdFusion developer for various projects including     technical lead for smalloffice.com, a then client company of     Omnikron.</li>
    <li>Designed the Oracle Database backend and implemented the     DHTML throughout the site (smalloffice.com)</li>
    <li>As technical lead on the project I was heavily involved in     the over-all design of the site including our efforts to     integrate with all the smalloffice.com partners. Integration     involved sharing of the user database through XML and an     exit-page system that would establish the user's session on the     partner's web application.</li>
    <li>Technical documentation and workflow diagrams as well as     regular meetings were used to help the team of 9 developers     produce a cohesive production.</li>
    </ul>
    <h3>WhatsHotNow.com, Inc.</h3>
    <h4>Java Programmer (4/99 -11/99)</h4>
    <ul>
    <li>Java Servlets and Microsoft SQL Server 7</li>
    <li>Responsibilities included many of the site's features: the     Hot List, user nominations, club pages, user preferences,     ordering system and a spider that regularly crawled the web for     search result counts as an additional feedback system.</li>
    <li>Important skills/contributions to the site included     cacheable components, credit card validation (CyberSource), XML     order exchange, and integration of our online ordering system     with SBT accounting software (Visual FoxPro).</li>
    <li>Additional knowledge/API experience: Junit unit testing,     JavaDoc, Servlet, JavaMail, JDBC, and more.</li>
    </ul>
    <h3>National Academy of Recording Arts and Sciences, Inc.</h3>
    <h4>Information Systems Specialist (7/98 -4/99)</h4>
    <ul>
    <li>Webmaster of press.grammy.com, the Recording Academy's     press/media portal.</li>
    <li>CGI programmer &amp; Technical Contact for <a href="https://web.archive.org/web/20111130070137/http://www.grammy.com/">www.grammy.com</a>, including     maintenance of existing code and creation of new CGI scripts     (PERL).</li>
    <li>Modified legacy code to exchange data with IBM for GRAMMY     wbecast (<a href="https://web.archive.org/web/20111130070137/http://www.grammy.com/">www.grammy.com</a>).</li>
    <li>Analyze web site traffic logs to generate comprehensive     reports of <a href="https://web.archive.org/web/20111130070137/http://www.grammy.com/">www.grammy.com</a> and press.grammy.com.</li>
    <li>Set up and maintained RedHat Linux servers for Web, SMB     (Windows networking), AppleTalk (Macintosh networking), DHCP,     NFS, and DNS.</li>
    <li>Set up and supported company computers (hardware and     software) and staff.</li>
    </ul>
    <h3>California State University, Northridge</h3>
    <h4>Residential Computing Resources Manager (5/95 -8/98)</h4>
    <ul>
    <li>Determined content, layout and design of rcr.csun.edu,     including coding a library in JavaScript for data validation of     web form input. The library used regular expressions and     encapsulation to make it easy integration for multiple uses.     All web programming done here ran on the server-side using ASP     to ensure compatibility across platforms/browsers.</li>
    <li>Set up, maintained and administered Windows NT 4.0 server,     including IIS 4.0</li>
    <li>Managed and trained a staff of 20, educating them in TCP/IP     networking, HTML design, Microsoft Office, and a wide variety     of Internet Applications (FTP, gopher, etc...).</li>
    <li>Set up computer workrooms for student use and design,     content, and implementation of closed circuit cable     channel.</li>
    <li>Received plaque recognizing three years of tremendous     contributions in the field of technology and for being a     pivotal player in the growth and maturation of the Residential     Computing Resources program from the directors of the     program.</li>
    </ul>
    <h3>National Academy of Recording Arts &amp; Sciences, Inc. 38th   GRAMMY Awards</h3>
    <h4>Webmaster, GRAMMY Insider (1996)</h4>
    <ul>
    <li>Combined articles from an editor with an artist's direction     to create the content and style of the site.</li>
    <li>Published database records in HTML of past 37 GRAMMY Awards     results using automation scripts.</li>
    <li>Managed all links, HTML code and functionality of the     GRAMMY Insider.</li>
    </ul>
    <p>&nbsp;</p>
    <h2>Education</h2>
    <h3>California State University, Northridge</h3>
    <h4>Bachelor's Degree in Music Performance (1998)</h4>

    <p>Last updated: 2021-11-18</p>

</section>

