import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { CourseCard } from "../Course/CourseCard";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester,
    courseList,
    editClasses
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (title: string, newSemester: Semester) => void;
    deleteSemester: (title: string) => void;
    editClasses: (id: string, courseList: Course[]) => void;
    courseList: Course[];
}): JSX.Element {
    const [year, setYear] = useState<string>(semester.year);
    const [season, setSeason] = useState<string>(semester.season);
    /*
    const [credits, setCredits] = useState<number>(semester.credits);
    
    function sumCredits() {
        semester.courses.map((course: Course) =>
            setCredits(credits + course.courseCredits)
        );
    }
    */
    function save() {
        editSemester(semester.name, {
            ...semester,
            year: year,
            season: season,
            courses: semester.courses
        });
        changeEditing();
    }

    return (
        <Container>
            <Col>
                <Form.Group controlId="semesterSeason">
                    <Form.Label>Season:</Form.Label>
                    <Col>
                        <Form.Control
                            value={season}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setSeason(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="semesterYear">
                    <Form.Label>Year:</Form.Label>
                    <Col>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Col>
            <Col>
                <h5>{semester.season + " " + semester.year}</h5>
                <Row>Number of Courses: {courseList.length}</Row>
                {/*Semester Displays Here*/}
                <div>
                    <h3>Courses</h3>
                    <div></div>
                    {courseList.map((course) => (
                        <div key={course.code}>
                            <CourseCard
                                key={course.code}
                                course={course}
                            ></CourseCard>
                            <Button
                                onClick={() =>
                                    editClasses(course.code, courseList)
                                }
                                data-testid="delete-course-from-sem"
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </div>
                <div></div>
                <Button onClick={changeEditing} data-testid="edit-sem-button">
                    Edit Semester
                </Button>
                <Button onClick={save} data-testid="edit-sem-save-button">
                    Save
                </Button>
                <Button
                    onClick={() => deleteSemester(semester.name)}
                    data-testid="delete-sem-button"
                >
                    Delete
                </Button>
            </Col>
        </Container>
    );
}
