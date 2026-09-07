import type { Picture } from '@sveltejs/enhanced-img';

const thumbnailModules = import.meta.glob<{ default: Picture }>(
  '$lib/images/{portfolio,programming,life}/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
    },
  },
);

function thumbnailKeySuffix(path: string): string {
  return path
    .replaceAll('\\', '/')
    .replace(/^\$lib\/images\//, '')
    .replace(/^\/images\//, '');
}

/** Resolve a post `thumbnail` front-matter path to an enhanced Picture. */
export function getThumbnail(path: string | undefined): Picture | undefined {
  if (!path) return undefined;

  const direct = thumbnailModules[path];
  if (direct) return direct.default;

  const suffix = thumbnailKeySuffix(path);
  const match = Object.entries(thumbnailModules).find(([key]) =>
    thumbnailKeySuffix(key).endsWith(suffix),
  );

  return match?.[1].default;
}
