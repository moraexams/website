import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";

export default defineConfig({
	integrations: [tailwind(), react(), svelte()],
	output: "static",
	redirects: {
		"/": `/${defaultLang}/`,
		"/modelpaper":
			"https://drive.google.com/drive/folders/1pAzO3OQ7nwBLuJ_gU-4vY12x6eENrwPz",
		"/feedback": "https://forms.gle/Z98yqxFZdScQ56cU6",
		"/results": `/${defaultLang}/results`,
		"/register": `/${defaultLang}/register`,
		"/index-number": `/${defaultLang}/index-number`,
		"/indexnumber": `/${defaultLang}/index-number`,
		"/checkstudent": `/${defaultLang}/checkstudent`,
		"/practicepapers": `/${defaultLang}/practicepapers`,
		"/instructions": `/${defaultLang}/instructions`,
		"/exampapers": `/${defaultLang}/exampapers`,
		"/past-papers": `/${defaultLang}/past-papers`,
		"/s/whatsapp": "https://www.whatsapp.com/channel/0029VajWYZGFMqrakb87YL32",
		"/s/linkedin": "https://www.linkedin.com/company/moraexams",
		"/s/viber":
			"https://invite.viber.com/?g2=AQAR%2BCd%2BUxI2pk1rzlhZCSvq32KykhqAcN%2Fbri8vhfCWBNeaVB7BWo8lgafuBSng&lang=en",
		"/s/telegram": "https://t.me/moraexams",
		"/s/facebook": "https://www.facebook.com/moraexams",
		"/s/youtube": "https://youtube.com/@moraexams",
	},
	adapter: netlify({
		edgeMiddleware: true,
	}),
});
