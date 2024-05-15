import fs from 'fs';
import { IncomingMessage, ServerResponse } from 'http';
import path from 'path';

const DEFAULT_MIME_TYPE = 'application/octet-stream';
const supportedMimeTypes = {
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

export const determineContentType = (filePath: string) => {
	const extension = path.extname(filePath).toLowerCase();

	const [mimeType] = Object.entries(supportedMimeTypes).find(([_, extensions]) => extensions?.includes(extension)) || [];
	return mimeType || DEFAULT_MIME_TYPE;
};

export const modifyServeFilePath = (res: ServerResponse<IncomingMessage>, url: string, sourcePath: string, urlReplaceString: string) => {
	const assetRelativePath = url.split(urlReplaceString)[1];
	const requestedPath = path.join(sourcePath, assetRelativePath);
	serveFile(res, requestedPath);
};

export const serveFile = (res: ServerResponse<IncomingMessage>, filePath: string) => {
	if (fs.existsSync(filePath)) {
		const contentType = determineContentType(filePath);
		res.writeHead(200, { 'Content-Type': contentType });
		fs.createReadStream(filePath).pipe(res);
	} else {
		console.log('Not found on filesystem: ', filePath);
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
};
