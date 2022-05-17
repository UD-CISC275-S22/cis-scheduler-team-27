import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";
import { AIConcentration } from "../VisualizeRequirements/AIConcentration";
import { Bioinformatics } from "../VisualizeRequirements/Bioinformatics";
import { Cybersecurity } from "../VisualizeRequirements/Cybersecurity";
import { DataScience } from "../VisualizeRequirements/DataScience";
import { HighPerformanceComputing } from "../VisualizeRequirements/HighPerformanceComputing";
import { SystemsNetworks } from "../VisualizeRequirements/SystemsNetworks";
import { TheoryComputation } from "../VisualizeRequirements/TheoryComputation";
import { Traditional } from "../VisualizeRequirements/Traditional";
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
    const concentrations = [
        "AI Robotics",
        "Bioinformatics",
        "Cybersecurity",
        "Data Science",
        "High Performance Computing",
        "Systems and Networks",
        "Theory and Computation",
        "Traditional with Custom Focus Area"
    ];
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
                    {concentration === "Bioinformatics" && (
                        <Bioinformatics plan={plan}></Bioinformatics>
                    )}
                    {concentration === "Cybersecurity" && (
                        <Cybersecurity plan={plan}></Cybersecurity>
                    )}
                    {concentration === "Data Science" && (
                        <DataScience plan={plan}></DataScience>
                    )}
                    {concentration === "High Performance Computing" && (
                        <HighPerformanceComputing
                            plan={plan}
                        ></HighPerformanceComputing>
                    )}
                    {concentration === "Systems and Networks" && (
                        <SystemsNetworks plan={plan}></SystemsNetworks>
                    )}
                    {concentration === "Theory and Computation" && (
                        <TheoryComputation plan={plan}></TheoryComputation>
                    )}
                    {concentration === "Traditional with Custom Focus Area" && (
                        <Traditional plan={plan}></Traditional>
                    )}
                </div>
            ))}
        </div>
    );
}
