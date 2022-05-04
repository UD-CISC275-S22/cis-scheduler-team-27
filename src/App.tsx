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
            <header className="Banner-header">
                <img
                    src="https://commerce.cashnet.com/cashnetg/logos/UDEL_PROD/4HASC18922Cashnet-UDHeader.png"
                    alt="University of Delaware Banner"
                />
            </header>
            <header className="App-header">
                <OpeningInstruction></OpeningInstruction>
                <p>Sara Noor, Riley Johnson, and Sydney Segear</p>
            </header>
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
