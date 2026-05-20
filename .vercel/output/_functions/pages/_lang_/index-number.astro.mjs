/* empty css                                           */
import { c as createComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_D7r--r5g.mjs';
import { g as getLangFromUrl, i as isSupportedLanguage, u as useTranslations, $ as $$Layout } from '../../chunks/Layout_Bxvz-Mdk.mjs';
import { $ as $$16Footer } from '../../chunks/16-footer_BzSnMn-c.mjs';
import { $ as $$1NavigationBar } from '../../chunks/1-navigation-bar_DzvuxwJS.mjs';
import 'clsx';
import { $ as $$Info, a as $$BestWishes } from '../../chunks/info_DlV_IlCL.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$IndexNumberBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IndexNumberBadge;
  const { badge_text, value_text } = Astro2.props;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-1"> <span class="text-sm md:text-base font-light text-gray-600">${badge_text}</span> <div class="flex items-center w-full bg-gray-50 border border-black rounded-sm md:rounded-lg text-lg md:text-xl text-wrap font-medium px-3 py-2">${unescapeHTML(value_text)}</div> </div>`;
}, "D:/Mora_Exams/website/src/components/index_number_badge.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$IndexNumber = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexNumber;
  const { lang } = Astro2.params;
  if (!isSupportedLanguage(lang)) {
    return;
  }
  const t = useTranslations(lang);
  const nicNumber = Astro2.url.searchParams.get("nic") || void 0;
  let selectedNic = void 0;
  if (nicNumber) {
    try {
      const response = await fetch(
        `${"http://localhost:8080"}/student/nic/${nicNumber}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch NIC data");
      }
      if (data.error) {
        selectedNic = null;
      } else {
        selectedNic = data;
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching NIC data:", error);
      selectedNic = null;
    }
  }
  new Array(12).fill(null).map((_, i) => {
    return t(`instructions__item_${(i + 1).toString().padStart(2, "0")}`);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": t("find_your_index_no__title"), "data-astro-cid-wv3wkl4j": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$1NavigationBar, { "data-astro-cid-wv3wkl4j": true })} ${maybeRenderHead()}<section class="text-primary-900 grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-1 lg:grid-rows-[auto_auto] min-h-[50vh] gap-x-5 mb-10" data-astro-cid-wv3wkl4j> ${null} <div class="col-start-1 row-start-3 flex flex-col lg:min-w-[640px] w-full max-w-xl mx-auto mt-10 lg:mt-0" data-astro-cid-wv3wkl4j> ${renderTemplate`<div class="text-black" data-astro-cid-wv3wkl4j> ${renderComponent($$result2, "Info", $$Info, { "text": "Mora Exams 2025 is now over.", "data-astro-cid-wv3wkl4j": true })} ${renderComponent($$result2, "BestWishes", $$BestWishes, { "data-astro-cid-wv3wkl4j": true })} </div>`} </div> <div class="col-start-1 lg:col-start-2 row-start-4 lg:row-start-3 flex flex-col w-full max-w-screen-xl justify-center items-center mx-auto mt-20" data-astro-cid-wv3wkl4j> <p class="mb-4 mt-0 text-xl text-center font-medium" data-astro-cid-wv3wkl4j> ${t("index_number__our_sponsors")} </p> <div class="flex flex-col my-4 gap-16" data-astro-cid-wv3wkl4j> <img class="h-auto w-80 lg:w-96 object-contain sm:rounded-b-lg" src="/sponsors/sltc.png" alt="SLTC" data-astro-cid-wv3wkl4j> <img class="h-auto w-80 lg:w-96 object-contain sm:rounded-b-lg" src="/sponsors/northway-family-mart.png" alt="Northway Family Mart" data-astro-cid-wv3wkl4j> </div> </div> </section> ${renderComponent($$result2, "Footer", $$16Footer, { "data-astro-cid-wv3wkl4j": true })} ` })}  `;
}, "D:/Mora_Exams/website/src/pages/[lang]/index-number.astro", void 0);
const $$file = "D:/Mora_Exams/website/src/pages/[lang]/index-number.astro";
const $$url = "/[lang]/index-number";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$IndexNumber,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
