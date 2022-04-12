import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";

export function PlanModal({
    show,
    handleClose,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newPlan: Plan) => void;
}) {
    const [title, setTitle] = useState<string>("");
    function saveChanges() {
        addPlan({
            title: title,
            description: "",
            semesters: []
        });
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Title */}
                    <Form.Group controlId="AddPlan" as={Row}>
                        <Form.Label column sm={3}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
