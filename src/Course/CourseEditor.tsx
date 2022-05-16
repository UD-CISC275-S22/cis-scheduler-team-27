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
    typ,
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
    typ: string;
    editCourse: (id: string, newCourse: Course) => void;
    changeEditMode: () => void;
}): JSX.Element {
    const [newCode, setNewCode] = useState<string>(code);
    const [newName, setNewName] = useState<string>(name);
    const [newCreds, setNewCreds] = useState<string>(credits);

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
                typ: typ
            });
        }
        changeEditMode();
    }
    function cancel() {
        changeEditMode();
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
                </Row>
            </Container>
        </div>
    );
}
