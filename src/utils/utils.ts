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
	}
}

interface GroupedPastPapers {
	tamil: {
		ict: GroupedSubject
		biology: GroupedSubject
		chemistry: GroupedSubject
		"combined-maths": GroupedSubject
		"physics": GroupedSubject
	};
	english: {
		ict: GroupedSubject
		biology: GroupedSubject
		chemistry: GroupedSubject
		"combined-maths": GroupedSubject
		"physics": GroupedSubject
	}
}
			


export function groupPastPaperItems(items: Array<PastPaperItem>) {
	const grouped: GroupedPastPapers = {
		"tamil": {
			"ict": {},
			"biology": {},
			"combined-maths": {},
			"physics": {},
			"chemistry": {},
		},
		"english": {
			"ict": {},
			"biology": {},
			"combined-maths": {},
			"physics": {},
			"chemistry": {},
		}
	};
	
	for (const item of items) {
		if (!item || !item.subject || !item.medium || !grouped[item.medium]) {
			continue; // Skip invalid items
		}
		if (!grouped[item.medium][item.subject]) 
			continue;
		if (!grouped[item.medium][item.subject][item.year]) {
			grouped[item.medium][item.subject][item.year] = {};
		}
		
		grouped[item.medium][item.subject][item.year][item.type] = `https://drive.google.com/uc?export=download&id=${item.id}`;
	}
	
	return grouped;

}
