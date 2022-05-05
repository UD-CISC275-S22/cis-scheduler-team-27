import React from "react";
import { Planner } from "./Plan/Planner";
import "./App.css";
import { OpeningInstruction } from "./openingInstruction";
import { CourseView } from "./CourseView";
import { Col, Container, Row } from "react-bootstrap";
import { CoursePool } from "./CoursePool";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <OpeningInstruction></OpeningInstruction>
            </header>
            <p>Sara Noor, Riley Johnson, and Sydney Segear</p>
            <div>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <CourseView></CourseView>
                            <DndProvider backend={HTML5Backend}>
                                <CoursePool></CoursePool>
                            </DndProvider>
                        </Col>
                        <Col>
                            <Planner></Planner>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default App;
