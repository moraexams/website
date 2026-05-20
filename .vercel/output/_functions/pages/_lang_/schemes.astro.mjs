/* empty css                                           */
import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, F as Fragment, a as renderTemplate, d as addAttribute } from '../../chunks/astro/server_D7r--r5g.mjs';
import { g as getLangFromUrl, u as useTranslations, $ as $$Layout } from '../../chunks/Layout_Bxvz-Mdk.mjs';
import { $ as $$1NavigationBar } from '../../chunks/1-navigation-bar_DzvuxwJS.mjs';
/* empty css                                      */
import { $ as $$MadeBy } from '../../chunks/made-by_CixwdeOX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$FlippingCard2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FlippingCard2;
  const {
    download_link_t_01,
    download_link_e_01,
    subject01,
    scheme_title,
    scheme_link_en,
    scheme_link_ta
  } = Astro2.props;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-nxy3nyhh> <div class="card-content" data-astro-cid-nxy3nyhh> <p class="card-title" data-astro-cid-nxy3nyhh>${subject01}</p> ${scheme_link_en && scheme_link_ta ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nxy3nyhh": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(scheme_link_ta, "href")} data-astro-cid-nxy3nyhh> <button data-astro-cid-nxy3nyhh> தமிழ் மொழிமூலம்</button> </a> <a${addAttribute(scheme_link_en, "href")} data-astro-cid-nxy3nyhh> <button data-astro-cid-nxy3nyhh> English Medium</button> </a> ` })}` : null} </div> </div> `;
}, "D:/Mora_Exams/website/src/components/flipping_card2.astro", void 0);

const exam_papers = [
	{
		subject_en_01: "Combined Mathematics I",
		subject_ta_01: "இணைந்த கணிதம் I",
		download_link_t_01: "#",
		download_link_e_01: "#",
		title_en: "Scheme",
		title_ta: "விடைத்தாள்",
		scheme_link_en: "https://drive.google.com/file/d/1yzerIoQ42GVjlI5IE40KSjCb5qc9o0aZ/view?usp=drive_link",
		scheme_link_ta: "https://drive.google.com/file/d/17W_NPxUibXQhKNVv1kXNwZDhSVcpb_i1/view?usp=drive_link"
	},
	{
		subject_en_01: "Combined Mathematics II",
		subject_ta_01: "இணைந்த கணிதம் II",
		download_link_t_01: "",
		download_link_e_01: "",
		title_en: "Scheme",
		title_ta: "விடைத்தாள்",
		scheme_link_en: "https://drive.google.com/file/d/1H6vNVH6Fk3WjvePr_3qQmjs_FN5e7Zf2/view?usp=sharing",
		scheme_link_ta: "https://drive.google.com/file/d/1jMyis1o0ZqzMYmrcujKADRuNKbW3MbQE/view?usp=sharing"
	},
	{
		subject_en_01: "Biology",
		subject_ta_01: "உயிரியல்",
		download_link_t_01: "",
		download_link_e_01: "",
		title_en: "Scheme",
		title_ta: "விடைத்தாள்",
		scheme_link_en: "https://drive.google.com/file/d/1h2IWzSwtTdgEAXUFi_tHJtoFMrjucd9H/view?usp=sharing",
		scheme_link_ta: "https://drive.google.com/file/d/1dMDBa1FjGWeNlGdG7MjYJOHTSpIlDgim/view?usp=sharing"
	},
	{
		subject_en_01: "Physics",
		subject_ta_01: "பௌதீகவியல்",
		download_link_t_01: "",
		download_link_e_01: "",
		title_en: "Scheme",
		title_ta: "விடைத்தாள்",
		scheme_link_en: "https://drive.google.com/file/d/1FifnBrPLjO0N0WrX7p0Kjl3_zfXN4IC2/view?usp=sharing",
		scheme_link_ta: "https://drive.google.com/file/d/1CdCT5X8tZ-dsmpylpH1mkKLadjyyZReL/view?usp=sharing"
	},
	{
		subject_en_01: "Chemistry",
		subject_ta_01: "இரசாயனவியயல்",
		download_link_t_01: "",
		download_link_e_01: "",
		title_en: "Scheme",
		title_ta: "விடைத்தாள்",
		scheme_link_en: "https://drive.google.com/file/d/1s9i83JJn-HLLSr0XFqr0YQ8S9DP-QNMW/view?usp=sharing",
		scheme_link_ta: "https://drive.google.com/file/d/1s9i83JJn-HLLSr0XFqr0YQ8S9DP-QNMW/view?usp=sharing"
	}
];

const $$Astro$1 = createAstro();
const $$18ExamPapers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$18ExamPapers;
  const t = useTranslations(getLangFromUrl(Astro2.url));
  const lang = getLangFromUrl(Astro2.url);
  const exam_papers_data = exam_papers;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"> <h2 class="text-center">${t("exam_papers_title")}</h2> <p class="text-center text-xl my-8"> ${t("exam_papers_p")} </p> <div id="flip_cards" class="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-10xl gap-4 mt-10 mx-auto text-center justify-items-center"> ${exam_papers_data.map((entry) => {
    return renderTemplate`${renderComponent($$result, "Flip", $$FlippingCard2, { "subject01": lang === "en" ? entry.subject_en_01 : entry.subject_ta_01, "download_link_e_01": entry.download_link_e_01, "download_link_t_01": entry.download_link_t_01, "scheme_title": lang === "en" ? entry.title_en : entry.title_ta, "scheme_link_en": entry.scheme_link_en, "scheme_link_ta": entry.scheme_link_ta })}`;
  })} </div> </section>`;
}, "D:/Mora_Exams/website/src/sections/18-exam-papers.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Schemes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Schemes;
  const t = useTranslations(getLangFromUrl(Astro2.url));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": t("index__title") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$1NavigationBar, {})} ${renderComponent($$result2, "ExamPapers", $$18ExamPapers, {})} ${renderComponent($$result2, "MadeBy", $$MadeBy, {})} ` })} `;
}, "D:/Mora_Exams/website/src/pages/[lang]/schemes.astro", void 0);

const $$file = "D:/Mora_Exams/website/src/pages/[lang]/schemes.astro";
const $$url = "/[lang]/schemes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Schemes,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
