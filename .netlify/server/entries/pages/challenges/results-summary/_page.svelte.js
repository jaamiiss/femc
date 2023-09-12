import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Attr } from "../../../../chunks/Attr.js";
const ResultsSummary_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,700;0,800;1,500&display=swap');:root{--rs-color-light-red:hsl(0, 100%, 67%);--rs-color-orangey-yellow:hsl(39, 100%, 56%);--rs-color-green-teal:hsl(166, 100%, 37%);--rs-color-cobalt-blue:hsl(234, 85%, 45%);--rs-bg-color-light-red:hsla(0, 100%, 67%, 6%);--rs-bg-color-orangey-yellow:hsla(39, 100%, 56%, 6%);--rs-bg-color-green-teal:hsla(166, 100%, 37%, 6%);--rs-bg-color-cobalt-blue:hsla(234, 85%, 45%, 6%);--rs-color-light-slate-blue:hsl(252, 100%, 67%);--rs-color-light-royal-blue:hsl(241, 81%, 54%);--rs-color-violet-blue:hsla(256, 72%, 46%, 1);--rs-color-persian-blue:hsla(241, 72%, 46%, 0);--rs-color-white:hsl(0, 0%, 100%);--rs-color-pale-blue:hsl(221, 100%, 96%);--rs-color-light-lavender:hsl(241, 100%, 89%);--rs-color-dark-gray-blue:hsl(224, 30%, 27%);--rs-color-w-70p:hsla( 0, 0%, 100%, .7);--rs-color-dgb-50p:hsla(224, 30%, 27%, 0.5);--rs-color-dgb-20p:hsla(224, 30%, 27%, 0.2)}.container.svelte-1vkpsdl.svelte-1vkpsdl{font-family:'Hanken Grotesk', sans-serif;min-height:100vh;display:grid;place-items:center}img.svelte-1vkpsdl.svelte-1vkpsdl{display:block;max-width:100%}.flex-group.svelte-1vkpsdl.svelte-1vkpsdl{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.grid-flow.svelte-1vkpsdl.svelte-1vkpsdl{display:grid;align-content:start;gap:1rem}.grid-flow[data-spacing="large"].svelte-1vkpsdl.svelte-1vkpsdl{gap:2rem}.results-summary.svelte-1vkpsdl.svelte-1vkpsdl{border-radius:20px;max-width:46rem;display:grid}.results.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-w-70p);text-align:center;background:linear-gradient(var(--rs-color-light-slate-blue),\r
    var(--rs-color-light-royal-blue));border-radius:20px;padding:2.5rem calc(2.5rem * 1.8)}.overall-score.svelte-1vkpsdl.svelte-1vkpsdl{display:grid;place-content:center;width:12rem;margin-inline:auto;background:linear-gradient(var(--rs-color-violet-blue),\r
    var(--rs-color-persian-blue));aspect-ratio:1/1;border-radius:50%}.overall-score.svelte-1vkpsdl span.svelte-1vkpsdl{display:block;font-size:60px;font-weight:800;line-height:1;margin-bottom:5px;color:var( --rs-color-white)}.rank.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-white);font-size:24px;font-weight:700;;}.title.svelte-1vkpsdl.svelte-1vkpsdl{font-size:1.5rem;font-weight:700}.summary.svelte-1vkpsdl.svelte-1vkpsdl{padding:2.5rem}.summary-item.svelte-1vkpsdl.svelte-1vkpsdl{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-radius:.5rem}.reaction.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-light-red);background-color:var(--rs-bg-color-light-red)}.memory.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-orangey-yellow);background-color:var(--rs-bg-color-orangey-yellow)}.verbal.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-green-teal);background-color:var(--rs-bg-color-green-teal)}.visual.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-cobalt-blue);background-color:var(--rs-bg-color-cobalt-blue)}.score.svelte-1vkpsdl.svelte-1vkpsdl{color:var(--rs-color-dgb-50p);font-weight:800}.score.svelte-1vkpsdl span.svelte-1vkpsdl{color:var(--rs-color-dark-gray-blue)}.btn.svelte-1vkpsdl.svelte-1vkpsdl{padding:1rem 2rem;border:0;font-weight:700;border-radius:100vw;cursor:pointer;line-height:1;color:var( --rs-color-white);border-radius:9999px;background-color:var(--rs-color-dark-gray-blue)}.btn.svelte-1vkpsdl.svelte-1vkpsdl:hover{background:linear-gradient(var(--rs-color-light-slate-blue), \r
    var(--rs-color-light-royal-blue))}@media(min-width: 600px){.results-summary.svelte-1vkpsdl.svelte-1vkpsdl{grid-template-columns:1fr 1fr;border-radius:2rem;box-shadow:.5rem 1rem 3rem \r
        var(--rs-color-dgb-20p);overflow:hidden;margin-inline:1rem}}`,
  map: null
};
let overallScore = 76;
let classification = "Great";
const iconSrc = "https://ik.imagekit.io/ivw8jbdbt/FEMC";
const ResultsSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "/icon-visual.svg"
    }
  ];
  $$result.css.add(css);
  return `<section class="container svelte-1vkpsdl" role="main"><div class="results-summary svelte-1vkpsdl"><div class="results grid-flow svelte-1vkpsdl" data-spacing="large"><h1 class="title svelte-1vkpsdl" data-svelte-h="svelte-d7jbsf">Your Result</h1> <p class="overall-score svelte-1vkpsdl"><span class="svelte-1vkpsdl">${escape(overallScore)}</span> of 100</p> <div class="grid-flow svelte-1vkpsdl"><p class="rank svelte-1vkpsdl">${escape(classification)}</p> <p class="description" data-svelte-h="svelte-2b5ke">You scored higher than 65% of the people who have taken these tests.</p></div></div> <div class="summary grid-flow svelte-1vkpsdl" data-spacing="large"><h2 class="title svelte-1vkpsdl" data-svelte-h="svelte-197jbv3">Summary</h2> <div class="grid-flow svelte-1vkpsdl">${each(data, (item) => {
    return `<div class="${"summary-item " + escape(item.category.toLowerCase(), true) + " svelte-1vkpsdl"}"><div class="flex-group svelte-1vkpsdl"><span class="icon svelte-1vkpsdl"><img${add_attribute("src", iconSrc + "/" + item.icon, 0)}${add_attribute("alt", item.category, 0)} class="svelte-1vkpsdl"></span> <p class="item-title">${escape(item.category)}</p></div> <p class="score svelte-1vkpsdl"><span class="svelte-1vkpsdl">${escape(item.score)}</span> / 100</p> </div>`;
  })}</div> <button class="btn svelte-1vkpsdl" data-svelte-h="svelte-1mwqur8">Continue</button></div></div> ${validate_component(Attr, "Attr").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ResultsSummary, "ResultsSummary").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
