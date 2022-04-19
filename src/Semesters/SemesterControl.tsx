import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { AddSemester } from "./AddSemester";
import { SemesterList } from "./SemesterList";

export function SemesterControl(): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function deleteSemester(name: string) {
        setSemesters(
            semesters?.filter(
                (semester: Semester): boolean => semester.name != name
            )
        );
    }
    function editSemester(name: string, newSemester: Semester) {
        setSemesters(
            semesters?.map((semester: Semester) =>
                semester.name === name ? newSemester : semester
            )
        );
    }
    function addSemester(newSemester: Semester) {
        const existing = semesters?.find(
            (semester: Semester): boolean => semester.name === newSemester.name
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }
    function clearSemesters() {
        setSemesters([]);
    }
    return (
        <div>
            <h3>Add Semesters</h3>
            <div>
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
            </div>
            <div>
                <Button onClick={handleShow} data-testid="AddSemButton">
                    Add New Semester
                </Button>
                {semesters.length !== 0 && (
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
