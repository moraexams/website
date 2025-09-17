import EXAM_CENTRES from "../EXAM_CENTRES.json";

export const languages = Object.freeze({
	en: "English",
	ta: "Tamil",
});
/**
 * @typedef {keyof typeof languages} Language
 */

export const LANGUAGES_DISPLAY_TEXT = Object.freeze(
	/**
	 * @type {Record<Language, string>}
	 */
	{
		en: "ENG",
		ta: "தமிழ்",
	},
);

/**
 * @type {Array<Language>}
 */
// @ts-expect-error
export const LIST_OF_LANGUAGES = Object.keys(languages);

export const defaultLang = "en";

let totalExamCentres = 0;

for (const d of EXAM_CENTRES.districts) {
	totalExamCentres += d.centers.length;
}

/**
 * @typedef UiStrings
 * @prop {string} index__title
 * @prop {string} meta__description
 * @prop {string} nav__timetable
 * @prop {string} nav__resources
 * @prop {string} nav__about
 * @prop {string} nav__practice_papers
 * @prop {string} nav__past_papers
 * @prop {string} nav__home
 * @prop {string} hero__title
 * @prop {string} hero_form_sub_button
 * @prop {string} find_your_examination_centres__tile
 * @prop {string} find_your_examination_centres__description
 * @prop {string} looking_for_past_papers__title
 * @prop {string} timetable__title
 * @prop {string} committee__title
 * @prop {string} committee__president_name
 * @prop {string} committee__president_post
 * @prop {string} committee__president_faculty
 * @prop {string} committee__secretary_faculty
 * @prop {string} committee__treasurer_faculty
 * @prop {string} committee__vice_president_faculty
 * @prop {string} committee__secretary_name
 * @prop {string} committee__secretary_post
 * @prop {string} committee__treasurer_name
 * @prop {string} committee__treasurer_post
 * @prop {string} committee__vice_president_name
 * @prop {string} committee__vice_president_post
 * @prop {string} committee__university
 * @prop {string} looking_for_past_papers__description
 * @prop {string} footer_title_1
 * @prop {string} footer_title_1_description_p1
 * @prop {string} footer_title_1_description_p2
 * @prop {string} footer_title_2
 * @prop {string} footer_title_3
 * @prop {string} footer_title_4
 * @prop {string} footer_title_4_s1
 * @prop {string} footer_title_4_s2
 * @prop {string} footer_title_4_s3
 * @prop {string} footer_title_4_s4
 * @prop {string} footer_title_4_s5
 * @prop {string} elearning_videos_title
 * @prop {string} elearning_videos_p
 * @prop {string} elearning_videos_combined_maths
 * @prop {string} elearning_videos_physics
 * @prop {string} elearning_videos_chemistry
 * @prop {string} pathway__title
 * @prop {string} pathway__card1_title
 * @prop {string} pathway__card2_title
 * @prop {string} pathway__card3_title
 * @prop {string} pathway__card4_title
 * @prop {string} pathway__card1_para
 * @prop {string} pathway__card2_para
 * @prop {string} pathway__card3_para
 * @prop {string} pathway__card4_para
 * @prop {string} statistics__years
 * @prop {string} statistics__districts
 * @prop {string} statistics__centers
 * @prop {string} statistics__candidates
 * @prop {string} feedback_iroshan
 * @prop {string} feedback_abarna
 * @prop {string} feedback_sankavi
 * @prop {string} feedback_darukeesan
 * @prop {string} feedback_jathusan
 * @prop {string} feedback_sundarbavan
 * @prop {string} feedback_suriya
 * @prop {string} feedback_snekan
 * @prop {string} feedback_heading
 * @prop {string} feedback_iroshan_name
 * @prop {string} feedback_abarna_name
 * @prop {string} feedback_sankavi_name
 * @prop {string} feedback_darukeesan_name
 * @prop {string} feedback_jathusan_name
 * @prop {string} feedback_sundarbavan_name
 * @prop {string} feedback_suriya_name
 * @prop {string} feedback_snekan_name
 * @prop {string} timetable__start
 * @prop {string} timetable__date25_sub1
 * @prop {string} timetable__date25_sub2
 * @prop {string} timetable__date26_sub1
 * @prop {string} timetable__date26_sub2
 * @prop {string} timetable__date30_sub1
 * @prop {string} timetable__date03_sub1
 * @prop {string} timtable__date09_sub1
 * @prop {string} timtable__date09_sub2
 * @prop {string} timtable__date10_sub1
 * @prop {string}	timtable__date10_sub2
 * @prop {string} timetable__date_sep
 * @prop {string} timetable__date_dec
 * @prop {string} timetable__end
 * @prop {string} what_is_mora_pilot_exam__h2
 * @prop {string} what_is_mora_pilot_exam__p1
 * @prop {string} what_is_mora_pilot_exam__p2
 * @prop {string} what_is_mora_pilot_exam__li1
 * @prop {string} what_is_mora_pilot_exam__li2
 * @prop {string} what_is_mora_pilot_exam__li3
 * @prop {string} what_is_mora_pilot_exam__p3
 * @prop {string} all_about_us_section_heading
 * @prop {string} all_about_us_section_1
 * @prop {string} all_about_us_section_2
 * @prop {string} all_about_us_section_thamilaruvi
 * @prop {string} all_about_us_section_sotkanai
 * @prop {string} all_about_us_section_etc
 * @prop {string} all_about_us_section_3
 * @prop {string} achivers_ranking_1
 * @prop {string} achivers_ranking_2
 * @prop {string} achivers_ranking_3
 * @prop {string} achivers_ranking_4
 * @prop {string} achivers_ranking_5
 * @prop {string} achivers_ranking_6
 * @prop {string} achivers_ranking_7
 * @prop {string} achivers_ranking_8
 * @prop {string} name__tla
 * @prop {string} hero_button
 * @prop {string} hero_index_button
 * @prop {string} hero_results_button
 * @prop {string} looking_for_past_papers__button
 * @prop {string} find_your_index_no
 * @prop {string} find_your_index_no_p
 * @prop {string} find_your_results
 * @prop {string} find_your_results_p
 * @prop {string} nic_no
 * @prop {string} index_no
 * @prop {string} find_button
 * @prop {string} schemes_button
 * @prop {string} results__title
 * @prop {string} find_your_index_no__title
 * @prop {string} practice_papers_title
 * @prop {string} practice_papers_p
 * @prop {string} exam_papers_title
 * @prop {string} exam_papers_p
 * @prop {string} instructions__title
 * @prop {string} instructions__item_01
 * @prop {string} instructions__item_02
 * @prop {string} instructions__item_03
 * @prop {string} instructions__item_04
 * @prop {string} instructions__item_05
 * @prop {string} instructions__item_06
 * @prop {string} instructions__item_07
 * @prop {string} instructions__item_08
 * @prop {string} instructions__item_09
 * @prop {string} instructions__item_10
 * @prop {string} instructions__item_11
 * @prop {string} instructions__item_12
 * @prop {string} past_papers__title
 * @prop {string} student_register__title
 * @prop {string} student_register__instructions_title
 * @prop {string} student_register__instruction_1
 * @prop {string} student_register__instruction_2
 * @prop {string} student_register__registration_fee_title
 * @prop {string} student_register__registration_fee_ict_only_label
 * @prop {string} student_register__registration_fee_ict_only_amount
 * @prop {string} student_register__registration_fee_other_streams_label
 * @prop {string} student_register__registration_fee_other_streams_amount
 * @prop {string} student_register__registration_fee_bank_details_title
 * @prop {string} student_register__registration_fee_account_name
 * @prop {string} student_register__registration_fee_account_no
 * @prop {string} student_register__registration_fee_bank_name
 * @prop {string} student_register__registration_fee_bank_branch
 * @prop {string} student_register__registration_fee_description
 * @prop {string} student_register__understood_text
 * @prop {string} student_register__cant_proceed_text
 * @prop {string} student_register__form_unavailable
 * @prop {string} student_register__form_closed
 * @prop {string} student_register__form_name
 * @prop {string} student_register__form_nic_no
 * @prop {string} student_register__form_school
 * @prop {string} student_register__form_permanent_address
 * @prop {string} student_register__form_phone_no
 * @prop {string} student_register__form_email
 * @prop {string} student_register__form_gender
 * @prop {string} student_register__form_medium
 * @prop {string} student_register__form_stream
 * @prop {string} student_register__form_district_ranking
 * @prop {string} student_register__form_district_sitting
 * @prop {string} student_register__form_exam_centre
 * @prop {string} student_register__form_upload_bank_receipt
 * @prop {string} student_register__success_title
 * @prop {string} student_register__success_description
 * @prop {string} student_register__contact_details
 * @prop {string} student_register__contact_name_01
 * @prop {string} student_register__contact_name_02
 * @prop {string} student_register__confirmation_title
 * @prop {string} student_register__confirmation_description
 */

