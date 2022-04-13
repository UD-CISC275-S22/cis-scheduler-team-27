import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { SemesterEditor } from "./SemesterEditor";

export function SemesterView({
    semester,
    deleteSemester,
    editSemester
}: {
    semester: Semester;
    deleteSemester: (title: string) => void;
    editSemester: (title: string, newSemester: Semester) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <SemesterEditor
            changeEditing={changeEditing}
            semester={semester}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
        ></SemesterEditor>
    ) : (
        <Container>
            <Col>
                <h3>{semester.name}</h3>
                <Row>Number of Courses: {semester.courses.length}</Row>
                <Row>Credits: {semester.credits}</Row>
                <Row>Year: {semester.year}</Row>
                <Row>Season: {semester.season}</Row>
                {/*Semester Displays Here*/}
                <Button onClick={changeEditing}>Edit Plan</Button>
            </Col>
        </Container>
    );
}
