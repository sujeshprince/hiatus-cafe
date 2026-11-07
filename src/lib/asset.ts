/**
 * Prefix local image paths when the site is deployed under a sub-path,
 * such as GitHub Pages project sites. `next/image` does not add `basePath`
 * to `src` automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!basePath || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
