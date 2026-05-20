import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, r as renderComponent, F as Fragment } from './astro/server_D7r--r5g.mjs';
import 'clsx';
/* empty css                                */

const $$BestWishes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-edozflnz> <h1 data-astro-cid-edozflnz> <span class="text-5xl" data-astro-cid-edozflnz> All the Best</span> <br data-astro-cid-edozflnz>for your G.C.E. (A/L) Exams!
</h1> <p data-astro-cid-edozflnz>
You have worked hard for this moment. Believe in yourself and stay calm.
</p> <p data-astro-cid-edozflnz>
Do your best and success will follow. Every step you take brings you closer
		to your dream. Be confident. You can do it!
</p> </div> `;
}, "D:/Mora_Exams/website/src/components/best-wishes.astro", void 0);

const $$Astro = createAstro();
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="bg-purple-100 border-solid border-[2px] border-purple-500 w-fit px-3 py-2 rounded-lg mb-4 text-purple-950 font-medium inline-flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle -mt-[1px] size-5"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> ` })} </svg> ${text} </p>`;
}, "D:/Mora_Exams/website/src/components/info.astro", void 0);

export { $$Info as $, $$BestWishes as a };
