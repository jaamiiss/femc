import { c as create_ssr_component } from "../../../../chunks/ssr.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-13tcli9_START -->${$$result.title = `<title>QR Code</title>`, ""}<!-- HEAD_svelte-13tcli9_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
