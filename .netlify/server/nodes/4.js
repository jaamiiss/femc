

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/challenges/order-summary/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.d0e0f0cb.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.b6678bcc.js"];
export const stylesheets = ["_app/immutable/assets/app.70c5dddc.css"];
export const fonts = [];
