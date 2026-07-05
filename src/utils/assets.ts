const ASSET_BASE_PATH = '/assets';

export function assetUrl(fileName: string): string {
  return `${ASSET_BASE_PATH}/${fileName}`;
}
