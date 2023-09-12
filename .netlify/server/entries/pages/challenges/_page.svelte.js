import { c as create_ssr_component, a as subscribe, b as each, e as escape } from "../../../chunks/ssr.js";
import { g as glbVars } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');.patient0.svelte-cpyuhn.svelte-cpyuhn{display:flex;justify-content:center;font-family:'Outfit', sans-serif;padding:50px}.container.svelte-cpyuhn.svelte-cpyuhn{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;background-color:white;min-height:100vh;text-align:center;font-family:'Outfit', sans-serif;padding:0 50px 50px}.challenges.svelte-cpyuhn.svelte-cpyuhn{display:flex;flex-wrap:wrap;justify-content:center;max-width:1200px;margin:0 auto}.challenges.svelte-cpyuhn>div.svelte-cpyuhn{flex-basis:calc(33.33% - 100px);margin:10px;text-align:center;padding-bottom:20px;background-color:#f5f5f5}.challenges.svelte-cpyuhn img.svelte-cpyuhn{max-width:100%;height:auto}.challenges.svelte-cpyuhn p.svelte-cpyuhn{margin:10px}.challenges.svelte-cpyuhn .soon.svelte-cpyuhn{background-color:#cecece;color:white;filter:grayscale(1)}.challenges.svelte-cpyuhn .soon a.svelte-cpyuhn{visibility:hidden}.title.svelte-cpyuhn.svelte-cpyuhn{font-size:1rem;font-weight:700;line-height:1}.level.svelte-cpyuhn.svelte-cpyuhn{padding:2px 8px;color:white;background-color:teal;line-height:1;font-size:14px}.link.svelte-cpyuhn.svelte-cpyuhn{font-size:14px;text-decoration:none;line-height:1}.link.svelte-cpyuhn.svelte-cpyuhn:hover{color:teal}@media screen and (max-width: 1024px){.challenges.svelte-cpyuhn.svelte-cpyuhn{max-width:800px}.challenges.svelte-cpyuhn>div.svelte-cpyuhn{flex-basis:calc(50% - 20px)}}@media screen and (max-width: 480px){.challenges.svelte-cpyuhn>div.svelte-cpyuhn{flex-basis:100%}}",
  map: null
};
const projectUrl = "/challenges/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $glbVars, $$unsubscribe_glbVars;
  $$unsubscribe_glbVars = subscribe(glbVars, (value) => $glbVars = value);
  const challenges = [
    {
      order: 1,
      title: "QR Code",
      thumb: "1.jpg",
      slug: "qr-code",
      level: "newbie"
    },
    {
      order: 2,
      title: "Product Preview Card",
      thumb: "2.jpg",
      slug: "product-preview-card",
      level: "newbie"
    },
    {
      order: 3,
      title: "Results Summary",
      thumb: "3.jpg",
      slug: "results-summary",
      level: "newbie"
    },
    {
      order: 4,
      title: "Profile Card",
      thumb: "4.jpg",
      slug: "profile-card",
      level: "newbie"
    },
    {
      order: 5,
      title: "Order Summary",
      thumb: "5.jpg",
      slug: "order-summary",
      level: "newbie"
    },
    {
      order: 6,
      title: "3-Col Preview card",
      thumb: "6.jpg",
      slug: "three-column-preview-card",
      level: "newbie"
    },
    {
      order: 7,
      title: "Stats Preview Card",
      thumb: "7.jpg",
      slug: "#",
      level: "soon"
    },
    {
      order: 8,
      title: "Coming Soon",
      thumb: "7.jpg",
      slug: "#",
      level: "soon"
    },
    {
      order: 9,
      title: "Untitled",
      thumb: "7.jpg",
      slug: "#",
      level: "soon"
    }
  ];
  challenges.sort((a, b) => b.order - a.order);
  $$result.css.add(css);
  $$unsubscribe_glbVars();
  return `<section class="patient0 svelte-cpyuhn" data-svelte-h="svelte-dqdkjc"><h1 class="gradient-text">Challenges</h1></section> <section class="container svelte-cpyuhn" role="main"><div class="challenges svelte-cpyuhn">${each(challenges, (item) => {
    return `<div class="${"item challenge-" + escape(item.slug, true) + " " + escape(item.level === "soon" ? "soon" : "", true) + " svelte-cpyuhn"}"><picture><source type="image/jpg" srcset="${escape($glbVars.cdnUrl, true) + "/" + escape(item.thumb, true)}"> <img src="${escape($glbVars.cdnUrl, true) + "/" + escape(item.thumb, true)}" alt="Challenge Preview" class="svelte-cpyuhn"></picture> <p class="title svelte-cpyuhn">${escape(item.title)}</p> ${item.level !== "soon" ? `<p class="svelte-cpyuhn"><span class="level svelte-cpyuhn">${escape(item.level)}</span></p>` : ``} <a class="link svelte-cpyuhn" href="${escape(projectUrl, true) + escape(item.slug, true)}" title="Project URL">View Solution</a> </div>`;
  })}</div> </section>`;
});
export {
  Page as default
};
