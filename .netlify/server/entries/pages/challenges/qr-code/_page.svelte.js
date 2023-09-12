import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Attr } from "../../../../chunks/Attr.js";
const QRCode_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');:root{--qrc-color-white:hsl(0, 0%, 100%);--qrc-color-light-gray:hsl(212, 45%, 89%);--qrc-color-grayish-blue:hsl(220, 15%, 55%);--qrc-color-dark-blue:hsl(218, 44%, 22%)}.container.svelte-r6uhz0{background-color:var(--qrc-color-light-gray);min-height:100vh;text-align:center;font-family:'Outfit', sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center}.card.svelte-r6uhz0{background:var(--qrc-color-white);width:320px;padding:16px;border-radius:20px;box-shadow:0px 25px 25px rgba(0, 0, 0, 0.0476518)}picture.svelte-r6uhz0{width:100%;height:288px;display:block}img.svelte-r6uhz0{width:inherit;height:inherit;border-radius:10px}.title.svelte-r6uhz0{font-size:1.38rem;line-height:1.7rem;font-weight:700;padding-top:13px;padding-bottom:5px;margin:10px 8px;color:var(--qrc-color-dark-blue)}.description.svelte-r6uhz0{font-size:15px;padding:0 11.3px;margin-bottom:24px;line-height:1.2;color:var(--qrc-color-grayish-blue)}",
  map: null
};
const imageSrc = "https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code";
const QRCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="container svelte-r6uhz0" role="main"><div class="card svelte-r6uhz0"><picture class="svelte-r6uhz0"><source type="image/avif" srcset="${escape(imageSrc, true) + ".avif"}"> <source type="image/webp" srcset="${escape(imageSrc, true) + ".webp"}"> <source type="image/jpg" srcset="${escape(imageSrc, true) + ".jpg"}"> <img src="${escape(imageSrc, true) + ".png"}" alt="QR Code" class="svelte-r6uhz0"></picture> <div class="text-content" data-svelte-h="svelte-1u90gx2"><h1 class="title svelte-r6uhz0">Improve your front-end skills by building projects</h1> <p class="description svelte-r6uhz0">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p></div></div> ${validate_component(Attr, "Attr").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(QRCode, "QrCode").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
