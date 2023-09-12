import { c as create_ssr_component } from "../../../../chunks/ssr.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-n0iwt5_START -->${$$result.title = `<title>Order Summary</title>`, ""}<!-- HEAD_svelte-n0iwt5_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
