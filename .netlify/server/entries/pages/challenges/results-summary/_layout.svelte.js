import { c as create_ssr_component } from "../../../../chunks/ssr.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-17ne37n_START -->${$$result.title = `<title>Results Summary</title>`, ""}<!-- HEAD_svelte-17ne37n_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
