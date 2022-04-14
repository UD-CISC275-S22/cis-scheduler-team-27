import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { AddSemester } from "./AddSemester";
import { SemesterList } from "./SemesterList";
const blank_semester: Semester = {
    name: "Semester 1",
    year: 0,
    season: "",
    courses: [],
    credits: 0
};
const INITIAL_SEMESTERS = [blank_semester];
export function SemesterControl(): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(INITIAL_SEMESTERS);
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
                <Button onClick={handleShow}>Add New Semester</Button>
                <AddSemester
                    show={show}
                    handleClose={handleClose}
                    addSemester={addSemester}
                ></AddSemester>
            </div>
        </div>
    );
}
