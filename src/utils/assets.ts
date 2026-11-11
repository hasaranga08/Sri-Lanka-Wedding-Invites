/**
 * Universal Asset & URL Resolver
 * Dynamically resolves public assets and invitation routes with Vite's configured BASE_URL.
 * Seamlessly adapts between:
 * - Local development & AI Studio preview: base = '/' -> '/assets/...' and '/roshini-hasaranga/'
 * - Stage 1 (Temporary GitHub Pages): base = '/YOUR-REPOSITORY-NAME/' -> '/YOUR-REPOSITORY-NAME/assets/...'
 * - Stage 2 (Custom Domain): base = '/' -> 'https://srilankaweddinginvites.lk/roshini-hasaranga/'
 */

export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export const getInvitationUrl = (slug: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
  const formattedSlug = cleanSlug.endsWith('/') ? cleanSlug : `${cleanSlug}/`;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${formattedSlug}`;
};
