import { OGImageRoute, generateOpenGraphImage } from "astro-og-canvas";

function capitalize(s: string | undefined) {
	if (!s || s.length === 0) return s;
	return s.charAt(0).toUpperCase() + s.slice(1);
}

interface PageData {
	title?: string;
	description?: string;
	format?: "png" | "webp" | "jpeg";
}

const pages: Record<string, PageData> = {
	index: {
		title: "Mora Exams",
		description:
			"Sri Lanka's Biggest Pilot Exams for G. C. E. A/L Students. Organized by Tamil Engineering Undergraduates of University of Moratuwa.",
	},
	"leadership-timeline": {
		title: "Leadership Timeline",
		description:
			"A record of Mora Exams’ leadership over the years, showcasing the dedicated individuals who have guided our committees and upheld our values through each term.",
	},
	"past-papers": {
		title: "Past Papers",
		description:
			"A comprehensive collection of past examination papers for G.C.E. A/L students in Sri Lanka, organized by subject and year to aid in effective study and exam preparation.",
	},
	"student-registration": {
		title: "Student Registration",
		description:
			"Register as a student for Mora Exams, Sri Lanka's premier pilot exams for G.C.E. A/L students, and gain access to valuable resources and practice materials.",
	},
};

export const { getStaticPaths, GET } = OGImageRoute({
	param: "route",
	pages,
	getSlug: (path, page) => {
		return path.concat(".", page.format || "jpg");
	},
	getImageOptions: (path, page: PageData) => {
		const lastPart = path.split("/").at(-1);
		return {
			title: page.title || `${capitalize(lastPart)} | Mora Exams`,
			description:
				page.description ||
				"Mora Exams, Sri Lanka's Biggest Pilot Exams for GCE A/L Students.",
			bgGradient: [
				[233, 213, 255],
				[216, 180, 254],
			],
			logo: {
				path: "./public/assets/logo.png",
				size: [200],
			},
			font: {
				title: {
					color: [0, 0, 0],
					weight: "Bold",
					size: 88,
					lineHeight: 1.1,
				},
				description: {
					color: [0, 0, 0],
					size: 32,
					maxWidth: 100,
				},
			},
			padding: 50,
		};
	},
});
