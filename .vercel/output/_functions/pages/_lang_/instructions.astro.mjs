/* empty css                                           */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D7r--r5g.mjs';
import { g as getLangFromUrl, u as useTranslations, $ as $$Layout } from '../../chunks/Layout_Bxvz-Mdk.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Instructions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Instructions;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const instructionItems = new Array(12).fill(null).map((_, i) => {
    return t(`instructions__item_${(i + 1).toString().padStart(2, "0")}`);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": t("index__title"), "data-astro-cid-vvmuoklo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-vvmuoklo> <header data-astro-cid-vvmuoklo> <img src="/assets/logo.png" alt="Logo" style="width:10%; height:auto;" data-astro-cid-vvmuoklo> <h1 data-astro-cid-vvmuoklo>Mora Exams 2025</h1> </header> <div class="tabs" data-astro-cid-vvmuoklo> <a href="/ta/instructions"${addAttribute(["tablinks", { active: lang === "ta" }], "class:list")} data-astro-cid-vvmuoklo>தமிழ்</a> <a href="/en/instructions"${addAttribute([
    "tablinks",
    {
      active: lang === "en"
    }
  ], "class:list")} data-astro-cid-vvmuoklo>English</a> </div> <main class="tabcontent" data-astro-cid-vvmuoklo> <h2 data-astro-cid-vvmuoklo>${t("instructions__title")}</h2> <ul data-astro-cid-vvmuoklo> ${instructionItems.map((item) => renderTemplate`<li data-astro-cid-vvmuoklo>${item}</li>`)} </ul> </main> </div> ` })} `;
}, "D:/Mora_Exams/website/src/pages/[lang]/instructions.astro", void 0);

const $$file = "D:/Mora_Exams/website/src/pages/[lang]/instructions.astro";
const $$url = "/[lang]/instructions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Instructions,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
