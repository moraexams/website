import type { Language } from "../i18n/ui";
import type { PastPaperItem } from "../types";

export function formatMediumName(medium: string, lang: Language): string {
	return medium === "tamil"
		? lang === "en"
			? "Tamil medium"
			: "தமிழ் மொழி மூலம்"
		: medium === "english"
			? lang === "en"
				? "English medium"
				: "ஆங்கிலம் மொழி மூலம்"
			: medium;
}

export function formatSubjectName(subject: string, lang: Language): string {
	if (!subject) {
		return "";
	}
	if (lang === "en") {
		switch (subject) {
			case "ict":
				return "ICT";
			case "biology":
				return "Biology";
			case "chemistry":
				return "Chemistry";
			case "combined-maths":
				return "Combined Maths";
			case "physics":
				return "Physics";
		}
	} else if (lang === "ta") {
		switch (subject) {
			case "ict":
				return "தகவல் தொடர்பாடல் தொழில்நுட்பம்";
			case "biology":
				return "உயிரியல்";
			case "chemistry":
				return "இரசாயனவியல்";
			case "combined-maths":
				return "இணைந்த கணிதம்";
			case "physics":
				return "பௌதீகவியல்";
		}
	}
}

export function capitalize(word: string) {
	return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
}

interface GroupedSubject {
	[key: number]: {
		scheme?: string;
		paper?: string;
	};
}

interface GroupedPastPapersForLang {
	ict: GroupedSubject;
	biology: GroupedSubject;
	chemistry: GroupedSubject;
	"combined-maths": GroupedSubject;
	physics: GroupedSubject;
}

interface GroupedPastPapers {
	tamil: GroupedPastPapersForLang;
	english: GroupedPastPapersForLang;
}

export function groupPastPaperItems(items: Array<PastPaperItem>) {
	const grouped: GroupedPastPapers = {
		tamil: {
			ict: {},
			biology: {},
			"combined-maths": {},
			physics: {},
			chemistry: {},
		},
		english: {
			ict: {},
			biology: {},
			"combined-maths": {},
			physics: {},
			chemistry: {},
		},
	};

	for (const item of items) {
		if (!item || !item.subject || !item.medium || !grouped[item.medium]) {
			continue; // Skip invalid items
		}
		if (!grouped[item.medium][item.subject]) continue;
		if (!grouped[item.medium][item.subject][item.year]) {
			grouped[item.medium][item.subject][item.year] = {};
		}

		grouped[item.medium][item.subject][item.year][item.type] =
			`https://drive.google.com/uc?export=download&id=${item.id}`;
	}

	return grouped;
}

export function humanReadableFileSize(size: number): string {
	if (size < 1024) return `${size} bytes`;
	else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
	else return `${(size / 1048576).toFixed(2)} MB`;
}

export const DEPARTMENTS: {
	[key: string]: {
		en: string;
		ta: string;
	};
} = {
	cse: {
		en: "Computer Science & Engineering",
		ta: "கணினி விஞ்ஞானம் மற்றும் பொறியியல்",
	},
	ee: {
		en: "Electrical Engineering",
		ta: "மின் பொறியியல்",
	},
	me: {
		en: "Mechanical Engineering",
		ta: "இயந்திரவியல் பொறியியல்",
	},
	ce: {
		en: "Civil Engineering",
		ta: "குடிசார் பொறியியல்",
	},
	cpe: {
		en: "Chemical & Process Engineering",
		ta: "இரசாயன மற்றும் செயல்முறை பொறியியல்",
	},
	bme: {
		en: "Biomedical Engineering",
		ta: "உயிர்மருத்துவப் பொறியியல்",
	},
	mse: {
		en: "Materials Science & Engineering",
		ta: "திரவியல் விஞ்ஞானமும் பொறியியல்",
	},
	entc: {
		en: "Electronics & Telecommunication Engineering",
		ta: "இலத்திரனியல் மற்றும் தொலைத்தொடர்பு பொறியியல்",
	},
};

export function assertNever(x: never): never {
	console.error("assertNever", x);
	throw new Error("Unreachable point reached.");
}
