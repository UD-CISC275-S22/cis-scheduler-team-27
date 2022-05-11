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
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    function editClasses(id: string, courseList: Course[]) {
        setCourseList(
            courseList.filter((course: Course): boolean => id !== course.code)
        );
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
            courseList={courseList}
            editClasses={editClasses}
        ></SemesterEditor>
    ) : (
        <Container className="Semester">
            <Col>
                <h5>{semester.name}</h5>
                <Row>Number of Courses: {courseList.length}</Row>
                {/*Semester Displays Here*/}
                <div ref={drop}>
                    <h3>Courses</h3>
                    <div></div>
                    {courseList.map((course) => (
                        <CourseCard
                            key={course.code}
                            course={course}
                        ></CourseCard>
                    ))}
                </div>
                <Button onClick={changeEditing} data-testid="edit-sem-button">
                    Edit Semester
                </Button>
            </Col>
        </Container>
    );
}
