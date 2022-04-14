import React, { useState } from "react";
import { Col, Container, Button } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";
import { SemesterControl } from "../Semesters/SemesterControl";
import { PlanEditor } from "./PlanEditor";
export function PlanView({
    plan,
    deletePlan,
    editPlan
}: {
    plan: Plan;
    deletePlan: (title: string) => void;
    editPlan: (title: string, newPlan: Plan) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
        ></PlanEditor>
    ) : (
        <Container>
            <Col>
                <span>
                    <Col>
                        <h3>{plan.title}</h3>
                        <p> Description: {plan.description}</p>
                    </Col>
                    <Button onClick={changeEditing}>Edit Plan</Button>
                    {/*Semester Goes Here */}
                    <SemesterControl></SemesterControl>
                </span>
            </Col>
        </Container>
    );
}
