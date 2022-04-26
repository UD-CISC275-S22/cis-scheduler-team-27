import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "./interfaces/Course";
import catalog from "./catalog.json";
import { CourseDisplay } from "./CourseDisplay";
import { CourseEditor } from "./CourseEditor";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COURSES = Object.values(catalog).map((info) => ({
    code: info.code,
    name: info.name,
    descr: info.descr,
    credits: info.credits,
    preReq: info.preReq,
    restrict: info.restrict,
    breadth: info.breadth,
    typ: info.typ
}));

export function CourseView(): JSX.Element {
    const [courseList, setCourseList] = useState<Course[]>(COURSES);
    const [chosenCourse, setChosenCourse] = useState<string>(
        courseList[0].code
    );
    const [editing, setEditing] = useState<boolean>(false);
    function updateCourse(event: ChangeEvent) {
        setChosenCourse(event.target.value);
    }
    function deleteCourse(id: string) {
        setCourseList(
            courseList.filter((course: Course): boolean => course.code !== id)
        );
        setChosenCourse(courseList[0].code);
    }
    function changeEditMode() {
        setEditing(!editing);
    }
    const courseInfo = COURSES.find(
        (course: Course): boolean => course.code == chosenCourse
    );
    function editCourse(id: string, newCourse: Course) {
        setCourseList(
            courseList.map(
                (course: Course): Course =>
                    course.code === id ? newCourse : course
            )
        );
    }
    return editing && courseInfo ? (
        <CourseEditor
            code={courseInfo.code}
            name={courseInfo.name}
            credits={courseInfo.name}
            descr={courseInfo.descr}
            preReqs={courseInfo.preReq}
            restrict={courseInfo.restrict}
            breadth={courseInfo.breadth}
            typ={courseInfo.typ}
            editCourse={editCourse}
            changeEditMode={changeEditMode}
        ></CourseEditor>
    ) : (
        <div>
            <h3>Courses</h3>
            <Form.Group controlId="chosenClass">
                <Form.Label>Choose a Course</Form.Label>
                <Form.Select value={chosenCourse} onChange={updateCourse}>
                    {courseList.map((course: Course) => (
                        <option key={course.code} value={course.code}>
                            {course.code}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <CourseDisplay chosenCourse={courseInfo}></CourseDisplay>
            <Button onClick={() => deleteCourse(chosenCourse)}>
                Delete Course
            </Button>
            <Button onClick={changeEditMode}>Edit Course</Button>
        </div>
    );
}
