

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4c0e6270.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js","_app/immutable/chunks/singletons.20a68d7d.js","_app/immutable/chunks/index.fd1fe81a.js"];
export const stylesheets = [];
export const fonts = [];
