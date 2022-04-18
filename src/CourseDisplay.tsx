import React from "react";
import { Course } from "./interfaces/Course";

export function CourseDisplay({
    chosenCourse
}: {
    chosenCourse: Course | undefined;
}): JSX.Element {
    if (chosenCourse === undefined) {
        return (
            <div>
                <p>Invalid Course</p>
            </div>
        );
    } else {
        return (
            <div>
                <span>
                    <h5>{chosenCourse.name}</h5>
                    <p>Course Code: {chosenCourse.code}</p>
                    <p>Credits: {chosenCourse.credits}</p>
                    <p>Required PreReqs: {chosenCourse.preReq}</p>
                </span>
            </div>
        );
    }
}
