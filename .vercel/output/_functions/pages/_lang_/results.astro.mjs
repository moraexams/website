/* empty css                                           */
import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, F as Fragment, a as renderTemplate } from '../../chunks/astro/server_D7r--r5g.mjs';
import { u as useTranslations, i as isSupportedLanguage, $ as $$Layout } from '../../chunks/Layout_Bxvz-Mdk.mjs';
import { $ as $$1NavigationBar } from '../../chunks/1-navigation-bar_DzvuxwJS.mjs';
import { $ as $$16Footer } from '../../chunks/16-footer_BzSnMn-c.mjs';
/* empty css                                      */
import { $ as $$Info, a as $$BestWishes } from '../../chunks/info_DlV_IlCL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ResultsSheet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResultsSheet;
  const t = useTranslations(Astro2.props.lang);
  const { results } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-[auto_auto] md:grid-cols-[minmax(400px,40%)_auto_auto] gap-y-6 gap-x-16 lg:gap-x-20 mb-12 grid-rows-[repeat(5,auto)]" data-astro-cid-m6o3fmpq> <div class="item col-span-full" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("student_register__form_name")}</label> <div data-astro-cid-m6o3fmpq>${results.name}</div> </div> <div class="item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("student_register__form_nic_no")}</label> <div class="tabular-nums" data-astro-cid-m6o3fmpq>${results.nic}</div> </div> <div class="item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("index_no")}</label> <div class="tabular-nums" data-astro-cid-m6o3fmpq>${results.index_no}</div> </div> <div class="item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("student_register__form_district_ranking")}</label> <div class="tabular-nums" data-astro-cid-m6o3fmpq>${results.ranking_district}</div> </div> <div class="item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("student_register__form_stream")}</label> <div class="tabular-nums" data-astro-cid-m6o3fmpq>${results.stream}</div> </div> <div class="flex flex-col gap-2 row-span-2 col-span-2 md:col-start-1 md:col-span-1 justify-between max-w-[370px]" data-astro-cid-m6o3fmpq> ${results.stream === "ICT Only" ? null : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-m6o3fmpq": true }, { "default": ($$result2) => renderTemplate` <div class="item result" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${results.subject1}</label> <div data-astro-cid-m6o3fmpq>${results.subject1_result}</div> </div> <div class="result item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${results.subject2}</label> <div data-astro-cid-m6o3fmpq>${results.subject2_result}</div> </div> ` })}`} <div class="result item" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${results.subject3}</label> <div data-astro-cid-m6o3fmpq>${results.subject3_result}</div> </div> </div> <div class="item zscore md:col-start-2 md:row-start-3 col-span-2" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("word__zscore")}</label> <div data-astro-cid-m6o3fmpq>${results.z_score || "-"}</div> </div> <div class="item rank md:col-start-2" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("word__island_rank")}</label> <div data-astro-cid-m6o3fmpq> ${results.island_rank?.toString().padStart(2, "0") || "-"} </div> </div> <div class="item rank" data-astro-cid-m6o3fmpq> <label data-astro-cid-m6o3fmpq>${t("word__district_rank")}</label> <div data-astro-cid-m6o3fmpq> ${results.district_rank?.toString().padStart(2, "0") || "-"} </div> </div> </div> `;
}, "D:/Mora_Exams/website/src/components/results-sheet.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Results;
  const { lang } = Astro2.params;
  if (!isSupportedLanguage(lang)) {
    return;
  }
  const t = useTranslations(lang);
  let indexNumber = void 0;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    indexNumber = formData.get("i").toString() || void 0;
  }
  let studentResults = void 0;
  if (indexNumber) {
    try {
      const response = await fetch(
        `${"http://localhost:8080"}/result/${indexNumber}`
      );
      const data = await response.json();
      if (data.error) {
        studentResults = null;
      } else {
        studentResults = data;
      }
    } catch (error) {
      studentResults = null;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": t("results__title"), "ogImageSlug": "results" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$1NavigationBar, {})} ${maybeRenderHead()}<section class="my-10 sm:rounded-lg grid grid-cols-1 lg:grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-x-12 items-center h-fit flex-1"> ${renderTemplate`<div> ${renderComponent($$result2, "Info", $$Info, { "text": "Your results can no longer be viewed." })} ${renderComponent($$result2, "BestWishes", $$BestWishes, {})} </div>` } <div class="col-start-1 lg:col-start-2 row-start-4 lg:row-start-1 flex flex-col w-full max-w-screen-xl justify-center items-center mx-auto mt-10"> <p class="mb-4 mt-0 text-lg text-center font-medium"> ${t("index_number__our_sponsors")} </p> <div class="flex flex-col my-4 gap-16"> <img class="h-auto w-80 lg:w-96 object-contain sm:rounded-b-lg" src="/sponsors/sltc.png" alt="SLTC"> <img class="h-auto w-80 lg:w-96 object-contain sm:rounded-b-lg" src="/sponsors/northway-family-mart.png" alt="Northway Family Mart"> </div> </div> </section> ${renderComponent($$result2, "Footer", $$16Footer, {})} ` })} `;
}, "D:/Mora_Exams/website/src/pages/[lang]/results.astro", void 0);
const $$file = "D:/Mora_Exams/website/src/pages/[lang]/results.astro";
const $$url = "/[lang]/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Results,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
