import React, { useState } from "react";
import { Course } from "./interfaces/Course";
import "./course.css";
import { useDrop } from "react-dnd";
import { CourseCard } from "./CourseCard";

export function CoursePool(): JSX.Element {
    const [pool, setPool] = useState<Course[]>([]);
    const [, drop] = useDrop({
        accept: "course",
        drop: (course: Course) =>
            setPool((pool) =>
                !pool.includes(course) ? [...pool, course] : pool
            ),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    return (
        <div className="pool" ref={drop}>
            <h2>Course Pool</h2>
            {pool.map((course) => (
                <CourseCard key={course.code} course={course}></CourseCard>
            ))}
        </div>
    );
}
