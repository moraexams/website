import { AxiosError } from "axios";
import axiosInstance from "../axiosConfig";

export const addStudent = async (
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
	/* reg_by:string,
    reg_date:string,
    checked_by:number,
    checked_at:string,
    created_at: string, */ //can get this data in backend??
) => {
	try {
		name = name.trim().toUpperCase();
		school = school.trim().toUpperCase();
		address = address.trim().toUpperCase();
		const response = await axiosInstance.post("/temp-student/add", {
			nic,
			name,
			school,
			address,
			email,
			telephone_no,
			gender,
			medium,
			stream_id,
			rank_district_id,
			exam_district_id,
			exam_centre_id,
			/*  reg_by,
        reg_date,
        checked_by,
        checked_at,
        created_at, */
		});
		console.log("response", response);
		return true;
	} catch (error) {
		console.error("Error Adding Student:", error);
		if (error instanceof AxiosError && error.response) {
			throw error.response.data.error;
		}
	}
};
