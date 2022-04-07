import { Course } from "./courseInt";
export interface Semester {
    name: string;
    numOfCourses: number;
    listOfCourses: Course[];
    numberOfCredits: number;
    Year: number;
    Season: string;
}
