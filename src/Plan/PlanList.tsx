import React from "react";
import { Plan } from "../interfaces/Plan";
import { PlanView } from "./PlanView";

export function PlanList({
    plans,
    deletePlan,
    editPlan
}: {
    plans: Plan[];
    deletePlan: (title: string) => void;
    editPlan: (title: string, newPlan: Plan) => void;
}): JSX.Element {
    return (
        <div>
            {plans.map((plan: Plan) => (
                <div key={plan.title} className="bg-light border m-2 p-2">
                    <PlanView
                        plan={plan}
                        deletePlan={deletePlan}
                        editPlan={editPlan}
                    ></PlanView>
                </div>
            ))}
        </div>
    );
}
