import React, { useState } from "react";
import { Course } from "../interfaces/Course";
import "./course.css";
import { useDrop } from "react-dnd";
import { CourseCard } from "./CourseCard";
import { Button } from "react-bootstrap";

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
    function ResetCourses() {
        setPool([]);
    }
    return (
        <div>
            <div className="pool" ref={drop} data-testid="course-pool">
                <h2>Course Pool</h2>
                {pool.map((course) => (
                    <CourseCard key={course.code} course={course}></CourseCard>
                ))}
            </div>
            <div>
                <Button onClick={ResetCourses} data-testid="reset-pool-button">
                    Reset Course Pool
                </Button>
            </div>
        </div>
    );
}