/**
 * @type {UiStrings}
 */
const UI_STRINGS_EN = {
	index__title: "Mora Exams",
	meta__description:
		"Mora Exams is the largest, island-wide pioneer exam for A/L students. It proves to be incredibly helpful before entering the final exams, providing access to past papers and model papers.",

	nav__home: "Home",
	nav__timetable: "Timetable",
	nav__resources: "Resources",
	nav__about: "About Us",
	nav__practice_papers: "Practice Papers",
	nav__past_papers: "Past Papers",

	hero__title: "Sri Lanka's biggest pilot exams for G.C.E. Advanced Level",
	hero_form_sub_button: "Exam Form",

	find_your_examination_centres__tile: "Find your examination centres",
	find_your_examination_centres__description: `We have ${totalExamCentres} examination centre networks covering almost the whole island. Choose your district from the map, to view the available exam centres.`,
	looking_for_past_papers__title: "Looking for Mora Exam Past Papers?",
	looking_for_past_papers__description:
		"Find all the questions from the previous years and prepare yourself for the ultimate test. You'll be redirected to a Google Drive folder.",
	// looking_for_past_papers__description:
	// 	"Now It is even easier to find the paper you need. We have advanced filtering options. And we divided all the questions for each year based on the sub-sections of each subject. Now you can practice our past papers section-wise.",
	looking_for_past_papers__button: "View Pastpapers",

	committee__title: "Mora Exams 25 | Committee",
	committee__president_name: "Harshan R.",
	committee__president_post: "President",
	committee__secretary_name: "Mathumilan K.",
	committee__secretary_post: "Secretary",
	committee__treasurer_name: "Pirasanth V.",
	committee__treasurer_post: "Treasurer",
	committee__vice_president_name: "Babijana J.",
	committee__vice_president_post: "Vice President",
	committee__president_faculty: "Electrical Engineering",
	committee__secretary_faculty: "Mechanical Engineering",
	committee__treasurer_faculty: "Computer Science and Engineering",
	committee__vice_president_faculty: "Computer Science and Engineering",
	committee__university: "University of Moratuwa",

	footer_title_1: "Mora Exams",
	footer_title_1_description_p1:
		"We, engineers, are very much concerned about society and its betterment, and we believe that the betterment of society will bring a more prosperous and hybrid future generation than irrelevant mutations.",
	footer_title_1_description_p2:
		"It is very obvious how the engineering students in our society bring themselves up and plan out schemes to assist our community in many ways. We too, the Tamil people of the University of Moratuwa, brought ourselves together under the banner of Mora Exams.",
	footer_title_2: "Contact Us :",
	footer_title_3: "Follow Us :",
	footer_title_4: "Our Services",
	footer_title_4_s1: "Mora Exam",
	footer_title_4_s2: "Practice Papers",
	footer_title_4_s3: "E-learning Videos",
	footer_title_4_s4: "E-learning Site",
	footer_title_4_s5: "Doubts Forms",
	exam_papers_title: "Mora Exams 2024 Schemes",
	exam_papers_p:
		"Access the Tamil and English medium schemes for Mora Exams 2024 through the links provided below for easy download and reference.",
	practice_papers_title: "Practice Papers",

	practice_papers_p:
		"We have a collection of practice papers for each subject, prepared under the guidance of our engineering students of University of Moratuwa. Click on any of the subjects listed below and download the respective papers.",
	elearning_videos_title: "E-Learning Videos",
	elearning_videos_p:
		"We have done video explanations regarding important topics in each subject on our YouTube channel. Click on any of the subjects listed below and view the respective videos.",
	elearning_videos_combined_maths: "Combined Maths",
	elearning_videos_physics: "Physics",
	elearning_videos_chemistry: "Chemistry",

	pathway__title: "Our Journey",
	pathway__card1_title: "START",
	pathway__card2_title: "RESTART",
	pathway__card3_title: "TECHNOLOGY STREAM",
	pathway__card4_title: "NOW",
	pathway__card1_para:
		"A need for a common model test was felt in order to prepare students for the final exam. A common model test was held for students of the mathematics and biology streams in 2007. This test laid the foundation for the Mora exam.",
	pathway__card2_para:
		"The need for the pilot examination is felt. An exam was held for physical science and biological science students. This exam transformed into the Mora Exam in 2010.",
	pathway__card3_para:
		"Tech stream added in 2016 due to student requests and Provincial Director of Education. Our management now delegated to  tech faculty, University of Jaffna for student welfare.",
	pathway__card4_para:
		"In the 15th year of the Mora Exam, we are proud to serve the students. Last year, we expanded our service to 25 districts, conducted the examinations in more than 75 examination centres, and accommodated more than 6,500 candidates.",

	feedback_heading: "Thoughts from the Champions",
	achivers_ranking_1: "Ex-President",
	achivers_ranking_2: "Island First",
	achivers_ranking_3: "Island First",
	achivers_ranking_4: "District First(JAFFNA)",
	achivers_ranking_5: "District First(JAFFNA)",
	achivers_ranking_6: "Island First(JAFFNA)",
	achivers_ranking_7: "District First(JAFFNA)",
	achivers_ranking_8: "District First(JAFFNA)",
	feedback_iroshan:
		"It has gone through a variety of dimensions, and now it has reached national recognition and standards. Simply put, it's just another level.",
	feedback_darukeesan:
		"It is a common notion in society that students who are in universities focus only on their studies and have no care or concern for society. Our students have proved that to be wrong.",
	feedback_abarna:
		"Since the exam papers are prepared by well-experienced teachers, this team is important in our preparations for the final exam. It is better to practice two or three years of Mora exam past papers to face the final examination successfully!",
	feedback_sankavi:
		"Mora exams become part of the A/L examination. It gave me more practice and confidence. I am very glad about it. I saw the reflection of mora exams in my final examination.",
	feedback_jathusan:
		"The MORA exam provided a chance to improve my time management,the most important aspect of an examination. This examination creates an environment similar to that of the final examination, which helps to develop our mental stamina.",
	feedback_sundarbavan:
		"Due to the COVID-19 pandamic, we hadn't faced any Model exams for nearly five months. In that respect, Mora exams helped me develop the ability to approach the questions and answer them properly.",
	feedback_suriya:
		"Mora exams are very similar to our A/L final examination. It helps students find their strengths and weaknesses beforehand.",
	feedback_snekan:
		"The MORA Exams helped me a lot in my preparation for the A/L Examination. The exam results pointed out my strengths and helped me improve and boost my confidence for the final exam.",
	feedback_iroshan_name: "Iroshan",
	feedback_darukeesan_name: "Darukeesan",
	feedback_abarna_name: "Abarna",
	feedback_sankavi_name: "Sankavi",
	feedback_jathusan_name: "Jathusan",
	feedback_sundarbavan_name: "Sundarbavan",
	feedback_suriya_name: "Suriya",
	feedback_snekan_name: "Snekan",
	statistics__years: "Years",
	statistics__districts: "Districts",
	statistics__centers: "Centres",
	statistics__candidates: "Candidates",

	timetable__title: "Timetable 2025",
	timetable__start: "START",
	timetable__date25_sub1: "Combined Mathematics-I",
	timetable__date25_sub2: "Biology-I",
	timetable__date26_sub1: "Combined Mathematics-I",
	timetable__date26_sub2: "Biology-II",
	timetable__date30_sub1: "Physics-I",
	timetable__date03_sub1: "Physics-II",
	timtable__date09_sub1: "Chemistry-I",
	timtable__date09_sub2: "ICT-I",
	timtable__date10_sub1: "Chemistry-II",
	timtable__date10_sub2: "ICT-II",
	timetable__date_sep: "SEP",
	timetable__date_dec: "DEC",
	timetable__end: "END",

	what_is_mora_pilot_exam__h2: "What is Mora Exams?",
	what_is_mora_pilot_exam__p1:
		"When sweeping over the ideas to advance the academic standards of Tamil-speaking students, our buddies thought of pilot examinations, which could boost the last-time preparations and be a way to appraise the students themselves at the very edge.",
	what_is_mora_pilot_exam__p2:
		"But providing a common exam paper and marking wouldn't help them , as they are very familiar to them. So, to add more and more spice,",
	what_is_mora_pilot_exam__li1:
		"The exam papers are set by popular and experienced teachers.",
	what_is_mora_pilot_exam__li2:
		"The exam papers are conducted in a way that portrays the final examination environment. This helps students ensure time management.",
	what_is_mora_pilot_exam__li3:
		"We too release island ranks based on their z-scores.",
	what_is_mora_pilot_exam__p3:
		"It vividly canvases the standards of the examinations and their potential among the students so that the students can adjust themselves to become more and more fit for the G.C.E. (A/L) examination, which makes their future more efficacious.",

	all_about_us_section_heading: "What is all about us?",
	all_about_us_section_1:
		"We, engineers, are very much concerned about society and its betterment, and we believe that the betterment of society will bring a more prosperous and hybrid future generation than irrelevant mutations.",
	all_about_us_section_2:
		"It is very obvious how the engineering students in our society bring themselves up and plan out schemes to assist our community in many ways. We too, the Tamil people of the University of Moratuwa, brought ourselves together under the banner of Mora E-Tamils. We also stand with our Tamil Literary Association in all its speculations and extend our heartfelt support to them during",
	all_about_us_section_thamilaruvi: "Thamilaruvi",
	all_about_us_section_sotkanai: "Sotkanai",
	all_about_us_section_etc: "Brammam, Jeevanathi,...etc",
	all_about_us_section_3:
		"All these programmes are designed and developed with the motive of strengthening the longevity and enrichment of the culture and tradition of the society. The organization Mora E-Tamils was established and fostered by the Tamil students of the Engineering Faculty of the University of Moratuwa with the sole aim of uplifting and forward-moving the academic standards of the Tamil-speaking students in our country.",

	name__tla: "Tamil Literary Association",

	find_your_results: "Find Your Results",
	find_your_results_p: "Enter your Index Number to find your results",

	find_your_index_no: "Find Your Index Number",
	find_your_index_no_p: "Enter your NIC Number to find your Index Number.",
	nic_no: "N.I.C No",
	index_no: "Index No",
	find_button: "Find",

	hero_button: "Find Index Number",
	hero_index_button: "Index Number",
	hero_results_button: "Results",
	schemes_button: "Schemes",
	results__title: "Results | Mora Exams",
	find_your_index_no__title: "Find Your Index No. | Mora Exams",

	instructions__title: "Exam Instructions for Students",
	instructions__item_01:
		"Students must arrive at the exam center at least 15 minutes before the exam begins. Entry to the exam hall will be allowed 10 minutes before the start of the exam.",
	instructions__item_02:
		"Students must attend the exam center they registered for on their admission form. Entry to any other exam center will not be permitted.",
	instructions__item_03:
		"You can find your assigned exam center in the email sent to you for index number confirmation. Please refer to this email to ensure you arrive at the correct center.",
	instructions__item_04:
		"Students must use the same exam hall throughout all their exams unless otherwise instructed by the invigilators.",
	instructions__item_05:
		"Students must use the exam center with respect and responsibility, ensuring no damage is caused to the exam hall or its property.",
	instructions__item_06:
		"All students must bring their National Identity Card (NIC) to the exam hall for verification.",
	instructions__item_07:
		"Casual dress is allowed in most exam centers. However, in some centers, school uniforms are mandatory. Check with your center for specific requirements.",
	instructions__item_08:
		"If a student registers for all exams but fails to attend one exam, they will not be permitted to attend the remaining exams.",
	instructions__item_09:
		"Students arriving after the start of an exam will not be allowed to enter and participate.",
	instructions__item_10:
		"Logarithmic tables are allowed if needed by students. Smartphones, digital devices, and calculators are strictly not allowed in the exam hall.",
	instructions__item_11:
		"Any form of cheating or misconduct (e.g., copying from others) will result in immediate termination from the exam.",
	instructions__item_12:
		"The Organizing Committee reserves the right to make all final decisions in case of any disputes or issues related to the exams.",
	past_papers__title: "Past Papers",

	student_register__title: "Student Registration Form",
	student_register__instructions_title: "Instructions",
	student_register__instruction_1:
		"<b>Not following the instructions</b> or <b>not submitting the accurate information</b> will result in your application being rejected.",
	student_register__instruction_2:
		"It is <b>mandatory</b> to pay the examination fee before filling up the online application form.</b>. <br>You must have a valid email address, to which the future updates will be sent to.<br> After submitting, you <b>cannot</b> edit this form.<br>",
	student_register__registration_fee_title: "Registration Fee",
	student_register__registration_fee_ict_only_label: "ICT only",
	student_register__registration_fee_ict_only_amount: "Rs. 200",
	student_register__registration_fee_other_streams_label: "Other options",
	student_register__registration_fee_other_streams_amount: "Rs. 600",
	student_register__registration_fee_bank_details_title: "Bank Account Details",
	student_register__registration_fee_account_name: "Account Name",
	student_register__registration_fee_account_no: "Account No",
	student_register__registration_fee_bank_name: "Bank",
	student_register__registration_fee_bank_branch: "Branch",
	student_register__registration_fee_description:
		"Include your <b>NIC No.</b> in the bank payment description.",
	student_register__understood_text:
		"I have read and understood the above mentioned details before proceeding.",
	student_register__cant_proceed_text:
		"You cannot proceed with the registration without confirming that you have read and understood the instructions.",
	student_register__form_unavailable:
		"The registration form is currently unavailable. Please check back later.",
	student_register__form_name: "Full Name",
	student_register__form_nic_no: "NIC No.",
	student_register__form_school: "School",
	student_register__form_permanent_address: "Permanent Address",
	student_register__form_phone_no: "Phone No.",
	student_register__form_email: "E-mail",
	student_register__form_gender: "Gender",
	student_register__form_medium: "Medium",
	student_register__form_stream: "Stream",
	student_register__form_district_ranking: "District for Ranking",
	student_register__form_district_sitting: "District for Exam Sitting",
	student_register__form_exam_centre: "Exam Centre",
	student_register__form_upload_bank_receipt: "Upload Bank Receipt",
	student_register__success_title: "Registration Successful!",
	student_register__success_description:
		"You have successfully registered for Mora Exams 2025. Please keep an eye on your email for further updates.",
	student_register__contact_details: "For Enquiries",
	student_register__contact_name_01: "S. Sivodayan",
	student_register__contact_name_02: "S. Abishake Thevar",
	student_register__confirmation_title: "Confirm Your Details",
	student_register__confirmation_description:
		"Please confirm that all the details you have entered are correct. You will not be able to edit them after submission.",
	student_register__form_closed: "The student registration form is closed.",
};

