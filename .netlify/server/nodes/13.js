

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/challenges/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.b42233dc.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js","_app/immutable/chunks/Attr.17641f03.js"];
export const stylesheets = ["_app/immutable/assets/13.7f1ae4e4.css","_app/immutable/assets/Attr.68157a70.css"];
export const fonts = [];
