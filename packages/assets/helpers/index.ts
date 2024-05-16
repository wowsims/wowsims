export * from './assets';

export const DEFAULT_MIME_TYPE = 'application/octet-stream';
export const supportedMimeTypes = {
	'image/jpeg': ['.jpg', '.jpeg'],
	'image/png': ['.png'],
	'image/gif': ['.gif'],
	'image/webp': ['.webp'],
	'image/avif ': ['.avif '],
	'text/css': ['.css'],
	'text/javascript': ['.js'],
	'font/woff2': ['.woff2', 'woff'],
	'application/json': ['.json'],
	'application/wasm': ['.wasm'],
};
