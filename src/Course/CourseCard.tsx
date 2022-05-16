import React from "react";
import { useDrag } from "react-dnd";
import { Course } from "../interfaces/Course";

export const CourseCard = ({ course }: { course: Course }) => {
    const [, drag] = useDrag({
        type: "course",
        item: course,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div className="boxed" ref={drag}>
            <span>
                <h5>{course.name}</h5>
                <p>Course Code: {course.code}</p>
                <p>Credits: {course.credits}</p>
                <p>Required PreReqs: {course.preReq}</p>
                <p>Chosen Requirement Fufillment: {course.typ.split("  ")}</p>
            </span>
        </div>
    );
};
