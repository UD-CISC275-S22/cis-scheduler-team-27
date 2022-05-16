import React, { useState } from "react";
import { Col, Container, Button } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";
import { SemesterControl } from "../Semesters/SemesterControl";
import { PlanEditor } from "./PlanEditor";
import "./Plan.css";
import "../Course/course.css";
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
        <div>
            <Container>
                <Col>
                    <span>
                        <Col className="PlanView">
                            <h3>{plan.title}</h3>
                            <p> Description: {plan.description}</p>
                        </Col>
                        <Button
                            onClick={changeEditing}
                            data-testid="edit-plan-button"
                        >
                            Edit Plan
                        </Button>
                        {/*Semester Goes Here */}
                        <SemesterControl
                            plan={plan}
                            editPlan={editPlan}
                        ></SemesterControl>
                    </span>
                </Col>
            </Container>
        </div>
    );
}
