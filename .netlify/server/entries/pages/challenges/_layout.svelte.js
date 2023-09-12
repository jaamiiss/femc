import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-g70313_START -->${$$result.title = `<title>Challenges</title>`, ""}<!-- HEAD_svelte-g70313_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
