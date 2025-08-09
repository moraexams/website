export interface PastPaperItem {
	year: number;
	subject: string;
	type: "paper" | "scheme";
	medium: "tamil" | "english";
	id: string;
	name: string;
	link: string;
}
interface ExamCentreDetail {
	id: number;
	name: string;
}
interface DistrictDetail {
	id: number;
	district_name: string;
	exam_centres: ExamCentreDetail[];
}
export interface StudentRegistrationDetails {
	districts: Array<DistrictDetail>;
}
