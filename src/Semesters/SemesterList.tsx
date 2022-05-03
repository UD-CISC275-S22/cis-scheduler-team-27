import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
                    <DndProvider backend={HTML5Backend}>
                        <SemesterView
                            semester={semester}
                            deleteSemester={deleteSemester}
                            editSemester={editSemester}
                        ></SemesterView>
                    </DndProvider>
                </div>
            ))}
        </div>
    );
}
