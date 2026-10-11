import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypePrism from 'rehype-prism-plus';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig, type Plugin } from 'vite';

const require = createRequire(import.meta.url);

/** Icon names this site renders via `@iconify/svelte`. Keep in sync with `<Icon icon>` usages. */
const usedIcons: Record<string, readonly string[]> = {
  carbon: ['sun', 'moon', 'string-text'],
  'fa6-solid': [
    'share',
    'bars',
    'chevron-up',
    'envelope',
    'rss',
    'check',
    'compass-drafting',
    'clipboard-list',
    'person-chalkboard',
    'universal-access',
  ],
  'fa6-brands': [
    'facebook',
    'linkedin',
    'twitter',
    'reddit',
    'pinterest',
    'github',
  ],
  'fa6-regular': ['clock'],
  feather: ['chevron-left', 'chevron-right', 'external-link'],
};

const VIRTUAL_ID = 'virtual:iconify-collections';
const RESOLVED_VIRTUAL_ID = `\0${VIRTUAL_ID}`;

function iconifySubsetPlugin(): Plugin {
  return {
    name: 'iconify-subset',
    resolveId(id) {
      if (id === VIRTUAL_ID) {
        return RESOLVED_VIRTUAL_ID;
      }
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_ID) {
        return;
      }

      const collections = Object.entries(usedIcons).map(([prefix, names]) => {
        const jsonPath = require.resolve(`@iconify-json/${prefix}/icons.json`);
        this.addWatchFile(jsonPath);

        const collection = JSON.parse(readFileSync(jsonPath, 'utf8')) as {
          prefix: string;
          width?: number;
          height?: number;
          icons: Record<string, unknown>;
        };

        const icons: Record<string, unknown> = {};
        for (const name of names) {
          const icon = collection.icons[name];
          if (!icon) {
            throw new Error(
              `Icon ${prefix}:${name} not found in @iconify-json/${prefix}`,
            );
          }
          icons[name] = icon;
        }

        return {
          prefix: collection.prefix,
          width: collection.width,
          height: collection.height,
          icons,
        };
      });

      return `export default ${JSON.stringify(collections)};`;
    },
  };
}

globalThis.Prism = Prism;

const extensions = ['.svelte', '.svx'];

export default defineConfig({
  plugins: [
    iconifySubsetPlugin(),
    tailwindcss(),
    enhancedImages(),
    sveltekit({
      preprocess: [
        vitePreprocess(),
        mdsvex({
          extensions: ['.svx'],
          layout: { post: './src/lib/layouts/post.svx' },
          highlight: { alias: { js: 'javascript', ts: 'typescript' } },
          // rehype-prism-plus is untyped against mdsvex's unified Plugin type.
          // This lived in untyped svelte.config.js before the Kit 3 move.
          rehypePlugins: [[rehypePrism, { ignoreMissing: true }] as never],
        }),
      ],
      extensions,
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true,
      }),
      version: { pollInterval: 0 },
    }),
  ],
  server: { port: 5115 },
});
