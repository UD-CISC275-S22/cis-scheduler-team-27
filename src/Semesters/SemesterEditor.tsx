import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (title: string, newSemester: Semester) => void;
    deleteSemester: (title: string) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(semester.name);
    const [year, setYear] = useState<number>(semester.year);
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
            name: name,
            year: year,
            season: season
        });
        changeEditing();
    }
    return (
        <Container>
            <Col>
                <Form.Group controlId="semesterName">
                    <Form.Label>Name:</Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
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
                            ) => setYear(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Col>
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
            <Button onClick={save}>Save</Button>
            <Button onClick={() => deleteSemester(semester.name)}>
                Delete
            </Button>
        </Container>
    );
}
