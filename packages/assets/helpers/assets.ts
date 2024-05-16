import fs from 'fs';
import { IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import { Connect, Plugin, PluginOption } from 'vite';

import { DEFAULT_MIME_TYPE, supportedMimeTypes } from '.';

export const serveExternalAssets = ({
	assets,
	transform,
	additionalMiddlewareHook,
}: {
	assets: AssetPath[];
	additionalMiddlewareHook?: Connect.NextHandleFunction;
} & Pick<Plugin, 'transform'>): PluginOption =>
	({
		name: 'serve-external-assets',
		configureServer: server => {
			server.middlewares.use(async (req, res, next) => {
				const shouldReturn = additionalMiddlewareHook?.(req, res, next);
				if (shouldReturn) return;

				const url = req.url!;
				const replaceAsset = assets.find(replacePath => url.includes(replacePath.replacePath));
				if (replaceAsset) {
					modifyServeFilePath(res, url, replaceAsset.sourcePath, replaceAsset.replacePath);
					return;
				} else {
					next();
				}
			});
		},
		transform,
	}) satisfies PluginOption;

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

export type AssetPath = {
	replacePath: string;
	sourcePath: string;
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
