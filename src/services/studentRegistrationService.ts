const API_URL = import.meta.env.PUBLIC_API_URL;

if (!API_URL) {
	throw new Error(
		"PUBLIC_API_URL is not defined in the environment variables.",
	);
}

interface StudentRegistrationFormValues {
	name: string;
	stream: string;
	medium: "Tamil" | "English";
	district_ranking: string;
	district_exam: string;
	exam_centre: string;
	nic: string;
	gender: "Male" | "Female";
	email: string;
	phone: string;
	school: string;
	address: string;
	payment_receipt: File;
}

export const registerStudent = async (
	details: StudentRegistrationFormValues | FormData,
) => {
	try {
		let data: FormData;
		if (details instanceof FormData) {
			data = details;
		} else {
			data = new FormData();
			data.set("nic", details.nic);
			data.set("name", details.name);
			data.set("school", details.school);
			data.set("address", details.address);
			data.set("email", details.email);
			data.set("phone", details.phone);
			data.set("gender", details.gender);
			data.set("medium", details.medium);
			data.set("stream", details.stream);
			data.set("district_ranking", details.district_ranking);
			data.set("district_exam", details.district_exam);
			data.set("exam_centre", details.exam_centre);
			data.set("payment_receipt", details.payment_receipt);
		}

		data.set("name", data.get("name")?.toString().trim().toUpperCase() || "");
		data.set(
			"school",
			data.get("school")?.toString().trim().toUpperCase() || "",
		);
		data.set(
			"address",
			data.get("address")?.toString().trim().toUpperCase() || "",
		);

		const response = await fetch(API_URL.concat("/student-registration/add"), {
			method: "POST",
			body: data,
		});

		const body = await response.json();
		if (!response.ok) {
			return body.message || "Failed to register. Please try again.";
		}
	} catch (error) {
		console.error("Error Adding Student:", error);
		if (error instanceof Error) {
			return error.message;
		}
		return "An unexpected error occurred. Please try again.";
	}
};

export const validateStudentRegistrationDetails = async (
	details: StudentRegistrationFormValues | FormData,
) => {
	try {
		let data: FormData;
		if (details instanceof FormData) {
			data = details;
		} else {
			data = new FormData();
			data.set("nic", details.nic);
			data.set("name", details.name);
			data.set("school", details.school);
			data.set("address", details.address);
			data.set("email", details.email);
			data.set("phone", details.phone);
			data.set("gender", details.gender);
			data.set("medium", details.medium);
			data.set("stream", details.stream);
			data.set("district_ranking", details.district_ranking);
			data.set("district_exam", details.district_exam);
			data.set("exam_centre", details.exam_centre);
			data.set("payment_receipt", details.payment_receipt);
		}

		data.set("name", data.get("name")?.toString().trim().toUpperCase() || "");
		data.set(
			"school",
			data.get("school")?.toString().trim().toUpperCase() || "",
		);
		data.set(
			"address",
			data.get("address")?.toString().trim().toUpperCase() || "",
		);

		const response = await fetch(
			API_URL.concat("/student-registration/validate"),
			{
				method: "POST",
				body: data,
			},
		);

		const body = await response.json();
		if (!response.ok) {
			return body.message || "Failed to register. Please try again.";
		}
	} catch (error) {
		console.error("Error validating student:", error);
		if (error instanceof Error) {
			return error.message;
		}
		return "An unexpected error occurred. Please try again.";
	}
};
