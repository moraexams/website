const API_URL = import.meta.env.PUBLIC_API_URL;

if (!API_URL) {
	throw new Error(
		"PUBLIC_API_URL is not defined in the environment variables.",
	);
}

interface StudentRegistrationFormValues {
	name: string;
	stream_id: string;
	medium: string;
	rank_district_id: string;
	exam_district_id: string;
	exam_centre_id: string;
	nic: string;
	gender: string;
	email: string;
	telephone_no: string;
	school: string;
	address: string;
	transaction_file: File;
}

export const registerStudent = async (
	details: StudentRegistrationFormValues,
) => {
	try {
		details.name = details.name.trim().toUpperCase();
		details.school = details.school.trim().toUpperCase();
		details.address = details.address.trim().toUpperCase();

		const data = new FormData();
		data.set("nic", details.nic);
		data.set("name", details.name);
		data.set("school", details.school);
		data.set("address", details.address);
		data.set("email", details.email);
		data.set("telephone_no", details.telephone_no);
		data.set("gender", details.gender);
		data.set("medium", details.medium);
		data.set("stream_id", details.stream_id);
		data.set("rank_district_id", details.rank_district_id);
		data.set("exam_district_id", details.exam_district_id);
		data.set("exam_centre_id", details.exam_centre_id);
		data.set("transaction_file", details.transaction_file);

		const response = await fetch(API_URL.concat("/student-registration/add"), {
			method: "POST",
			body: data,
		});

		if (!response.ok) {
			return "Failed to register. Please try again.";
		}
	} catch (error) {
		console.error("Error Adding Student:", error);

		if (error instanceof Error) {
			return error.message;
		}

		return "An unexpected error occurred. Please try again.";
	}
};
