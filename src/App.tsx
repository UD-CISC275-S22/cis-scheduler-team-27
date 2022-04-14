import React from "react";
import { Planner } from "./Plan/Planner";
import "./App.css";
import { OpeningInstruction } from "./openingInstruction";
import { CourseView } from "./CourseView";
import { Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <OpeningInstruction></OpeningInstruction>
            </header>
            <p>Sara Noor, Riley Johnson, and Sydney Segear</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <CourseView></CourseView>
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
