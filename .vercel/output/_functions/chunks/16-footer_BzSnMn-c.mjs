import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent } from './astro/server_D7r--r5g.mjs';
import 'clsx';
/* empty css                                */
import { $ as $$MadeBy } from './made-by_CixwdeOX.mjs';
import { u as useTranslations, g as getLangFromUrl, C as COMMON_CONFIG } from './Layout_Bxvz-Mdk.mjs';

const $$Icons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="relative flex p-0" data-astro-cid-apb64oph> <li data-astro-cid-apb64oph> <a href="/s/facebook" class="text-[#43609c]" data-astro-cid-apb64oph><i class="fa-brands fa-facebook" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/youtube" class="text-[#ff0000]" data-astro-cid-apb64oph><i class="fa-brands fa-youtube" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/instagram" class="text-[#c32aa3]" data-astro-cid-apb64oph><i class="fa-brands fa-instagram" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/linkedin" class="text-[#0072b1]" data-astro-cid-apb64oph><i class="fa-brands fa-linkedin-in" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/whatsapp" class="text-[#25d366]" data-astro-cid-apb64oph><i class="fa-brands fa-whatsapp" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/viber" class="text-[#59267c]" data-astro-cid-apb64oph><i class="fa-brands fa-viber opacity-[0.7]" data-astro-cid-apb64oph></i></a> </li> <li data-astro-cid-apb64oph> <a href="/s/telegram" class="text-[#229ed9]" data-astro-cid-apb64oph><i class="fa-brands fa-telegram" data-astro-cid-apb64oph></i></a> </li> </ul> `;
}, "D:/Mora_Exams/website/src/components/Icons.astro", void 0);

const $$Astro = createAstro();
const $$16Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$16Footer;
  const t = useTranslations(getLangFromUrl(Astro2.url));
  return renderTemplate`${maybeRenderHead()}<footer class="w-full pt-4" style="background-color: rgb(255, 253, 253);" data-astro-cid-nfcif2qg> <div class="foot md:grid md:grid-cols-[2fr,1fr] gap-20" data-astro-cid-nfcif2qg> <div class="text-justify" data-astro-cid-nfcif2qg> <h2 class="font-extrabold text-justify text-[#3c005a]" data-astro-cid-nfcif2qg> ${t("footer_title_1")} </h2> <p class="pb-1 relative text-[#000000]" data-astro-cid-nfcif2qg> ${t("footer_title_1_description_p1")} <!-- Faculty of Engineering,University of Moratuwa. --> </p> <p data-astro-cid-nfcif2qg> ${t("footer_title_1_description_p2")} </p> </div> <!-- <div class="md:text-center sm:text-left">
			<h3 class="text-[#3c005a] relative min-w-max md:min-w-fit">
				{t("footer_title_4")}
			</h3> --> <!-- <ul class="list-none">
				<li>
					<a class="text-[#800080] no-underline inline-block" href="#"
						>{t("footer_title_4_s1")}</a
					>
				</li>
				<li>
					<a class="text-[#800080] no-underline inline-block" href="#"
						>{t("footer_title_4_s2")}</a
					>
				</li>
				<li>
					<a class="mb-0.5 text-[#800080] no-underline inline-block" href="#"
						>{t("footer_title_4_s3")}</a
					>
				</li>
				<li>
					<a class="mb-0.5 text-[#800080] no-underline inline-block" href="#"
						>{t("footer_title_4_s4")}</a
					>
				</li>
				<li>
					<a class="mb-0.5 text-[#800080] no-underline inline-block" href="#"
						>{t("footer_title_4_s5")}</a
					>
				</li>
			</ul>
		</div> --> <div class="relative" data-astro-cid-nfcif2qg> <p class="relative pb-1 pl-1 text-lg text-justify text-[#3c005a] font-semibold" data-astro-cid-nfcif2qg> ${t("footer_title_2")} </p> <ul class="list-none" data-astro-cid-nfcif2qg> <li data-astro-cid-nfcif2qg> <span data-astro-cid-nfcif2qg><i class="fa-solid fa-phone" data-astro-cid-nfcif2qg></i></span> <a class="mb-0.5 pl-5 text-[#800080] no-underline inline-block hover:underline"${addAttribute(`tel:${COMMON_CONFIG.CONTACT_PHONE_NUMBER}`, "href")} data-astro-cid-nfcif2qg>${COMMON_CONFIG.CONTACT_PHONE_NUMBER}</a> </li> <li data-astro-cid-nfcif2qg> <span data-astro-cid-nfcif2qg><i class="fa-solid fa-envelope" data-astro-cid-nfcif2qg></i></span> <a class="mb-0.5 pl-5 text-[#800080] no-underline inline-block hover:underline" href="Mailto:examsmora@gmail.com" data-astro-cid-nfcif2qg>examsmora@gmail.com</a> </li> </ul> <div class="grid" data-astro-cid-nfcif2qg> <h4 class="relative text-justify text-[#3c005a] font-semibold m-0" data-astro-cid-nfcif2qg> ${t("footer_title_3")} </h4> ${renderComponent($$result, "Icons", $$Icons, { "data-astro-cid-nfcif2qg": true })} </div> </div> </div> <!--<div>
			<h3 class="text-[#3c005a] relative">Subscribe Our Newsletter</h3>
			<p class="para">Enter your email address to get our updates faster.</p>
			<form action="#">
				<input id="gf" style="color: #000;" type="email" name="email" /><input
					type="submit"
					value="Subscribe"
				/>
			</form>
		</div> --> </footer> ${renderComponent($$result, "MadeBy", $$MadeBy, { "data-astro-cid-nfcif2qg": true })} `;
}, "D:/Mora_Exams/website/src/sections/16-footer.astro", void 0);

export { $$16Footer as $ };
