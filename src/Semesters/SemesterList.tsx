import React from "react";
import { Semester } from "../interfaces/Semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    deleteSemester,
    editSemester
}: {
    semesters: Semester[];
    deleteSemester: (name: string) => void;
    editSemester: (name: string, newSemester: Semester) => void;
}): JSX.Element {
    return (
        <div>
            {semesters.map((semester: Semester) => (
                <div key={semester.name} className="bg-light border m-2 p-2">
                    <SemesterView
                        semester={semester}
                        deleteSemester={deleteSemester}
                        editSemester={editSemester}
                    ></SemesterView>
                </div>
            ))}
        </div>
    );
}
