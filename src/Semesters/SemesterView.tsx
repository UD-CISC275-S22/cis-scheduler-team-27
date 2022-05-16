import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { SemesterEditor } from "./SemesterEditor";
import "../Course/course.css";
import { Course } from "../interfaces/Course";
import { useDrop } from "react-dnd";
import { CourseCard } from "../Course/CourseCard";
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
    const addCourseToSem = (newCourse: Course) => {
        !semester.courses.includes(newCourse) &&
            editSemester(semester.name, {
                ...semester,
                courses: [...semester.courses, newCourse]
            });
    };
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    function editClasses(id: string) {
        editSemester(semester.name, {
            ...semester,
            courses: semester.courses.filter(
                (course: Course): boolean => id !== course.code
            )
        });
    }

    /*
    const [credits, setCredits] = useState<number>(0);
    function sumCredits() {
        {
            courseList.map((course) =>
                setCredits(credits + parseInt(course.credits))
            );
        }
    }
    */
    //const [courseList, setCourseList] = useState<Course[]>([]);
    function clearClasses() {
        editSemester(semester.name, {
            ...semester,
            courses: []
        });
    }
    const [, drop] = useDrop({
        accept: "course",
        drop: (course: Course) => addCourseToSem(course),
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
            courseList={semester.courses}
            editClasses={editClasses}
        ></SemesterEditor>
    ) : (
        <Container className="Semester">
            <Col>
                <h5>{semester.name}</h5>
                <Row>Number of Courses: {semester.courses.length}</Row>
                {/*Semester Displays Here*/}
                <div ref={drop} data-testid={semester.name}>
                    <h3>Courses</h3>
                    <div className="CourseDropArea"></div>
                    {semester.courses.map((course) => (
                        <CourseCard
                            key={course.code}
                            course={course}
                        ></CourseCard>
                    ))}
                    <div className="CourseDropArea"></div>
                </div>
                <Button onClick={changeEditing} data-testid="edit-sem-button">
                    Edit Semester
                </Button>
                {semester.courses.length !== 0 && (
                    <Button
                        onClick={clearClasses}
                        data-testid="clear-courses-button"
                    >
                        Clear Courses
                    </Button>
                )}
            </Col>
        </Container>
    );
}
