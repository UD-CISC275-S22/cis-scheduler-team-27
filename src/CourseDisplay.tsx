import React from "react";
import { Course } from "./interfaces/Course";
import "./course.css";
import { CourseCard } from "./CourseCard";

export function CourseDisplay({
    chosenCourse
}: {
    chosenCourse: Course | undefined;
}): JSX.Element {
    if (chosenCourse === undefined) {
        return (
            <div>
                <p></p>
            </div>
        );
    } else {
        return <CourseCard course={chosenCourse}></CourseCard>;
    }
}
