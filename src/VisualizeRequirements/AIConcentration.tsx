/* eslint-disable indent */
import React, { useState } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Plan } from "../interfaces/Plan";
import { Button, Col, Container, Row } from "react-bootstrap";

export function AIConcentration({ plan }: { plan: Plan }): JSX.Element {
    const courseList = plan.semesters.map(
        (semester: Semester): Course[] => semester.courses
    );
    const merged = Array.prototype.concat.apply([], courseList);
    const courseCodes = merged.map((course: Course): string => course.code);

    const breadthA = merged.filter(
        (course: Course): boolean =>
            course.typ === "Creative Arts and Humanities"
    );

    const breadthB = merged.filter(
        (course: Course): boolean =>
            course.typ === "History and Cultural Change"
    );

    const breadthC = merged.filter(
        (course: Course): boolean =>
            course.typ === "Social and Behavioral Sciences"
    );

    const breadthD = merged.filter(
        (course: Course): boolean =>
            course.typ === "Math, Natural Sciences and Technology"
    );

    const RestrictedElective = merged.filter(
        (course: Course): boolean => course.typ === "Restrictive Elective"
    );

    const CISCElective = merged.filter(
        (course: Course): boolean => course.typ === "Concentration Elective"
    );

    const lab1 = merged.filter(
        (course: Course): boolean => course.typ === "Lab Seq 1"
    );

    const lab2 = merged.filter(
        (course: Course): boolean => course.typ === "Lab Seq 2"
    );

    const labSolo = merged.filter(
        (course: Course): boolean => course.typ === "Solo Lab"
    );

    const CISC108 = courseCodes.find(
        (course: string): boolean => course === "CISC 108"
    );
    const CISC181 = courseCodes.find(
        (course: string): boolean => course === "CISC 181"
    );
    const CISC210 = courseCodes.find(
        (course: string): boolean => course === "CISC 210"
    );
    const CISC220 = courseCodes.find(
        (course: string): boolean => course === "CISC 220"
    );
    const CISC260 = courseCodes.find(
        (course: string): boolean => course === "CISC 260"
    );
    const CISC275 = courseCodes.find(
        (course: string): boolean => course === "CISC 275"
    );
    const CISC303 = courseCodes.find(
        (course: string): boolean => course === "CISC 303"
    );
    const CISC320 = courseCodes.find(
        (course: string): boolean => course === "CISC 320"
    );
    const MATH210 = courseCodes.find(
        (course: string): boolean => course === "MATH 210"
    );
    const MATH241 = courseCodes.find(
        (course: string): boolean => course === "MATH 241"
    );
    const MATH205 = courseCodes.find(
        (course: string): boolean => course === "MATH 205"
    );
    const MATH350 = courseCodes.find(
        (course: string): boolean => course === "MATH 350"
    );
    const CISC355 = courseCodes.find(
        (course: string): boolean => course === "CISC 355"
    );
    const ENGL312 = courseCodes.find(
        (course: string): boolean => course === "ENGL 312"
    );
    const ENGL410 = courseCodes.find(
        (course: string): boolean => course === "ENGL 410"
    );
    /* Capstone */
    const CISC498 = courseCodes.find(
        (course: string): boolean => course === "CISC 498"
    );
    const CISC499 = courseCodes.find(
        (course: string): boolean => course === "CISC 499"
    );
    const UNIV401 = courseCodes.find(
        (course: string): boolean => course === "UNIV 401"
    );
    const UNIV402 = courseCodes.find(
        (course: string): boolean => course === "UNIV 402"
    );
    /* Lab Sciences */
    /*Major Requirements */
    const CISC361 = courseCodes.find(
        (course: string): boolean => course === "CISC 361"
    );
    const CISC372 = courseCodes.find(
        (course: string): boolean => course === "CISC 372"
    );
    const CISC304 = courseCodes.find(
        (course: string): boolean => course === "CISC 304"
    );
    const CISC481 = courseCodes.find(
        (course: string): boolean => course === "CISC 481"
    );
    const CISC483 = courseCodes.find(
        (course: string): boolean => course === "CISC 483"
    );
    const CISC484 = courseCodes.find(
        (course: string): boolean => course === "CISC 484"
    );
    const CISC442 = courseCodes.find(
        (course: string): boolean => course === "CISC 442"
    );

    const [visible, setVisible] = useState<boolean>(false);
    function showRequirements(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    showRequirements();
                }}
            >
                Display requirements
            </Button>
            {visible && (
                <Container>
                    <Row>
                        <Col>
                            <p>Core Requirements:</p>
                            {CISC108 !== undefined ? (
                                <div>
                                    <span>CISC108: ✔️</span>
                                </div>
                            ) : (
                                <span>CISC108: ❌</span>
                            )}
                            <div>
                                {CISC181 !== undefined ? (
                                    <div>
                                        <span>CISC181: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC181: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC210 !== undefined ? (
                                    <div>
                                        <span>CISC210: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC210: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC220 !== undefined ? (
                                    <div>
                                        <span>CISC220: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC220: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC260 !== undefined ? (
                                    <div>
                                        <span>CISC260: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC260: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC275 !== undefined ? (
                                    <div>
                                        <span>CISC275: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC275: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC303 !== undefined ? (
                                    <div>
                                        <span>CISC303: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC303: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC320 !== undefined ? (
                                    <div>
                                        <span>CISC320: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC320: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH210 !== undefined ? (
                                    <div>
                                        <span>MATH210: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH210: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH241 !== undefined ? (
                                    <div>
                                        <span>MATH241: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH241: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH205 !== undefined ||
                                MATH350 !== undefined ? (
                                    <div>
                                        <span>MATH205/350: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH250/350: ❌</span>
                                )}
                            </div>
                            <div>
                                {ENGL312 !== undefined ||
                                ENGL410 !== undefined ? (
                                    <div>
                                        <span>ENGL312/410: ✔️</span>
                                    </div>
                                ) : (
                                    <span>ENGL312/410: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC355 !== undefined ? (
                                    <div>
                                        <span>CISC355: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC355: ❌</span>
                                )}
                            </div>
                            <p></p>
                            <p> CISC Elective:</p>
                            <div>
                                {CISCElective.length > 0 ? (
                                    <div>
                                        <span>
                                            Any 3-4 Credit CISC300+ Course: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Any 3-4 Credit CISC300+ Course: ❌
                                    </span>
                                )}
                            </div>
                        </Col>

                        <Col>
                            <div>
                                <p>Capstone Requirements:</p>
                                {CISC498 !== undefined ? (
                                    <div>
                                        <span>CISC498: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC498: ❌</span>
                                )}
                                <div>
                                    {CISC499 !== undefined ? (
                                        <div>
                                            <span>CISC499: ✔️</span>
                                        </div>
                                    ) : (
                                        <span>CISC499: ❌</span>
                                    )}
                                </div>
                                <p>or</p>
                                <div>
                                    {UNIV401 !== undefined ? (
                                        <div>
                                            <span>UNIV401: ✔️</span>
                                        </div>
                                    ) : (
                                        <span>UNIV401: ❌</span>
                                    )}
                                    <div>
                                        {UNIV402 !== undefined ? (
                                            <div>
                                                <span>UNIV401: ✔️</span>
                                            </div>
                                        ) : (
                                            <span>UNIV402: ❌</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    {" "}
                                    <p></p>
                                    <p>Lab Science Requirement:</p>
                                    <div>
                                        {lab1.length >= 2 ||
                                        lab2.length >= 2 ||
                                        labSolo.length >= 1 ? (
                                            <div>
                                                <span>
                                                    One of 5 Sequences Taken: ✔️
                                                </span>
                                            </div>
                                        ) : (
                                            <span>
                                                One of 5 Sequences Taken: ❌
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>A.I. and Robotics Concentration Requirements:</p>
                            <div>
                                {CISC361 !== undefined ||
                                CISC372 !== undefined ? (
                                    <div>
                                        <span>CISC361/CISC372: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC361/CISC372: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC304 !== undefined ? (
                                    <div>
                                        <span>CISC304: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC304: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC442 !== undefined ? (
                                    <div>
                                        <span>CISC442: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC442: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC481 !== undefined ? (
                                    <div>
                                        <span>CISC481: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC481: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC483 !== undefined ? (
                                    <div>
                                        <span>CISC483: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC483: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC484 !== undefined ? (
                                    <div>
                                        <span>CISC484: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC484: ❌</span>
                                )}
                            </div>
                        </Col>
                        <Col>
                            <p> Breadth Requirements</p>
                            <div>
                                {breadthA.length > 0 ? (
                                    <div>
                                        <span>
                                            Creative Arts and Humanities: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Creative Arts and Humanities: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {breadthB.length > 0 ? (
                                    <div>
                                        <span>
                                            History and Cultural Change: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>History and Cultural Change: ❌</span>
                                )}
                            </div>
                            <div>
                                {breadthC.length > 0 ? (
                                    <div>
                                        <span>
                                            Social and Behavioral Sciences: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Social and Behavioral Sciences: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {breadthD.length > 0 ? (
                                    <div>
                                        <span>
                                            Math, Natural Sciences and
                                            Technology: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Math, Natural Sciences and Technology:
                                        ❌
                                    </span>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}
