/* eslint-disable indent */
import React, { useState } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Plan } from "../interfaces/Plan";
import { Button, Col, Container, Row } from "react-bootstrap";

export function DataScience({ plan }: { plan: Plan }): JSX.Element {
    const courseList = plan.semesters.map(
        (semester: Semester): Course[] => semester.courses
    );
    const merged = Array.prototype.concat.apply([], courseList);
    const courseCodes = merged.map((course: Course): string => course.code);
    let totalCreds = 0;
    for (let i = 0; i < merged.length; i++) {
        totalCreds = totalCreds + parseInt(merged[i].credits);
    }
    const FYEcourses = merged.filter(
        (course: Course): boolean => course.typ === "First Year Experience"
    );

    const multiCultural = merged.filter(
        (course: Course): boolean => course.typ === "Multicultural Requirement"
    );
    let MCCredits = 0;
    for (let i = 0; i < multiCultural.length; i++) {
        MCCredits = MCCredits + parseInt(multiCultural[i].credits);
    }

    const DLECourses = merged.filter(
        (course: Course): boolean =>
            course.typ === "Discovery Learning Experience"
    );
    let DLECredits = 0;
    for (let i = 0; i < DLECourses.length; i++) {
        DLECredits = DLECredits + parseInt(DLECourses[i].credits);
    }

    const BreadthA = merged.filter(
        (course: Course): boolean =>
            course.typ === "Creative Arts and Humanities"
    );
    let BreadthACreds = 0;
    for (let i = 0; i < BreadthA.length; i++) {
        BreadthACreds = BreadthACreds + parseInt(BreadthA[i].credits);
    }
    const BreadthB = merged.filter(
        (course: Course): boolean =>
            course.typ === "History and Cultural Change"
    );
    let BreadthBCreds = 0;
    for (let i = 0; i < BreadthB.length; i++) {
        BreadthBCreds = BreadthBCreds + parseInt(BreadthB[i].credits);
    }
    const BreadthC = merged.filter(
        (course: Course): boolean =>
            course.typ === "Social and Behavioral Sciences"
    );
    let BreadthCCreds = 0;
    for (let i = 0; i < BreadthC.length; i++) {
        BreadthCCreds = BreadthCCreds + parseInt(BreadthC[i].credits);
    }
    const BreadthD = merged.filter(
        (course: Course): boolean =>
            course.typ === "Math, Natural Sciences and Technology"
    );
    let BreadthDCreds = 0;
    for (let i = 0; i < BreadthD.length; i++) {
        BreadthDCreds = BreadthDCreds + parseInt(BreadthD[i].credits);
    }
    const RestrictedElective = merged.filter(
        (course: Course): boolean => course.typ === "Restrictive Elective"
    );
    let restrictedCreds = 0;
    for (let i = 0; i < RestrictedElective.length; i++) {
        restrictedCreds =
            restrictedCreds + parseInt(RestrictedElective[i].credits);
    }
    const upperBreadthElectives = merged.filter(
        (course: Course): boolean => course.typ === "Upper Level Breadth"
    );
    let upperBreadthCreds = 0;
    for (let i = 0; i < upperBreadthElectives.length; i++) {
        upperBreadthCreds =
            upperBreadthCreds + parseInt(upperBreadthElectives[i].credits);
    }
    const conElective = merged.filter(
        (course: Course): boolean => course.typ === "Concentration Elective"
    );
    let conElectiveCreds = 0;
    for (let i = 0; i < conElective.length; i++) {
        conElectiveCreds = conElectiveCreds + parseInt(conElective[i].credits);
    }
    const CISCElective = merged.filter(
        (course: Course): boolean => course.typ === "CISC Elective"
    );
    let CISCElectiveCreds = 0;
    for (let i = 0; i < CISCElective.length; i++) {
        CISCElectiveCreds =
            CISCElectiveCreds + parseInt(CISCElective[i].credits);
    }
    const lab1 = merged.filter(
        (course: Course): boolean => course.typ === "Lab Sequence 1"
    );
    let lab1Creds = 0;
    for (let i = 0; i < lab1.length; i++) {
        lab1Creds = lab1Creds + parseInt(lab1[i].credits);
    }
    const lab2 = merged.filter(
        (course: Course): boolean => course.typ === "Lab Sequence 2"
    );
    let lab2Creds = 0;
    for (let i = 0; i < lab2.length; i++) {
        lab2Creds = lab2Creds + parseInt(lab2[i].credits);
    }
    const labSolo = merged.filter(
        (course: Course): boolean => course.typ === "Solo Lab"
    );
    let labSoloCreds = 0;
    for (let i = 0; i < labSolo.length; i++) {
        labSoloCreds = labSoloCreds + parseInt(labSolo[i].credits);
    }

    const ENGL110 = courseCodes.find(
        (course: string): boolean => course === "ENGL 110"
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
    const CISC372 = courseCodes.find(
        (course: string): boolean => course === "CISC 372"
    );
    const CISC304 = courseCodes.find(
        (course: string): boolean => course === "CISC 304"
    );
    const CISC437 = courseCodes.find(
        (course: string): boolean => course === "CISC 437"
    );
    const CISC481 = courseCodes.find(
        (course: string): boolean => course === "CISC 481"
    );
    const MATH242 = courseCodes.find(
        (course: string): boolean => course === "MATH 242"
    );
    const MATH243 = courseCodes.find(
        (course: string): boolean => course === "MATH 243"
    );
    const MATH349 = courseCodes.find(
        (course: string): boolean => course === "MATH 349"
    );
    const [visible, setVisible] = useState<boolean>(false);
    function showRequirements(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button
                data-testid="Data-Requirements"
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
                            <div>Core Requirements:</div>
                            <div>
                                {ENGL110 !== undefined ? (
                                    <div>
                                        <span>ENGL110 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>ENGL110 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC108 !== undefined ? (
                                    <div>
                                        <span>CISC108 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC108 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC181 !== undefined ? (
                                    <div>
                                        <span>CISC181 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC181 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC210 !== undefined ? (
                                    <div>
                                        <span>CISC210 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC210 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC220 !== undefined ? (
                                    <div>
                                        <span>CISC220 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC220 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC260 !== undefined ? (
                                    <div>
                                        <span>CISC260 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC260 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC275 !== undefined ? (
                                    <div>
                                        <span>CISC275 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC275 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC303 !== undefined ? (
                                    <div>
                                        <span>CISC303 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC303 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC320 !== undefined ? (
                                    <div>
                                        <span>CISC320 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC320 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH210 !== undefined ? (
                                    <div>
                                        <span>MATH210 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH210 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH241 !== undefined ? (
                                    <div>
                                        <span>MATH241 4/4: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH241 0/4: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH205 !== undefined ||
                                MATH350 !== undefined ? (
                                    <div>
                                        <span>MATH205/350 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH205/350 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {ENGL312 !== undefined ||
                                ENGL410 !== undefined ? (
                                    <div>
                                        <span>ENGL312/410 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>ENGL312/410 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC355 !== undefined ? (
                                    <div>
                                        <span>CISC355 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC355 0/3: ❌</span>
                                )}
                            </div>
                            <p></p>
                        </Col>

                        <Col>
                            <div>
                                <div>Capstone Requirements:</div>
                                {CISC498 !== undefined ? (
                                    <div>
                                        <span>CISC498 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC498 0/3: ❌</span>
                                )}
                                <div>
                                    {CISC499 !== undefined ? (
                                        <div>
                                            <span>CISC499 3/3: ✔️</span>
                                        </div>
                                    ) : (
                                        <span>CISC499 0/3: ❌</span>
                                    )}
                                </div>
                                <div>or</div>
                                <div>
                                    {UNIV401 !== undefined ? (
                                        <div>
                                            <span>UNIV401 3/3: ✔️</span>
                                        </div>
                                    ) : (
                                        <span>UNIV401 0/3: ❌</span>
                                    )}
                                    <div>
                                        {UNIV402 !== undefined ? (
                                            <div>
                                                <span>UNIV402 3/3: ✔️</span>
                                            </div>
                                        ) : (
                                            <span>UNIV402 0/3: ❌</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    {" "}
                                    <p></p>
                                    <div>
                                        {FYEcourses.length > 0 ? (
                                            <div>
                                                <span>
                                                    First Year Experience 1/1:
                                                    ✔️
                                                </span>
                                            </div>
                                        ) : (
                                            <span>
                                                First Year Experience 0/1: ❌
                                            </span>
                                        )}
                                    </div>
                                    <p></p>
                                    <div>
                                        {MCCredits >= 3 ? (
                                            <div>
                                                <span>
                                                    Multicultural Requirement
                                                    3/3: ✔️
                                                </span>
                                            </div>
                                        ) : (
                                            <span>
                                                Multicultural Requirement{" "}
                                                {MCCredits}/3: ❌
                                            </span>
                                        )}
                                    </div>
                                    <p></p>
                                    <div>
                                        {lab1.length > 0 &&
                                        lab2.length > 0 &&
                                        lab1Creds + lab2Creds + labSoloCreds >=
                                            8 ? (
                                            <div>
                                                <span>
                                                    Lab Sciences 8/8: ✔️
                                                </span>
                                            </div>
                                        ) : (
                                            <span>
                                                Lab Sciences{" "}
                                                {lab1Creds +
                                                    lab2Creds +
                                                    labSoloCreds}
                                                /8: ❌
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div> Breadth Requirements:</div>
                            <div>
                                {BreadthACreds >= 3 ? (
                                    <div>
                                        <span>
                                            Creative Arts and Humanities 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Creative Arts and Humanities{" "}
                                        {BreadthACreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {BreadthBCreds >= 3 ? (
                                    <div>
                                        <span>
                                            History and Cultural Change 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        History and Cultural Change{" "}
                                        {BreadthBCreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {BreadthCCreds >= 3 ? (
                                    <div>
                                        <span>
                                            Social and Behavioral Sciences 3/3:
                                            ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Social and Behavioral Sciences{" "}
                                        {BreadthCCreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {BreadthDCreds >= 3 ? (
                                    <div>
                                        <span>
                                            Math, Natural Sciences and
                                            Technology 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Math, Natural Sciences and Technology{" "}
                                        {BreadthDCreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {upperBreadthCreds >= 9 ? (
                                    <div>
                                        <span>
                                            Upper Level Breadths 9/9: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Upper Level Breadths {upperBreadthCreds}
                                        /9: ❌
                                    </span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {DLECredits >= 3 ? (
                                    <div>
                                        <span>
                                            Discovery Learning Experience 3/3:
                                            ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Discovery Learning Experience{" "}
                                        {DLECredits}
                                        /3: ❌
                                    </span>
                                )}
                            </div>
                        </Col>
                        <Col>
                            <div>Concentration Requirements:</div>
                            <div>
                                {CISC304 !== undefined ? (
                                    <div>
                                        <span>CISC304 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC304 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC372 !== undefined ? (
                                    <div>
                                        <span>CISC372 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC372 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC437 !== undefined ? (
                                    <div>
                                        <span>CISC437 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC437 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {CISC481 !== undefined ? (
                                    <div>
                                        <span>CISC481 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC481 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH205 !== undefined ? (
                                    <div>
                                        <span>MATH205 4/4: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH205 0/4: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH242 !== undefined ? (
                                    <div>
                                        <span>MATH242 4/4: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH242 0/4: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH243 !== undefined ? (
                                    <div>
                                        <span>MATH243 4/4: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH243 0/4: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH349 !== undefined ? (
                                    <div>
                                        <span>MATH349 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH349 0/3: ❌</span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {conElectiveCreds >= 6 ? (
                                    <div>
                                        <span>
                                            Advanced Math Requirement and
                                            Advance Data Science Requirement
                                            6/6: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Advanced Math Requirement and Advance
                                        Data Science Requirement{" "}
                                        {conElectiveCreds}
                                        /6: ❌
                                    </span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {restrictedCreds >= 3 ? (
                                    <div>
                                        <span>
                                            Restricted Electives 3 /3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Restricted Electives {restrictedCreds}
                                        /3: ❌
                                    </span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {CISCElectiveCreds >= 3 ? (
                                    <div>
                                        <span>CISC Elective 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>
                                        CISC Elective {CISCElectiveCreds}
                                        /3: ❌
                                    </span>
                                )}
                            </div>
                            <p></p>
                        </Col>
                    </Row>
                    <p></p>
                    <Row>
                        <div>
                            {totalCreds >= 124 ? (
                                <div>
                                    <h5>Total Credits 124/124: ✔️</h5>
                                </div>
                            ) : (
                                <h5>
                                    Total Credits {totalCreds}
                                    /124: ❌
                                </h5>
                            )}
                        </div>
                    </Row>
                </Container>
            )}
        </div>
    );
}
