import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/Course";

export function CourseEditor({
    code,
    name,
    descr,
    credits,
    preReqs,
    restrict,
    breadth,
    editCourse,
    changeEditMode
}: {
    code: string;
    name: string;
    credits: string;
    descr: string;
    preReqs: string;
    restrict: string;
    breadth: string;
    editCourse: (id: string, newCourse: Course) => void;
    changeEditMode: () => void;
}): JSX.Element {
    const [newCode, setNewCode] = useState<string>(code);
    const [newName, setNewName] = useState<string>(name);
    const [newCreds, setNewCreds] = useState<string>(credits);
    const [chosenReq, setChosenReq] = useState<string[]>([]);

    function save() {
        if (code) {
            editCourse(code, {
                code: newCode,
                name: newName,
                descr: descr,
                credits: newCreds,
                preReq: preReqs,
                restrict: restrict,
                breadth: breadth,
                typ: chosenReq.join(",   ")
            });
        }
        changeEditMode();
    }
    function cancel() {
        changeEditMode();
    }
    function updateReqs(event: React.ChangeEvent<HTMLInputElement>) {
        const req = event.target.value;
        if (chosenReq.includes(req)) {
            setChosenReq(chosenReq.filter((e) => e !== req));
        } else {
            setChosenReq([...chosenReq, req]);
        }
    }
    return (
        <div>
            <h2>Edit Course</h2>
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formClassName" as={Row}>
                            <Form.Label column sm={2}>
                                Name:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={newName}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewName(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formClassCode" as={Row}>
                            <Form.Label column sm={2}>
                                Course Code:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={newCode}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewCode(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlID="formCourseCredits" as={Row}>
                            <Form.Label column sm={2}>
                                Course Credits:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={newCreds}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewCreds(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Button
                            onClick={save}
                            variant="success"
                            className="me-4"
                            data-testid="save-course-button"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={cancel}
                            variant="warning"
                            className="me-5"
                            data-testid="cancel-course-button"
                        >
                            Cancel
                        </Button>
                    </Col>
                    <p>Check Which Requirement This Fills For You</p>
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Creative"
                        label="Creative Arts and Humanities"
                        name="Reqs"
                        value="Creative Arts and Humanities"
                        checked={chosenReq.includes(
                            "Creative Arts and Humanities"
                        )}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-History"
                        label="History and Cultural Change"
                        name="Reqs"
                        value="History and Cultural Change"
                        checked={chosenReq.includes(
                            "History and Cultural Change"
                        )}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Social"
                        label="Social and Behavioral Sciences"
                        name="Reqs"
                        value="Social and Behavioral Sciences"
                        checked={chosenReq.includes(
                            "Social and Behavioral Sciences"
                        )}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Math"
                        label="Math, Natural Sciences and Technology"
                        name="Reqs"
                        value="Math, Natural Sciences and Technology"
                        checked={chosenReq.includes(
                            "Math, Natural Sciences and Technology"
                        )}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Restrictive"
                        label="Restrictive Elective"
                        name="Reqs"
                        value="Restrictive Elective"
                        checked={chosenReq.includes("Restrictive Elective")}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Concentration"
                        label="Concentration Elective"
                        name="Reqs"
                        value="Concentration Elective"
                        checked={chosenReq.includes("Concentration Elective")}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-LAB1"
                        label="Lab Seq 1"
                        name="Reqs"
                        value="Lab Seq 1"
                        checked={chosenReq.includes("Lab Seq 1")}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-LAB2"
                        label="Lab Seq 2"
                        name="Reqs"
                        value="Lab Seq 2"
                        checked={chosenReq.includes("Lab Seq 2")}
                        onChange={updateReqs}
                    />
                    <Form.Check
                        type="checkbox"
                        id="Req-Check-Solo"
                        label="Solo Lab"
                        name="Reqs"
                        value="Solo Lab"
                        checked={chosenReq.includes("Solo Lab")}
                        onChange={updateReqs}
                    />
                </Row>
            </Container>
        </div>
    );
}
