import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";
import { Semester } from "../interfaces/Semester";
import { AddSemester } from "./AddSemester";
import { SemesterList } from "./SemesterList";

export function SemesterControl({
    plan,
    editPlan
}: {
    plan: Plan;
    editPlan: (planName: string, newPlan: Plan) => void;
}): JSX.Element {
    //const [semesters, setSemesters] = useState<Semester[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function deleteSemester(name: string) {
        editPlan(plan.title, {
            ...plan,
            semesters: plan.semesters?.filter(
                (semester: Semester): boolean => semester.name != name
            )
        });
    }
    function editSemester(name: string, newSemester: Semester) {
        editPlan(plan.title, {
            ...plan,
            semesters: plan.semesters?.map((semester: Semester) =>
                semester.name === name ? newSemester : semester
            )
        });
    }
    function addSemester(newSemester: Semester) {
        const existing = plan.semesters?.find(
            (semester: Semester): boolean => semester.name === newSemester.name
        );
        if (existing === undefined) {
            editPlan(plan.title, {
                ...plan,
                semesters: [...plan.semesters, newSemester]
            });
        }
    }

    function clearSemesters() {
        editPlan(plan.title, {
            ...plan,
            semesters: []
        });
    }
    return (
        <div>
            <div>
                <SemesterList
                    semesters={plan.semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
            </div>
            <div>
                <Button onClick={handleShow} data-testid="AddSemButton">
                    Add New Semester
                </Button>
                {plan.semesters.length !== 0 && (
                    <Button
                        onClick={clearSemesters}
                        data-testid="clear-all-sems"
                    >
                        Clear Semesters
                    </Button>
                )}
                <AddSemester
                    show={show}
                    handleClose={handleClose}
                    addSemester={addSemester}
                ></AddSemester>
            </div>
        </div>
    );
}
