/* empty css                                           */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D7r--r5g.mjs';
import { i as isSupportedLanguage, $ as $$Layout, u as useTranslations } from '../../chunks/Layout_Bxvz-Mdk.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Checkstudent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkstudent;
  const { lang } = Astro2.params;
  if (!isSupportedLanguage(lang)) {
    return;
  }
  const t = useTranslations(lang);
  const id = Astro2.url.searchParams.get("id") || void 0;
  let selectedStudent = void 0;
  if (id) {
    const response = await fetch(
      `https://api.moraexams.org/student/check/${id}`
      // `http://localhost:8080/student/nic/${nicNumber}`,
    );
    const data = await response.json();
    if (data.error) {
      selectedStudent = null;
    } else {
      selectedStudent = data;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Check Student", "data-astro-cid-7iwfpbjm": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section class="min-h-screen bg-delft-blue-50/50 text-primary-900 flex justify-center" data-astro-cid-7iwfpbjm><div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1" data-astro-cid-7iwfpbjm><div class="lg:w1/2 xl:w-5/12 p-2 sm:p-12 flex-1" data-astro-cid-7iwfpbjm><div class="mt-2 m-auto flex flex-col items-center justify-center" data-astro-cid-7iwfpbjm><h1 class="text-3xl xl:text-4xl text-center" data-astro-cid-7iwfpbjm>
Check and Verify Student
</h1><p class="text-xl xl:text-2xl text-center text-black max-w-prose" data-astro-cid-7iwfpbjm>
Enter Index Number or NIC Number.
</p><form method="get"${addAttribute(`/${lang}/checkstudent`, "action")} style="display: contents;" data-astro-cid-7iwfpbjm><input class="w-full max-w-2xl px-8 py-4 rounded-lg bg-delft-blue-50/25 border border-primary-900/20 placeholder-rust-orange-50 text-md focus:outline-none focus:border-gray focus:bg-white mt-4" type="text" name="id"${addAttribute(id, "value")}${addAttribute("Index No or NIC", "placeholder")} inputmode="numeric" data-astro-cid-7iwfpbjm><button class="my-6 w-1/2 py-2 rounded-full text-primary-800 text-xl bg-white hover:bg-delft-blue-50/50 border border-sm border-black/25 focus:outline-none focus:shadow focus:border-none" data-astro-cid-7iwfpbjm><i class="fa-solid fa-magnifying-glass" data-astro-cid-7iwfpbjm></i><span class="ml-3" data-astro-cid-7iwfpbjm>${t("find_button")}</span></button></form>${typeof selectedStudent == "undefined" ? null : selectedStudent == null ? renderTemplate`<div style="color: red; text-align: center;" class="text-center mt-5" data-astro-cid-7iwfpbjm>
Not found
</div>` : renderTemplate`<div class="table-container" data-astro-cid-7iwfpbjm><table data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>Index Number</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.index_no}</strong></td><tr data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>NIC Number</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.nic}</strong></td></tr><tr data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>Full Name</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.name}</strong></td></tr><tr data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>Stream</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.stream}</strong></td></tr><tr data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>Medium</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.medium}</strong></td></tr><tr data-astro-cid-7iwfpbjm><td data-astro-cid-7iwfpbjm>Exam Centre</td><td data-astro-cid-7iwfpbjm>:</td><td data-astro-cid-7iwfpbjm><strong data-astro-cid-7iwfpbjm>${selectedStudent.exam_centre}</strong></td></tr></table></div>`}</div></div><div class="lg:flex hidden max-w-[700px]" data-astro-cid-7iwfpbjm><div class="mr-14 min-w-[240px] w-full bg-contain bg-center bg-no-repeat max-h-screen" style="background-image: url('/assets/Illustrations/bg23.svg');" data-astro-cid-7iwfpbjm></div></div></div></section>` })}`;
}, "D:/Mora_Exams/website/src/pages/[lang]/checkstudent.astro", void 0);

const $$file = "D:/Mora_Exams/website/src/pages/[lang]/checkstudent.astro";
const $$url = "/[lang]/checkstudent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Checkstudent,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
