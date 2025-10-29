import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

export async function getStudyMaterials({ courseName, branchName = null, semester }) {
    try {
        // normalize names to lowercase
        const normalizedCourse = courseName.toLowerCase();
        const normalizedBranch = branchName?.toLowerCase() || null;
        const normalizedSemester = `sem ${semester}`;

        // first try fetching from /subjects
        const subjectFilters = {
            course: { course_name: { $eq: normalizedCourse } },
            semester: { $eq: normalizedSemester },
        };

        if (normalizedBranch) {
            subjectFilters.branch = { branch_name: { $eq: normalizedBranch } };
        }

        const resSubjects = await axiosClient.get("/subjects", {
            params: {
                filters: subjectFilters,
                populate: {
                    materials: true,
                    course: true,
                    branch: true,
                },
            },
        });

        const subjectData = resSubjects.data?.data || [];

        // if /subjects gave results, return them
        if (subjectData.length > 0) {
            console.log("✅ Using /subjects data:", subjectData);
            return subjectData.map((item) => ({
                id: item.id,
                subject_name: item.subject_name,
                subject_code: item.subject_code,
                semester: item.semester,
                course: item.course?.course_name,
                branch: item.branch?.branch_name || null,
                materials:
                    item.materials?.map((m) => ({
                        id: m.id,
                        type: m.material_type,
                        year: m.year,
                        link: m.link,
                        file: m.file,
                    })) || [],
            }));
        }

        // otherwise fallback to /courses (subjects nested inside)
        console.log("⚠️ No data in /subjects, trying /courses instead...");

        const resCourses = await axiosClient.get("/courses", {
            params: {
                filters: { course_name: { $eq: normalizedCourse } },
                populate: {
                    subjects: {
                        populate: "materials",
                    },
                    branches: true,
                },
            },
        });

        const courseData = resCourses.data?.data?.[0];
        const nestedSubjects = courseData?.subjects || [];

        // filter subjects by semester and (optional) branch
        const filteredSubjects = nestedSubjects.filter((subj) => {
            const semMatch =
                subj.semester?.toLowerCase() === normalizedSemester.toLowerCase();
            const branchMatch = normalizedBranch
                ? subj.branch_name?.toLowerCase() === normalizedBranch
                : true;
            return semMatch && branchMatch;
        });

        console.log("✅ Using /courses nested subjects:", filteredSubjects);

        return filteredSubjects.map((subj) => ({
            id: subj.id,
            subject_name: subj.subject_name,
            subject_code: subj.subject_code,
            semester: subj.semester,
            course: normalizedCourse,
            branch: normalizedBranch,
            materials:
                subj.materials?.map((m) => ({
                    id: m.id,
                    type: m.material_type,
                    year: m.year,
                    link: m.link,
                    file: m.file,
                })) || [],
        }));
    } catch (error) {
        console.error("❌ Error fetching study materials:", error);
        return [];
    }
}
