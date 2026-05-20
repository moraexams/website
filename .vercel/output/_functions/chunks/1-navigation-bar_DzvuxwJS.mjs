import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, o as renderSlot, a as renderTemplate, r as renderComponent, e as renderScript } from './astro/server_D7r--r5g.mjs';
import 'clsx';
/* empty css                              */
import { g as getLangFromUrl, L as LIST_OF_LANGUAGES, r as replaceLanguage, a as LANGUAGES_DISPLAY_TEXT, u as useTranslations } from './Layout_Bxvz-Mdk.mjs';

const $$Astro$4 = createAstro();
const $$HeaderContactLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderContactLink;
  const { icon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-dzahhn76> <i${addAttribute(`fa-solid fa-${icon} text-s mr-1.5`, "class")} data-astro-cid-dzahhn76></i> <a class="text-inherit no-underline opacity-80 mr-5 hover:opacity-100"${addAttribute(href, "href")} data-astro-cid-dzahhn76>${renderSlot($$result, $$slots["default"])}</a> </div> `;
}, "D:/Mora_Exams/website/src/components/HeaderContactLink.astro", void 0);

const $$Astro$3 = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { text, href } = Astro2.props;
  if (href == void 0) {
    console.warn(`<NavLink text={${text}} />: href is not provided`);
  }
  return renderTemplate`${maybeRenderHead()}<li class="inline-block w-fit bg-transparent" data-astro-cid-2dwpsowv> <a class="text-inherit no-underline font-bold opacity-80 transition-opacity hover:opacity-100 bg-transparent"${addAttribute(href || "", "href")} data-astro-cid-2dwpsowv> ${text}</a> </li> `;
}, "D:/Mora_Exams/website/src/components/NavLink.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeaderContactIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderContactIcon;
  const { name } = Astro2.props;
  let hrefLink = `/s/${name}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(hrefLink, "href")} data-astro-cid-yn7qvdgm> <i${addAttribute(`fa-brands fa-${name}`, "class")} data-astro-cid-yn7qvdgm></i> </a> `;
}, "D:/Mora_Exams/website/src/components/HeaderContactIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const { class: className } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const otherLanguages = new Array(LIST_OF_LANGUAGES.length - 1);
  let lastIndex = 0;
  for (let i = 0; i < LIST_OF_LANGUAGES.length; i++) {
    const currentLanguage = LIST_OF_LANGUAGES[i];
    if (currentLanguage == lang) continue;
    otherLanguages[lastIndex] = {
      langName: LANGUAGES_DISPLAY_TEXT[currentLanguage],
      redirectUrl: replaceLanguage(Astro2.url, currentLanguage)
    };
    lastIndex++;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-fit mx-auto h-fit ${className}`, "class")} data-astro-cid-ltpqzwiw> ${otherLanguages.map((t, i) => {
    return renderTemplate`<a${addAttribute(t.redirectUrl, "href")} class="no-underline" data-astro-cid-ltpqzwiw> <button class="bg-transparent border-8 rounded-full px-3 text-white cursor-pointer hover:bg-white hover:text-primary-900 sm:px-6 h-fit" data-astro-cid-ltpqzwiw> ${t.langName} </button> </a>`;
  })} </div> <!-- todo: make the button more standard --> `;
}, "D:/Mora_Exams/website/src/components/LanguageSelector.astro", void 0);

const $$Astro = createAstro();
const $$1NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$1NavigationBar;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { hideLogo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-primary-900 sticky top-0 z-20" data-astro-cid-xcmrzcj2> <header class="hidden sm:flex items-center py-1 bg-transparent justify-end" data-astro-cid-xcmrzcj2> ${renderComponent($$result, "HeaderContactLink", $$HeaderContactLink, { "icon": "envelope", "href": "mailto:examsmora@gmail.com", "data-astro-cid-xcmrzcj2": true }, { "default": ($$result2) => renderTemplate`
examsmora@gmail.com
` })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "facebook", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "youtube", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "instagram", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "linkedin", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "whatsapp", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "viber", "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "HeaderContactIcon", $$HeaderContactIcon, { "name": "telegram", "data-astro-cid-xcmrzcj2": true })} </header> <nav class="flex items-center gap-x-2 py-3 sm:py-2 bg-transparent text-white z-10" data-astro-cid-xcmrzcj2> <div data-astro-cid-xcmrzcj2> <a${addAttribute("text-3xl font-bold text-inherit inline-block no-underline relative z-30 order-1 transition-colors".concat(
    hideLogo ? " logo-title" : ""
  ), "class")}${addAttribute(`/${lang}/`, "href")} data-astro-cid-xcmrzcj2> ${t("index__title")} </a> </div> <input type="checkbox" class="hidden" id="nav-bar-toggle" data-astro-cid-xcmrzcj2> <label for="nav-bar-toggle" class="block sm:hidden h-fit cursor-pointer relative z-30 opacity-80 order-3" data-astro-cid-xcmrzcj2> <div class="h-1 w-7 mb-2 bg-white rounded-sm" id="nav-bar-toggle-line-1" data-astro-cid-xcmrzcj2></div> <div class="h-1 w-7 bg-white rounded-sm" id="nav-bar-toggle-line-2" data-astro-cid-xcmrzcj2></div> </label> <ul${addAttribute([
    `m-0 pl-[var(--body-margin-x)] pt-[12vh] text-2xl flex flex-wrap flex-col gap-y-8 gap-x-5 fixed top-0 bottom-0 right-0 left-0 z-20 translate-x-[-100%] h-[100vh] backdrop-blur order-2 mx-auto bg-primary-700`,
    `sm:ml-25 sm:p-0 sm:flex-row sm:gap-y-0 sm:justify-end sm:static sm:translate-x-[0] sm:items-center sm:bg-inherit sm:h-fit sm:text-base`
  ].join(" "), "class")} data-astro-cid-xcmrzcj2> ${renderComponent($$result, "NavLink", $$NavLink, { "text": t("nav__home"), "href": `/${lang}/`, "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "NavLink", $$NavLink, { "text": t("nav__timetable"), "href": `/${lang}#timetable`, "data-astro-cid-xcmrzcj2": true })} <!---<NavLink text={t("nav__exam_centres")} href={\`/\${lang}#exam-centres\`} /> --> ${renderComponent($$result, "NavLink", $$NavLink, { "text": t("nav__past_papers"), "href": `/${lang}/past-papers`, "data-astro-cid-xcmrzcj2": true })} ${renderComponent($$result, "NavLink", $$NavLink, { "text": t("nav__practice_papers"), "href": `/${lang}/practicepapers`, "data-astro-cid-xcmrzcj2": true })} <!-- <NavLink text="Contact Us" /> --> </ul> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "class": "lang-selector order-2 ml-auto mr-2 sm:m-0 sm:order-3", "data-astro-cid-xcmrzcj2": true })} </nav> </div> ${renderScript($$result, "D:/Mora_Exams/website/src/sections/1-navigation-bar.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Mora_Exams/website/src/sections/1-navigation-bar.astro", void 0);

export { $$1NavigationBar as $ };