/**
 * @type {UiStrings}
 */
const UI_STRINGS_TA = {
	index__title: "Mora Exams",
	meta__description:
		"Mora Exams என்பது க.பொ.த (A/L) மாணவர்களுக்கான மாபெரும், நாடளாவிய பரீட்சையாகும். இறுதித் தேர்வுகளில் நுழைய போகும் மாணவர்களுக்கு இது நம்பமுடியாத அளவிற்கு உதவியாக இருக்கின்றது.",
	nav__home: "முகப்பு",
	nav__timetable: "நேர அட்டவணை",
	nav__resources: "வளங்கள்",
	nav__about: "எம்மைப் பற்றி",
	nav__practice_papers: "பயிற்சி வினாத்தாள்கள்",
	nav__past_papers: "கடந்த கால வினாத்தாள்கள்",
	hero__title: "இலங்கையின் மாபெரும் உயர்தர முன்னோடிப்பரீட்சை",
	hero_form_sub_button: "Exam Form",
	find_your_examination_centres__tile:
		"உங்களது பரீட்சை நிலையத்தை கண்டறியுங்கள்",
	find_your_examination_centres__description: `எங்களிடம் ${totalExamCentres} பரீட்சை மைய வலையமைப்புகள் கிட்டத்தட்ட முழு தீவையும் உள்ளடக்கி உள்ளன. தேர்வு மையங்களைப் பார்க்க உங்கள் மாவட்டத்தைத் தேர்வு செய்யவும்.`,
	looking_for_past_papers__title: "கடந்த கால வினாத்தாள்களை தேடுகின்றீர்களா?",
	timetable__title: "நேர அட்டவணை 2025",
	committee__title: "Mora Exams 2025 | செயற்குழு",
	committee__president_name: "ஹர்ஷன் ற.",
	committee__secretary_name: "மதுமிலன் கே.",
	committee__treasurer_name: "பிரசாந் வை.",
	committee__vice_president_name: "பபிஜனா ஜெ.",
	committee__president_post: "தலைவர்",
	committee__secretary_post: "செயலாளர்",
	committee__treasurer_post: "பொருளாளர்",
	committee__vice_president_post: "உப தலைவர்",
	committee__president_faculty: "மின் பொறியியல்",
	committee__secretary_faculty: "இயந்திர பொறியியல்",
	committee__treasurer_faculty: "கணனி விஞ்ஞானமும் பொறியியலும்",
	committee__vice_president_faculty: "கணனி விஞ்ஞானமும் பொறியியலும்",
	committee__university: "மொறட்டுவைப் பல்கலைக்கழகம்",
	looking_for_past_papers__description:
		"இப்போது உங்களுக்குத் தேவையான கடந்தகால வினாத்தாள்களை கண்டுபிடிப்பது இன்னும் எளிதாகிவிட்டது. எங்களிடம் மேம்பட்ட வடிகட்டுதல் தெரிவுகள் உள்ளன. மேலும் ஒவ்வொரு பாடத்தின் அடிப்படையில் ஒவ்வொரு ஆண்டுக்கான அனைத்து கேள்விகளையும் பிரித்துள்ளோம். இப்போது நீங்கள் எங்கள் கடந்தகால வினாத்தாள்களை பிரிவு வாரியாக பயிற்சி செய்யலாம்.",
	footer_title_1: "Mora Exams",
	footer_title_1_description_p1:
		"பொறியியலாளர்களாகிய நாம், சமூகம் மற்றும் அதன் மேம்பாடு குறித்து மிகவும் அக்கறை கொண்டுள்ளோம், மேலும் சமூகத்தின் மேம்பாடு, பொருத்தமற்ற பிறழ்வுகளை விட மிகவும் வளமான மற்றும் மேம்பட்ட எதிர்கால தலைமுறையைக் கொண்டுவரும் என்று நாங்கள் நம்புகிறோம்.",
	footer_title_1_description_p2:
		"நமது சமூகத்தில் உள்ள பொறியியல் மாணவர்கள் எவ்வாறு தங்களை வளர்த்துக்கொள்கிறார்கள் மற்றும் எங்கள் சமூகத்திற்கு பல வழிகளில் உதவுவதற்கான திட்டங்களைத் திட்டமிடுகிறார்கள் என்பது மிகவும் தெளிவாகத் தெரிகிறது. மொறட்டுவை பல்கலைக்கழக தமிழ் மக்களாகிய நாமும் மொறா இ-தமிழர் என்ற பதாகையின் கீழ் ஒன்றிணைந்தோம்.",
	footer_title_2: "தொடர்பு கொள்க :",
	footer_title_3: "எங்களைப் பின்பற்றவும் :",
	footer_title_4: "எங்கள் சேவைகள்",
	footer_title_4_s1: "மொறா தேர்வு",
	footer_title_4_s2: "பயிற்சி வினாத்தாள்கள் ",
	footer_title_4_s3: "மின் கற்றல் வீடியோக்கள்",
	footer_title_4_s4: "மின் கற்றல் தளம்",
	footer_title_4_s5: "சந்தேக படிவங்கள்",
	exam_papers_title: "Mora Exams 2024 புள்ளித்திட்டங்கள்",
	exam_papers_p:
		"தமிழ் மற்றும் ஆங்கில புள்ளித்திட்டங்களை கீழே கொடுக்கப்பட்டுள்ள இணைப்புகளில் இருந்து எளிதாக பதிவிறக்கம் செய்து காணலாம்.",

	practice_papers_title: "பயிற்சி வினாத்தாள்கள்",
	practice_papers_p:
		"மொறட்டுவைப்  பல்கலைக்கழக பொறியியல் மாணவர்களின் வழிகாட்டலின் கீழ் தயாரிக்கப்பட்ட பயிற்சி வினாத்தாள் தொகுப்பு. கீழுள்ள இணைப்பின் ஊடாக தரையிறக்கம் செய்துகொள்ள முடியும்.",
	elearning_videos_title: "மின் கற்றல் வீடியோக்கள்",
	elearning_videos_p:
		"எங்கள் You Tube சேனலில் ஒவ்வொரு பாடத்திலும் முக்கியமான தலைப்புகள் குறித்து காணொளி விளக்கங்கள் செய்துள்ளோம். கீழே பட்டியலிடப்பட்டுள்ள ஏதேனும் ஒன்றைத் தெரிவுசெய்து அந்தந்த காணொளிகளைப் பார்க்கவும்.",
	elearning_videos_combined_maths: "இணைந்த கணிதம்",
	elearning_videos_physics: "பௌதிகவியல்",
	elearning_videos_chemistry: "இரசாயனவியல்",
	pathway__title: "மொறா பரீட்சை கடந்து வந்த பாதை",
	pathway__card1_title: "ஆரம்பம்",
	pathway__card2_title: "மீள் ஆரம்பம்",
	pathway__card3_title: "தொழில்நுட்பப் பிரிவு",
	pathway__card4_title: "தற்போது",
	pathway__card1_para:
		"இறுதிப் பரீட்சைக்கு முன்பு மாணவர்களை தயார்ப்படுத்தும் நோக்கில் ஒரு பொதுவான மாதிரிப் பரீட்சைக்கான தேவை உணரப்பட்டது. 2007 ஆம் ஆண்டு கணித மற்றும் உயிரியல் பிரிவு மாணவர்களுக்கு பொதுவான மாதிரிப் பரீட்சை ஒன்று இடம்பெற்றது. இப் பரீட்சையானது மொறா பரீட்சைக்கான அடித்தளமாக அமைந்தது.",
	pathway__card2_para:
		"நாட்டில் நிலவிய அசாதாரண சூழ்நிலைகளின் காரணமாக அடுத்த இரு வருடங்களும் பரீட்சை இடம்பெறவில்லை. 2010 ஆம் ஆண்டு பரீட்சை முறைமை புதிதாக கட்டமைக்கப்பட்டு முதலாவது மொறா பரீட்சை 5 மாவட்டங்களில் 500 மாணவர்களுடன் நடைபெற்றது.",
	pathway__card3_para:
		"மாணவர்களின் கோரிக்கைகள் மற்றும் மாகாணக் கல்விப் பணிப்பாளர் காரணமாக 2016 இல் தொழில்நுட்ப பிரிவும் சேர்க்கப்பட்டது. எங்கள் நிர்வாகம் இப்போது மாணவர் நலனுக்காக யாழ்ப்பாணப் பல்கலைக்கழகத்தின் தொழில்நுட்ப பீடத்திடம் ஒப்படைக்கப்பட்டுள்ளது.",
	pathway__card4_para:
		"	15 ஆவது மொறா பரீட்சையை வெற்றிகரமாக நடாத்துவதை எண்ணி பெருமையடைகின்றோம். கடந்த வருடம் 25 மாவட்டங்களில் 75 பரீட்சை நிலையங்களில் 6500 இற்கு மேற்பட்ட மாணவர்களை உள்ளடக்கி எமது பரீட்சையை நடாத்தி இருந்தோம்.",
	feedback_iroshan:
		"இத்தேர்வு பல்வேறு படிநிலைகளை தாண்டி தேசிய அங்கீகாரம் பெற்று காணப்படுகின்றது. சுருக்கமாக சொல்லப்போனால் இது பரீட்சையின் அடுத்த நிலை ஆகும்.",
	feedback_darukeesan:
		"பல்கலைக்கழகங்களில் படிக்கும் மாணவர்கள் படிப்பில் மட்டுமே கவனம் செலுத்துகிறார்கள், சமூகத்தின் மீது அக்கறை இல்லை என்பது சமூகத்தில் பொதுவான கருத்து. அது தவறு என்று எங்கள் மாணவர்கள் நிரூபித்துள்ளனர்.",
	feedback_abarna:
		"வினாத்தாள்கள் நன்கு அனுபவம் வாய்ந்த ஆசிரியர்களினால் தயாரிக்கப்படுவதால் இறுதித்தேர்வுக்கான தயார்படுத்தலில் மொறா பரீட்சை முக்கியமானது. இறுதித்தேர்வை வெற்றிகரமாக எதிர்கொள்வதற்கு 2 அல்லது 3 வருடங்கள் கடந்தகால மொறா பரீட்சை வினாத்தாளை பயிற்சி செய்வது நன்று.",
	feedback_sankavi:
		"மொறா பரீட்சைகள் A/L பரீட்சையின் ஒரு பகுதியாகும். அது எனக்கு அதிக பயிற்சியையும் நம்பிக்கையையும் கொடுத்தது. அதில் நான் மிகவும் மகிழ்ச்சி அடைகிறேன். எனது இறுதித் தேர்வில் மொறா தேர்வுகளின் பிரதிபலிப்பைக் கண்டேன்.",
	feedback_sundarbavan:
		"கோவிட்-19 தொற்றுநோய் காரணமாக, கிட்டத்தட்ட ஐந்து மாதங்களாக நாங்கள் எந்த மாதிரித் தேர்வுகளையும் எதிர்கொள்ளவில்லை. அந்த வகையில் மொறா பரீட்சைகள் கேள்விகளை அணுகி சரியான முறையில் பதிலளிக்கும் திறனை வளர்க்க எனக்கு உதவியது.",
	feedback_suriya:
		"மொறா பரீட்சைகள் எமது A/L இறுதிப் பரீட்சைக்கு மிகவும் ஒத்தவை. மாணவர்கள் தங்கள் பலம் மற்றும் பலவீனங்களை முன்கூட்டியே கண்டறிய உதவுகிறது.",
	feedback_snekan:
		"எனது உயர்தரப் பரீட்சைத் தயார்நிலைப்படுத்தலுக்கு மொறா பரீட்சை பெரிதும் உதவியது.பரீட்சை பெறுபேறுகள் எனது பலங்களை சுட்டிக்காட்டியதோடு , முன்னேற்றத்தை ஏற்படுத்தி, இறுதி சோதனைக்கான எனது நம்பிக்கையை அதிகரிக்க உதவியது.",
	feedback_jathusan:
		"ஒரு தேர்வின் மிக முக்கியமான அம்சமான எனது நேர முகாமைத்துவத்தை மேம்படுத்த மொறா தேர்வு ஒரு வாய்ப்பை வழங்கியது. இந்த தேர்வு இறுதித் தேர்வைப் போன்ற ஒரு சூழலை உருவாக்குகிறது. இது நமது மன சகிப்புத்தன்மையை வளர்க்க உதவுகிறது.",
	feedback_heading: "எமது பரீட்சை பற்றி சாதனையாளர்களின் கருத்துக்கள்",
	feedback_iroshan_name: "இரோஷன்",
	feedback_darukeesan_name: "டாருகீசன்",
	feedback_abarna_name: "அபர்ணா",
	feedback_sankavi_name: "சங்கவி",
	feedback_jathusan_name: "யதுஷன்",
	feedback_sundarbavan_name: "சுந்தர்பவன்",
	feedback_suriya_name: "சூரியா",
	statistics__years: "வருடங்கள்",
	statistics__districts: "மாவட்டங்கள்",
	statistics__centers: "நிலையங்கள்",
	statistics__candidates: "மாணவர்கள்",
	timetable__start: "ஆரம்பம்",
	timetable__date25_sub1: "இணைந்த கணிதம்-I",
	timetable__date25_sub2: "உயிரியல்-I",
	timetable__date26_sub1: "இணைந்த கணிதம்-II",
	timetable__date26_sub2: "உயிரியல்-II",
	timetable__date30_sub1: "பௌதிகவியல்-I",
	timetable__date03_sub1: "பௌதிகவியல்-II",
	timtable__date09_sub1: "இரசாயனவியல்-I",
	timtable__date09_sub2: "ICT-I",
	timtable__date10_sub1: "இரசாயனவியல்-II",
	timtable__date10_sub2: "ICT-II",
	timetable__date_sep: "SEP",
	timetable__date_dec: "DEC",
	timetable__end: "முடிவு",
	what_is_mora_pilot_exam__h2: "Mora Exams",
	what_is_mora_pilot_exam__p1:
		"தமிழ் பேசும் மாணவர்களின் கல்வித் தரத்தை மேம்படுத்துவதற்கான வழிகளை எவ்வாறு தேர்வு செய்வது என்பது குறித்த யோசனைகளை ஆராயும்போது, முன்னோடித் தேர்வுகளை எங்கள் தோழர்கள் நினைத்தார்கள். இது ​​கடைசி நேர முன்னேற்பாடுகளை அதிகரிப்பதற்கும் மாணவர்களை விளிம்பில் மதிப்பிடுவதற்கான ஒரு வழியாகும்.",
	what_is_mora_pilot_exam__p2:
		"ஆனால் பொதுவான பரீட்சைத்தாளை வழங்குவது மற்றும் மதிப்பெண் வழங்குவது அவர்களுக்கு உதவாது, ஏனெனில் அவர்கள் அவற்றிற்கு மிகவும் பரிச்சயமானவர்கள். எனவே, மேலும் மேலும் மெருகூட்ட,",
	what_is_mora_pilot_exam__li1:
		"தேர்வுத் தாள்கள் பிரபலமான மற்றும் அனுபவம் வாய்ந்த ஆசிரியர்களால் தயாரிக்கப்படுகின்றன.",
	what_is_mora_pilot_exam__li2:
		"தேர்வுத் தாள்கள் இறுதித் தேர்வுச் சூழலைச் சித்தரிக்கும் வகையில் அமைக்கப்பட்டுள்ளன. இது மாணவர்களுக்கு நேர மேலாண்மையை உறுதி செய்ய உதவுகிறது.",
	what_is_mora_pilot_exam__li3:
		"நாங்களும் அவர்களின் z-புள்ளிகளின் அடிப்படையில் தேசிய நிலைகளை வெளியிடுகிறோம்.",
	what_is_mora_pilot_exam__p3:
		"இது பரீட்சைகளின் தரங்களையும் மாணவர்களிடையே அவர்களின் திறனையும் தெளிவாக விளக்குகிறது, இதனால் மாணவர்கள் க.பொ.த.(உ/த) இறுதிப் போட்டிக்கு மேலும் மேலும் தகுதி பெற தங்களைத் தாங்களே சரி செய்து கொள்ள முடியும், இது அவர்களின் எதிர்காலத்தை மிகவும் திறம்படச் செய்கிறது.",
	all_about_us_section_heading: "நாம் யார்?",
	all_about_us_section_1:
		"பொறியியலாளர்களாகிய நாம், சமூகம் மற்றும் அதன் மேம்பாடு குறித்து மிகவும் அக்கறை கொண்டுள்ளோம், மேலும் சமூகத்தின் மேம்பாடு, பொருத்தமற்ற பிறழ்வுகளை விட மிகவும் வளமான மற்றும் மேம்பட்ட எதிர்கால தலைமுறையைக் கொண்டுவரும் என்று நாங்கள் நம்புகிறோம்.",
	all_about_us_section_2:
		"நமது சமூகத்தில் உள்ள பொறியியல் மாணவர்கள் எவ்வாறு தங்களை வளர்த்துக்கொள்கிறார்கள் மற்றும் எங்கள் சமூகத்திற்கு பல வழிகளில் உதவுவதற்கான திட்டங்களைத் திட்டமிடுகிறார்கள் என்பது மிகவும் தெளிவாகத் தெரிகிறது. மொறட்டுவை பல்கலைக்கழக தமிழ் மக்களாகிய நாமும் மொறா இ-தமிழர் என்ற பதாகையின் கீழ் ஒன்றிணைந்தோம். எமது தமிழ் இலக்கியச் சங்கத்தின் அனைத்து ஊகங்களுக்கும் எமது மனமார்ந்த ஆதரவைத் தெரிவித்துக் கொள்கிறோம்.",
	all_about_us_section_thamilaruvi: "தமிழருவி",
	all_about_us_section_sotkanai: "சொற்கனை",
	all_about_us_section_etc: "பிரம்மம்,ஜீவநதி ....மேலும் பல",
	all_about_us_section_3:
		"இந்த திட்டங்கள் அனைத்தும் சமூகத்தின் கலாச்சாரம் மற்றும் பாரம்பரியத்தின் நீண்ட ஆயுளை வலுப்படுத்தவும் செழுமைப்படுத்தவும் நோக்கமாகக் கொண்டு வடிவமைக்கப்பட்டு உருவாக்கப்படுகின்றன. மொறட்டுவை பல்கலைக்கழகத்தின் பொறியியல் பீடத்தின் தமிழ் மாணவர்களால் மொறா  இ-தமிழர் என்ற அமைப்பு நிறுவப்பட்டு வளர்க்கப்பட்டதன் ஒரே நோக்கம், நமது நாட்டில் தமிழ் பேசும் மாணவர்களின் கல்வித் தரத்தை உயர்த்தலும் முன்னோக்கி நகர்த்தலும் ஆகும்.",
	achivers_ranking_1: "முன்னாள் தலைவர்",
	achivers_ranking_2: "இலங்கையில் முதலிடம்",
	achivers_ranking_3: "இலங்கையில் முதலிடம்",
	achivers_ranking_4: "யாழ் மாவட்டத்தில் முதலிடம்",
	achivers_ranking_5: "யாழ் மாவட்டத்தில் முதலிடம்",
	achivers_ranking_6: "இலங்கையில் முதலிடம்",
	achivers_ranking_7: "யாழ் மாவட்டத்தில் முதலிடம்",
	achivers_ranking_8: "யாழ் மாவட்டத்தில் முதலிடம்",
	name__tla: "தமிழ் இலக்கியக் கழகம்",
	feedback_snekan_name: "சினேகன்",
	looking_for_past_papers__button: "வினாத்தாள்கள்",
	find_your_results: "பரீட்சை முடிவுகளைக் கண்டறியுங்கள்",
	find_your_results_p:
		"உங்களுடைய சுட்டிலக்கத்தை உள்ளிட்டு பரீட்சை முடிவுகளைக் கண்டறியுங்கள்",

	find_your_index_no: "பரீட்சை சுட்டிலக்கதை கண்டறியுங்கள்",
	find_your_index_no_p:
		"உங்கள் தேசிய அடையாள அட்டை இலக்கத்தை உள்ளிட்டு உங்கள் சுட்டெண்ணை கண்டறியலாம்",
	nic_no: "அடையாள அட்டை இல.",
	index_no: "சுட்டிலக்கம்",
	find_button: "தேடு",

	hero_button: "பரீட்சை சுட்டெண்",
	hero_index_button: "Index Number",
	hero_results_button: "Results",
	schemes_button: "Schemes",
	results__title: "Results | Mora Exams",
	find_your_index_no__title: "Find Your Index No. | Mora Exams",
	instructions__title: "மாணவர்களுக்கான பரீட்சை அறிவுறுத்தல்கள்",
	instructions__item_01:
		"மாணவர்கள் பரீட்சை ஆரம்பிக்கும் நேரத்திற்கு 15 நிமிடத்திற்கு முன்னராகவே பரீட்சை நிலையத்திற்கு சமூகமளிக்க வேண்டும். பரீட்சை மண்டபத்திற்குள் பரீட்சை ஆரம்பிப்பதற்கு 10 நிமிடத்திற்கு முன்னராக அனுமதிக்கப்படுவார்கள்.",
	instructions__item_02:
		"மாணவர்கள் தங்களது சேர்க்கை வடிவத்தில் பதிவு செய்த தேர்வு மையத்திற்கு மட்டுமே வர வேண்டும். மற்ற தேர்வு மையங்களில் பங்கேற்க அனுமதிக்கப்படமாட்டார்கள்.",
	instructions__item_03:
		"மாணவர் சுட்டெண்ணை உறுதிப்படுத்தியதற்கான மின்னஞ்சலில் மாணவர்கள் தேர்வு மையத்தை உறுதி செய்து கொள்ள முடியும்.",
	instructions__item_04:
		"மேற்பார்வையாளர்களினால் அறிவுறுத்தப்படும் சந்தர்ப்பம் தவிர்ந்த ஏனைய சந்தர்ப்பங்களில் மாணவர்கள் கட்டாயமாக ஒரே பரீட்சை மண்டபத்தையே அனைத்து பரீட்சைகளுக்கும் பயன்படுத்த வேண்டும்.",
	instructions__item_05:
		"மாணவர்கள் அனைவரும் பரீட்சை மண்டபம் மற்றும் அங்குள்ள சொத்துக்களுக்கு எந்தவொரு சேதங்களும் ஏற்படாத வண்ணம் மதிப்புடனும் பொறுப்புணர்வுடனும் பயன்படுத்த வேண்டும்.",
	instructions__item_06:
		"மாணவர்கள் அனைவரும் கட்டாயமாக உறுதிப்படுத்துவதற்காக பரீட்சை நிலையத்திற்கு தேசிய அடையாள அட்டையினை கொண்டுவர வேண்டும்.",
	instructions__item_07:
		"அதிகளவான பரீட்சை நிலையங்களில் வழக்கமான ஆடை அணிவதற்கு அனுமதிக்கப்படும். இருப்பினும் சில பரீட்சை நிலையங்களில் பாடசாலைச் சீருடை கட்டாயமானது. மேலதிக தகவல்களுக்காக உங்கள் பரீட்சை நிலையங்களை தொடர்பு கொள்ளவும்.",
	instructions__item_08:
		"ஒரு பரீட்சையை தவறவிட்டால், மற்ற பரீட்சைகளை எழுத அனுமதி இல்லை.",
	instructions__item_09:
		"பரீட்சை ஆரம்பித்த பின்னர் வருகை தரும் மாணவர்கள் பரீட்சை எழுத அனுமதிக்கப்பட மாட்டார்கள்.",
	instructions__item_10:
		"மாணவர்களுக்கு தேவையேற்படின் மடக்கை அட்டவணை எடுத்து வருதல் அனுமதிக்கப்பட்டுள்ளது.  கையடக்கத்தொலைபேசி, கணிப்பான் மற்றும் ஏனைய இலத்திரனியல் சாதனங்களை பரீட்சை மண்டபத்தினுள் எடுத்துச்செல்லல் கண்டிப்பாகத் தடை செய்யப்பட்டுள்ளது.",
	instructions__item_11:
		"ஒழுக்கமற்ற செயற்பாடுகளில் ஈடுபடுவாராயின் உடனடியாகப் பரீட்சை மண்டபத்திலிருந்து வெளியேற்றப்படுவர்.",
	instructions__item_12:
		"பரீட்சை நடைபெறும் போது ஏற்படும் பிரச்சினைகளுக்குரிய முடிவுகளை Mora Exams 2024 | Examination Committee மேற்கொள்ளும்.",
	past_papers__title: "கடந்த கால வினாத்தாள்கள்",
	student_register__title: "மாணவர் பதிவு படிவம்",
	student_register__instructions_title: "அறிவுறுத்தல்கள்",
	student_register__instruction_1:
		"<b>வழிமுறைகளைப் பின்பற்றாதது</b> அல்லது <b>துல்லியமான தகவல்களைச் சமர்ப்பிக்காதது</b> உங்கள் விண்ணப்பத்தை நிராகரிக்க வழிவகுக்கும்.",
	student_register__instruction_2:
		"நிகழ்நிலை விண்ணப்பப் படிவத்தை நிரப்புவதற்கு முன், பரீட்சைக் கட்டணத்தை செலுத்துவது <b>அத்தியாயவசியமானது</b>.  <br>பரீட்சை தொடர்பான மேலதிக தகவல்கள் மின்னஞ்சல் ஊடாக அறிவிக்கப்பட இருப்பதால், உங்களிடம் செல்லுபடியாகும் மின்னஞ்சல் முகவரியொன்று இருக்க வேண்டும்.<br>இந்த நிகழ்நிலைப் படிவத்தை சமர்ப்பித்த பின், அதில் எவ்வித மாற்றங்களையும் உங்களால் செய்ய இயலாது.",
	student_register__registration_fee_title: "பதிவு கட்டணம்",
	student_register__registration_fee_ict_only_label: "ICT மட்டும்",
	student_register__registration_fee_ict_only_amount: "ரூ. 200",
	student_register__registration_fee_other_streams_label: "பிற தொகுதிகள்",
	student_register__registration_fee_other_streams_amount: "ரூ. 600",
	student_register__registration_fee_bank_details_title: "வங்கி விவரங்கள்",
	student_register__registration_fee_account_name: "கணக்கு பெயர்",
	student_register__registration_fee_account_no: "கணக்கு எண்",
	student_register__registration_fee_bank_name: "வங்கி பெயர்",
	student_register__registration_fee_bank_branch: "கிளை",
	student_register__registration_fee_description:
		"வங்கி கட்டண ரசீதில் உங்கள் <b>தேசிய அடையாள அட்டை இலக்கத்தை</b> சேர்க்கவும்.",
	student_register__understood_text:
		"நான் மேலே குறிப்பிடப்பட்டுள்ள விவரங்களைப் படித்துப் புரிந்துகொண்டேன்.",
	student_register__cant_proceed_text:
		"நீங்கள் வழிமுறைகளைப் படித்துப் புரிந்து கொண்டீர்கள் என்பதை உறுதிப்படுத்தாமல் பதிவைத் தொடர முடியாது.",
	student_register__form_unavailable:
		"பதிவு படிவம் தற்போது கிடைக்கவில்லை. பின்னர் மீண்டும் சரிபார்க்கவும்.",
	student_register__form_name: "முழுப்பெயர்",
	student_register__form_nic_no: "NIC எண்",
	student_register__form_school: "பாடசாலை",
	student_register__form_permanent_address: "நிலையான முகவரி",
	student_register__form_phone_no: "தொலைபேசி எண்",
	student_register__form_email: "மின்னஞ்சல்",
	student_register__form_gender: "பாலினம்",
	student_register__form_medium: "மூலமொழி",
	student_register__form_stream: "தொகுதி",
	student_register__form_district_ranking: "மாவட்டம் (தரவரிசை)",
	student_register__form_district_sitting: "மாவட்டம் (பரீட்சை)",
	student_register__form_exam_centre: "பரீட்சை மையம்",
	student_register__form_upload_bank_receipt: "வங்கி ரசீதைப் பதிவேற்றவும்",
	student_register__success_title: "பதிவு வெற்றிகரமாக முடிந்தது!",
	student_register__success_description:
		"நீங்கள் வெற்றிகரமாக Mora Exams 2025இற்கு விண்ணப்பித்து விட்டீர்கள். மின்னஞ்சலூடாக புதிய தகவல்கள் பகிரப்படும் என்பதை கருத்திற் கொள்ளுங்கள்.",
	student_register__contact_details: "விசாரணைகளுக்கு",
	student_register__contact_name_01: "சு. சிவோதயன்",
	student_register__contact_name_02: "ச. அபிஷேக் தேவர்",
	student_register__confirmation_title: "உங்கள் விவரங்களை உறுதிப்படுத்தவும்",
	student_register__confirmation_description:
		"நீங்கள் உள்ளிட்ட அனைத்து விவரங்களும் சரியாக உள்ளனவா என்பதை உறுதிப்படுத்தவும். சமர்ப்பித்த பிறகு உங்களால் அவற்றைத் திருத்த முடியாது.",
	student_register__form_closed: "மாணவர் விண்ணப்ப படிவம் மூடப்பட்டுள்ளது.",
};

/**
 * @type {Readonly<Record<Language, UiStrings>>}
 */
export const ui = Object.freeze({
	en: UI_STRINGS_EN,
	ta: UI_STRINGS_TA,
});

/**
 * @type {import("astro").GetStaticPathsResult}
 */
export const langStaticRoutes = [
	{
		params: {
			lang: "en",
		},
	},
	{
		params: {
			lang: "ta",
		},
	},
];

export const COMMON_CONFIG = Object.freeze({
	CONTACT_PHONE_NUMBER: "+94 76 036 0110",
});
