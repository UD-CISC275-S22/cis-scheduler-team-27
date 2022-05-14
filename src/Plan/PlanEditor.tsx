import React, { useState } from "react";
import { Button, Container, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (title: string, newPlan: Plan) => void;
    deletePlan: (title: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(plan.title);
    const [desc, setDescription] = useState<string>(plan.description);

    function save() {
        editPlan(plan.title, {
            ...plan,
            title: title,
            description: desc,
            semesters: plan.semesters
        });
        changeEditing();
    }
    return (
        <Container>
            <Col>
                <Form.Group controlId="planName">
                    <Form.Label>Name:</Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="planDesc">
                    <Form.Label>Description:</Form.Label>
                    <Col>
                        <Form.Control
                            value={desc}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Col>
            <Button onClick={save}>Save</Button>
            <Button onClick={() => deletePlan(plan.title)}>Delete</Button>
        </Container>
    );
}
