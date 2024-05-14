export const getAsset = (assetPath: string) => {
	return new URL(assetPath, import.meta.url).href;
};
