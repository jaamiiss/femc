import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8294eefc.js","app":"_app/immutable/entry/app.16c52dc6.js","imports":["_app/immutable/entry/start.8294eefc.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/singletons.20a68d7d.js","_app/immutable/chunks/index.fd1fe81a.js","_app/immutable/entry/app.16c52dc6.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js')),
			__memo(() => import('../server/nodes/16.js')),
			__memo(() => import('../server/nodes/17.js')),
			__memo(() => import('../server/nodes/18.js')),
			__memo(() => import('../server/nodes/19.js')),
			__memo(() => import('../server/nodes/20.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/challenges",
				pattern: /^\/challenges\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/challenges/newsletter",
				pattern: /^\/challenges\/newsletter\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/challenges/order-summary",
				pattern: /^\/challenges\/order-summary\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/challenges/product-preview-card",
				pattern: /^\/challenges\/product-preview-card\/?$/,
				params: [],
				page: { layouts: [0,2,5,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/challenges/profile-card",
				pattern: /^\/challenges\/profile-card\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/challenges/qr-code",
				pattern: /^\/challenges\/qr-code\/?$/,
				params: [],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/challenges/results-summary",
				pattern: /^\/challenges\/results-summary\/?$/,
				params: [],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/challenges/stats-preview-card",
				pattern: /^\/challenges\/stats-preview-card\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/challenges/three-column-preview-card",
				pattern: /^\/challenges\/three-column-preview-card\/?$/,
				params: [],
				page: { layouts: [0,2,10,], errors: [1,,,], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
