import { Course } from "./Course";
export interface Semester {
    name: string;
    courses: Course[];
    credits: number;
    year: string;
    season: string;
}
