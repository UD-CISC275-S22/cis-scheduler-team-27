import React, { useState } from "react";
import { Plan } from "../interfaces/Plan";
import { PlanList } from "./PlanList";
import { PlanModal } from "./AddPlan";
import { Button } from "react-bootstrap";
let blank_plan: Plan;
export function Planner(): JSX.Element {
    const [plans, setPlan] = useState<Plan[]>([blank_plan]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function deletePlan(title: string) {
        setPlan(plans.filter((plan: Plan): boolean => plan.title !== title));
    }
    function editPlan(title: string, newPlan: Plan) {
        setPlan(
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
            setPlan([...plans, newPlan]);
        }
    }
    return (
        <div>
            <div>
                <PlanList
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                ></PlanList>
            </div>
            <div>
                <Button onClick={handleShow}>Add New Plan</Button>
                <PlanModal
                    show={show}
                    handleClose={handleClose}
                    addPlan={addPlan}
                ></PlanModal>
            </div>
        </div>
    );
}
