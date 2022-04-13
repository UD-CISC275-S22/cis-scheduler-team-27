import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";

export function AddSemester({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const [season, setSeason] = useState<string>("");
    const [year, setYear] = useState<string>("");
    function saveChanges() {
        addSemester({
            name: season + " " + year.toString(),
            year: parseInt(year),
            season: season,
            courses: [],
            credits: 0
        });
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="AddSemester" as={Row}>
                        <Form.Label column sm={3}>
                            Semester Season:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={season}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setSeason(event.target.value)}
                            />
                        </Col>
                        <Form.Label column sm={3}>
                            Semester Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="seconary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
