

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/challenges/results-summary/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.82b2bdf6.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js"];
export const stylesheets = ["_app/immutable/assets/app.70c5dddc.css"];
export const fonts = [];
