import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), svelte()],
	output: "hybrid",
	redirects: {
		"/": `/${defaultLang}/`,
		"/manage": "https://moraetamils.com/manage",
	},
	adapter: netlify({
		edgeMiddleware: true,
	}),
	// site: "https://astounding-brigadeiros-506019.netlify.app",
});
