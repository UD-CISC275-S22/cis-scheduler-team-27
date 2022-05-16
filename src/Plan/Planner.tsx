import React, { useState } from "react";
import { Plan } from "../interfaces/Plan";
import { PlanList } from "./PlanList";
import { PlanModal } from "./AddPlan";
import { Button } from "react-bootstrap";
import "../Course/course.css";

export function Planner(): JSX.Element {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function deletePlan(title: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.title !== title));
    }
    function editPlan(title: string, newPlan: Plan) {
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.title === title ? newPlan : plan)
            )
        );
    }
    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.title === newPlan.title
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }
    function clearPlans() {
        setPlans([]);
    }
    return (
        <div>
            <div className="planViewer">
                <div className="Plan">
                    <PlanList
                        plans={plans}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                    ></PlanList>
                </div>
                <div className="PlanView">
                    <Button onClick={handleShow} data-testid="AddPlanButton">
                        Add New Plan
                    </Button>
                    {plans.length !== 0 && (
                        <Button onClick={clearPlans} data-testid="clear-plans">
                            Clear Plans
                        </Button>
                    )}
                    <PlanModal
                        show={show}
                        handleClose={handleClose}
                        addPlan={addPlan}
                    ></PlanModal>
                </div>
            </div>
        </div>
    );
}
