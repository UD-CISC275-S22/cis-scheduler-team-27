import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course } from "./interfaces/Course";
import ClassData from "./ClassData.json";
import { CourseDisplay } from "./CourseDisplay";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CourseView(): JSX.Element {
    const [chosenCourse, setChosenCourse] = useState<string>(
        ClassData[0].courseTitle
    );

    function updateCourse(event: ChangeEvent) {
        setChosenCourse(event.target.value);
    }
    return (
        <div>
            <h3>Courses</h3>
        </div>
    );
}
