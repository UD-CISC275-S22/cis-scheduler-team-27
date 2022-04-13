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
    const [name, setName] = useState<string>("");
    function saveChanges() {
        addSemester({
            name: name,
            year: 0,
            season: "",
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
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
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
