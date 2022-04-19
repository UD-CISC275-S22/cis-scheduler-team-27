import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course } from "./interfaces/Course";
import catalog2 from "./catalog2.json";
import { CourseDisplay } from "./CourseDisplay";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CourseView(): JSX.Element {
    const [chosenCourse, setChosenCourse] = useState<string>(catalog2[0].code);

    function updateCourse(event: ChangeEvent) {
        setChosenCourse(event.target.value);
        console.log(courseInfo);
    }
    const courseInfo = catalog2.find(
        (course: Course): boolean => course.code == chosenCourse
    );
    return (
        <div>
            <h3>Courses</h3>
            <Form.Group controlId="chosenClass">
                <Form.Label>Choose a Course</Form.Label>
                <Form.Select value={chosenCourse} onChange={updateCourse}>
                    {catalog2.map((course: Course) => (
                        <option key={course.code} value={course.code}>
                            {course.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <CourseDisplay chosenCourse={courseInfo}></CourseDisplay>
        </div>
    );
}
