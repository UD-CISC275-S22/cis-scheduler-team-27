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
    const courseInfo = ClassData.find(
        (course: Course): boolean => course.courseTitle == chosenCourse
    );
    return (
        <div>
            <h3>Courses</h3>
            <Form.Group controlId="chooseCourse">
                <Form.Label>Choose a Course</Form.Label>
                <Form.Select value={chosenCourse} onChange={updateCourse}>
                    {ClassData.map((option: Course) => (
                        <option
                            key={option.courseTitle}
                            value={option.courseTitle}
                        >
                            {option.courseTitle}
                        </option>
                    ))}
                </Form.Select>
                <CourseDisplay chosenCourse={courseInfo}></CourseDisplay>
            </Form.Group>
        </div>
    );
}
