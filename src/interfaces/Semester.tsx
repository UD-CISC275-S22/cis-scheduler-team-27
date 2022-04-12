import { Course } from "./Course";
export interface Semester {
    name: string;
    options: Course[];
    type: string;
    numberOfCredits: string;
    Year: number;
    Season: string;
}
