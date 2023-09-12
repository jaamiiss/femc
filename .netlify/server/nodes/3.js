

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/challenges/newsletter/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d35f3df4.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js"];
export const stylesheets = ["_app/immutable/assets/app.70c5dddc.css"];
export const fonts = [];
