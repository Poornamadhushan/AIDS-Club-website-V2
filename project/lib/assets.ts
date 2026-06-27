const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/AIDS-Club-website-V2';

export function assetPath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
