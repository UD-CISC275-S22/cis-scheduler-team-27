import { Semester } from "./Semester";
export interface Plan {
    title: string;
    description: string;
    semesters: Semester[];
}
