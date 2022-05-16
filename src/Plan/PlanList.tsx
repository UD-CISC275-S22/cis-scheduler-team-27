import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";
import { AIConcentration } from "../VisualizeRequirements/AIConcentration";
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
    const concentrations = ["AI Robotics", "Bioinformatics", "Data Science"];
    const [concentration, setConcentration] = useState<string>(
        concentrations[0]
    );
    function updateConcentration(event: React.ChangeEvent<HTMLSelectElement>) {
        setConcentration(event.target.value);
    }
    return (
        <div>
            {plans.map((plan: Plan) => (
                <div key={plan.title} className="bg-light border m-2 p-2">
                    <div>
                        <Form.Group controlId="favoriteColors">
                            <Form.Label>Select Concentration</Form.Label>
                            <Form.Select
                                data-testid="concentration-dropdown"
                                value={concentration}
                                onChange={updateConcentration}
                            >
                                {concentrations.map((concentration: string) => (
                                    <option
                                        key={concentration}
                                        value={concentration}
                                    >
                                        {concentration}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <PlanView
                        plan={plan}
                        deletePlan={deletePlan}
                        editPlan={editPlan}
                    ></PlanView>
                    <div></div>
                    {concentration === "AI Robotics" && (
                        <AIConcentration plan={plan}></AIConcentration>
                    )}
                </div>
            ))}
        </div>
    );
}
