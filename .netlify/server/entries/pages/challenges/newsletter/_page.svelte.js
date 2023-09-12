import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Attr } from "../../../../chunks/Attr.js";
const NewsletterSignup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1uwnzps{display:flex}",
  map: null
};
const NewsletterSignup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="container svelte-1uwnzps" role="main"><div class="newsletter-signup" data-svelte-h="svelte-13g5ziu"><div class="col-1"></div> <div class="col-2"></div></div> ${validate_component(Attr, "Attr").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NewsletterSignup, "NewsletterSignup").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
