

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/challenges/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.8a14a8cd.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js","_app/immutable/chunks/each.4e767974.js","_app/immutable/chunks/stores.dd435108.js","_app/immutable/chunks/index.fd1fe81a.js"];
export const stylesheets = ["_app/immutable/assets/12.68c029d5.css"];
export const fonts = [];
