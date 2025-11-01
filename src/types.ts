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

export interface StudentResults {
	index_no: string;
	name: string;
	nic: string;
	stream: string;
	ranking_district: string;
	subject1: string;
	subject1_result: string;
	subject2: string;
	subject2_result: string;
	subject3: string;
	subject3_result: string;
	z_score: string | null;
	district_rank: string | null;
	island_rank: string | null;
}

export type HeroVersion = null | "register" | "view_index_no" | "view_results";
