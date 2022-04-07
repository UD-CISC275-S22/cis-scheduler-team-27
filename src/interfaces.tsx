export interface Course {
    courseCode: string;
    courseTitle: string;
    courseCredits: number;
    preReq: string[];
}
export interface Semester {
    name: string;
    numOfCourses: number;
    listOfCourses: Course[];
    numberOfCredits: number;
    Year: number;
    Season: string;
}

export interface Plan {
    name: string;
}
