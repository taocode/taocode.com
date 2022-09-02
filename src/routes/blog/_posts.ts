import fs from 'fs';
import frontMatter from 'front-matter';
import { marked }  from 'marked';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
import readingTime from 'reading-time';

loadLanguages(['shell', 'markdown', 'json','js','ts']);

const posts = fs
  .readdirSync('./src/posts')
  .filter((elem) => elem.endsWith('.svx') || elem.endsWith('.md'))
  .map((postFilename) => {
    const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
      encoding: 'utf8',
    });

    const postFrontMatter = frontMatter(postContent);
    // marked.setOptions({
    //   highlight: (source, lang: string) => {
    //     const html = Prism.highlight(source, Prism.languages[lang], lang);
    //     return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`;
    //   }
    // })

    const html = marked.parse(postFrontMatter.body);
    const excerpt = marked.parse(postFrontMatter.attributes['excerpt']);
    const readingTimeDuration = readingTime(postFrontMatter.body).text;

    return {
      ...postFrontMatter.attributes,
      html: marked.parse(html),
      excerpt: excerpt,
      readingTime: readingTimeDuration,
    };
  });

const modifiedPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
  );

export default modifiedPosts;
