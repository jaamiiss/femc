import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Attr } from "../../../../chunks/Attr.js";
const ThreeColPreviewCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');:root{--tcpc-color-bright-orange:hsl(31, 77%, 52%);--tcpc-color-dark-cyan:hsl(184, 100%, 22%);--tcpc-color-very-dark-cyan:hsl(179, 100%, 13%);--tcpc-color-transparent-white:hsla(0, 0%, 100%, 0.75);--tcpc-color-very-light-gray:hsl(0, 0%, 95%)}.container.svelte-ld4ind.svelte-ld4ind{min-height:100vh;display:flex;font-size:15px;background:var(--tcpc-color-very-light-gray);flex-direction:column;justify-content:center;align-items:center}.tc-preview-card.svelte-ld4ind.svelte-ld4ind{color:var(--tcpc-color-very-light-gray);font-family:'Lexend Deca', sans-serif;display:flex;border-radius:8px;max-width:70rem;overflow:hidden}.column.svelte-ld4ind.svelte-ld4ind{width:33.333%;padding:40px}.sedans.svelte-ld4ind.svelte-ld4ind{background:var(--tcpc-color-bright-orange)}.suvs.svelte-ld4ind.svelte-ld4ind{background:var(--tcpc-color-dark-cyan)}.luxury.svelte-ld4ind.svelte-ld4ind{background:var(--tcpc-color-very-dark-cyan)}.sedans.svelte-ld4ind .btn.svelte-ld4ind{color:var(--tcpc-color-bright-orange)}.suvs.svelte-ld4ind .btn.svelte-ld4ind{color:var(--tcpc-color-dark-cyan)}.luxury.svelte-ld4ind .btn.svelte-ld4ind{color:var(--tcpc-color-very-dark-cyan)}.btn.svelte-ld4ind.svelte-ld4ind{padding:13px 30px;border-radius:30px;border:2px solid var(--tcpc-color-very-light-gray);cursor:pointer;background:var(--tcpc-color-very-light-gray)}.btn.svelte-ld4ind.svelte-ld4ind:hover{color:var(--tcpc-color-very-light-gray);background:transparent}.title.svelte-ld4ind.svelte-ld4ind{font-family:'Big Shoulders Display', sans-serif;text-transform:uppercase}",
  map: null
};
const iconCart = "https://ik.imagekit.io/ivw8jbdbt/FEMC/icon-cart.svg";
const ThreeColPreviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="container svelte-ld4ind" role="main"><div class="tc-preview-card svelte-ld4ind"><div class="column sedans svelte-ld4ind"><img${add_attribute("src", iconCart, 0)} alt="Car type icon"> <h1 class="title svelte-ld4ind" data-svelte-h="svelte-ar4oix">Sedans</h1> <p class="description" data-svelte-h="svelte-1995e2w">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip.</p> <button class="btn svelte-ld4ind" data-svelte-h="svelte-1cogsf2">Learn More</button></div> <div class="column suvs svelte-ld4ind"><img${add_attribute("src", iconCart, 0)} alt="Car type icon"> <h1 class="title svelte-ld4ind" data-svelte-h="svelte-1ufrk5u">SUVs</h1> <p class="description" data-svelte-h="svelte-we1w4g">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures.</p> <button class="btn svelte-ld4ind" data-svelte-h="svelte-1cogsf2">Learn More</button></div> <div class="column luxury svelte-ld4ind"><img${add_attribute("src", iconCart, 0)} alt="Car type icon"> <h1 class="title svelte-ld4ind" data-svelte-h="svelte-106aevc">Luxury</h1> <p class="description" data-svelte-h="svelte-izwtnr">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style.</p> <button class="btn svelte-ld4ind" data-svelte-h="svelte-1cogsf2">Learn More</button></div></div> ${validate_component(Attr, "Attr").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ThreeColPreviewCard, "ThreeColPreviewCard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
