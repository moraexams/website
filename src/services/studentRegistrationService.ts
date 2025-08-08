const API_URL = import.meta.env.PUBLIC_API_URL;

if (!API_URL) {
	throw new Error("PUBLIC_API_URL is not defined in the environment variables.");
}

interface StudentRegistrationDetails {
	name: string,
	stream_id: number,
	medium: string,
	rank_district_id: number,
	exam_district_id: number,
	exam_centre_id: number,
	nic: string,
	gender: string,
	email: string,
	telephone_no: string,
	school: string,
	address: string,
}

export const registerStudent = async (
	details: StudentRegistrationDetails
) => {
	try {
		details.name = details.name.trim().toUpperCase();
		details.school = details.school.trim().toUpperCase();
		details.address = details.address.trim().toUpperCase();

		const response = await fetch(API_URL.concat("/temp-student/add"), {
			method: "POST",
			body: JSON.stringify(details),
			headers: {
				"Content-Type": "application/json",
			},
		})
		
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
