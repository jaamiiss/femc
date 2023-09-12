import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Attr } from "../../../../chunks/Attr.js";
import { g as glbVars } from "../../../../chunks/stores.js";
const OrderSummary_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');:root{--os-color-pale-blue:hsl(225, 100%, 94%);--os-color-bright-blue:hsl(245, 75%, 52%);--os-color-very-pale-blue:hsl(225, 100%, 98%);--os-color-desaturated-blue:hsl(224, 23%, 55%);--os-color-dark-blue:hsl(223, 47%, 23%)}.container.svelte-eqgxot.svelte-eqgxot{font-family:'Red Hat Display',sans-serif;font-size:16px;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:var(--os-color-pale-blue)}.order-summary.svelte-eqgxot.svelte-eqgxot{background:white;position:relative;width:350px;border-radius:14px;overflow:hidden}.pricing.svelte-eqgxot.svelte-eqgxot{display:flex;justify-content:space-evenly;align-items:center;padding:1rem;border-radius:.5rem}.icon.svelte-eqgxot img.svelte-eqgxot{width:35px;height:35px}.details.svelte-eqgxot.svelte-eqgxot{text-align:center;;}.summary.svelte-eqgxot.svelte-eqgxot{padding:20px}.cover-photo.svelte-eqgxot.svelte-eqgxot{width:100%}.plan.svelte-eqgxot.svelte-eqgxot{text-align:left;padding:0 20px}.title.svelte-eqgxot.svelte-eqgxot{font-size:16px}.price.svelte-eqgxot.svelte-eqgxot{font-size:14px}.btn.svelte-eqgxot.svelte-eqgxot{cursor:pointer;border:0;border-radius:12px;padding:0.75rem;width:100%;margin-bottom:15px;font-weight:700}.btn-primary.svelte-eqgxot.svelte-eqgxot{background-color:var(--os-color-bright-blue);color:white}.btn-cancel.svelte-eqgxot.svelte-eqgxot{background:none;color:var(--os-color-desaturated-blue);margin-bottom:0}.btn-primary.svelte-eqgxot.svelte-eqgxot:hover{background:var(--os-color-pale-blue);color:var(--os-color-desaturated-blue)}.btn-cancel.svelte-eqgxot.svelte-eqgxot:hover{background:var(--os-color-bright-blue);color:white}.btn-change.svelte-eqgxot.svelte-eqgxot{background:none;width:100%;text-decoration:underline;color:var(--os-color-bright-blue);text-align:right}",
  map: null
};
const OrderSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $glbVars, $$unsubscribe_glbVars;
  $$unsubscribe_glbVars = subscribe(glbVars, (value) => $glbVars = value);
  $$result.css.add(css);
  $$unsubscribe_glbVars();
  return `<section class="container svelte-eqgxot" role="main"><div class="order-summary svelte-eqgxot"><img class="cover-photo svelte-eqgxot" src="${escape($glbVars.cdnUrl, true) + "/illustration-hero.svg"}" alt="Order Summary Cover"> <div class="summary svelte-eqgxot"><div class="details svelte-eqgxot" data-svelte-h="svelte-l29f5p"><h1>Order Summary</h1> <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p></div> <div class="pricing svelte-eqgxot"><span class="icon svelte-eqgxot"><img src="${escape($glbVars.cdnUrl, true) + "/icon-music.svg"}" alt="Music icon" class="svelte-eqgxot"></span> <div class="plan svelte-eqgxot" data-svelte-h="svelte-jg885o"><h2 class="title svelte-eqgxot">Annual Plan</h2> <p class="price svelte-eqgxot">$59.099/year</p></div> <button class="btn btn-change svelte-eqgxot" data-svelte-h="svelte-nzeqvw">Change</button></div> <div class="buttons" data-svelte-h="svelte-2sbtyd"><button class="btn btn-primary svelte-eqgxot">Proceed to Payment</button> <button class="btn btn-cancel svelte-eqgxot">Cancel Order</button></div></div></div> ${validate_component(Attr, "Attr").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(OrderSummary, "OrderSummary").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
