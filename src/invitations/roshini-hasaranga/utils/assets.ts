/**
 * Utility to resolve public asset URLs with Vite's configured base URL.
 * Automatically adapts between:
 * - Local development: base = '/' -> '/assets/...'
 * - GitHub Pages production: base = '/Wedding-Church-and-Reception/' -> '/Wedding-Church-and-Reception/assets/...'
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
