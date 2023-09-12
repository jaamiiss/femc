import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
const StatsPreviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(StatsPreviewCard, "StatsPreviewCard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
