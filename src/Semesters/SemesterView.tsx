import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { SemesterEditor } from "./SemesterEditor";
import "../course.css";
import { Course } from "../interfaces/Course";
import { useDrop } from "react-dnd";
import { CourseCard } from "../CourseCard";
import "./Semester.css";

export function SemesterView({
    semester,
    deleteSemester,
    editSemester
}: {
    semester: Semester;
    deleteSemester: (title: string) => void;
    editSemester: (title: string, newSemester: Semester) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    const [courseList, setCourseList] = useState<Course[]>([]);
    const [, drop] = useDrop({
        accept: "course",
        drop: (course: Course) =>
            setCourseList((courseList) =>
                !courseList.includes(course)
                    ? [...courseList, course]
                    : courseList
            ),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    return editing ? (
        <SemesterEditor
            changeEditing={changeEditing}
            semester={semester}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
        ></SemesterEditor>
    ) : (
        <Container className="Semester">
            <Col>
                <h5>{semester.name}</h5>
                <Row>Number of Courses: {semester.courses.length}</Row>
                <Row>Credits: {semester.credits}</Row>
                {/*Semester Displays Here*/}
                <Container className="semesterCourses" ref={drop}>
                    {courseList.map((course) => (
                        <CourseCard
                            key={course.code}
                            course={course}
                        ></CourseCard>
                    ))}
                </Container>
                <Button onClick={changeEditing} data-testid="edit-sem-button">
                    Edit Semester
                </Button>
            </Col>
        </Container>
    );
}
