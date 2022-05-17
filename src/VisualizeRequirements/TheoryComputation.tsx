/* eslint-disable indent */
import React, { useState } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Plan } from "../interfaces/Plan";
import { Button, Col, Container, Row } from "react-bootstrap";

export function TheoryComputation({ plan }: { plan: Plan }): JSX.Element {
    const courseList = plan.semesters.map(
        (semester: Semester): Course[] => semester.courses
    );
    const merged = Array.prototype.concat.apply([], courseList);
    const courseCodes = merged.map((course: Course): string => course.code);

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

    const breadthA = merged.filter(
        (course: Course): boolean =>
            course.typ === "Creative Arts and Humanities"
    );
    let breadthACreds = 0;
    for (let i = 0; i < breadthA.length; i++) {
        breadthACreds = breadthACreds + parseInt(breadthA[i].credits);
    }
    const breadthB = merged.filter(
        (course: Course): boolean =>
            course.typ === "History and Cultural Change"
    );
    let breadthBCreds = 0;
    for (let i = 0; i < breadthB.length; i++) {
        breadthBCreds = breadthBCreds + parseInt(breadthB[i].credits);
    }
    const breadthC = merged.filter(
        (course: Course): boolean =>
            course.typ === "Social and Behavioral Sciences"
    );
    let breadthCCreds = 0;
    for (let i = 0; i < breadthC.length; i++) {
        breadthCCreds = breadthCCreds + parseInt(breadthC[i].credits);
    }
    const breadthD = merged.filter(
        (course: Course): boolean =>
            course.typ === "Math, Natural Sciences and Technology"
    );
    let breadthDCreds = 0;
    for (let i = 0; i < breadthD.length; i++) {
        breadthDCreds = breadthDCreds + parseInt(breadthD[i].credits);
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
        (course: Course): boolean => course.typ === "Upper Level BREADTH"
    );
    let upperBreadthCreds = 0;
    for (let i = 0; i < upperBreadthElectives.length; i++) {
        upperBreadthCreds =
            upperBreadthCreds + parseInt(upperBreadthElectives[i].credits);
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
    const CISC304 = courseCodes.find(
        (course: string): boolean => course === "CISC 304"
    );
    const CISC401 = courseCodes.find(
        (course: string): boolean => course === "CISC 401"
    );
    const MATH242 = courseCodes.find(
        (course: string): boolean => course === "CISC 242"
    );
    const MATH349 = courseCodes.find(
        (course: string): boolean => course === "CISC 349"
    );
    const CISC404 = courseCodes.find(
        (course: string): boolean => course === "CISC 404"
    );
    const MATH245 = courseCodes.find(
        (course: string): boolean => course === "MATH 245"
    );
    const MATH315 = courseCodes.find(
        (course: string): boolean => course === "MATH 315"
    );
    const MATH451 = courseCodes.find(
        (course: string): boolean => course === "MATH 451"
    );
    const MATH243 = courseCodes.find(
        (course: string): boolean => course === "MATH 243"
    );
    const MATH302 = courseCodes.find(
        (course: string): boolean => course === "MATH 302"
    );
    const MATH535 = courseCodes.find(
        (course: string): boolean => course === "MATH 535"
    );
    const MATH426 = courseCodes.find(
        (course: string): boolean => course === "MATH 426"
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
                                                    MultiCultural Requirement
                                                    3/3: ✔️
                                                </span>
                                            </div>
                                        ) : (
                                            <span>
                                                MultiCultural Requirement{" "}
                                                {MCCredits}/3: ❌
                                            </span>
                                        )}
                                    </div>
                                    <p></p>
                                    <div>
                                        {lab1.length >= 2 ||
                                        lab2.length >= 2 ||
                                        labSolo.length >= 1 ? (
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
                            <div> BREADTH Requirements:</div>
                            <div>
                                {breadthACreds >= 3 ? (
                                    <div>
                                        <span>
                                            Creative Arts and Humanities 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Creative Arts and Humanities{" "}
                                        {breadthACreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {breadthBCreds >= 3 ? (
                                    <div>
                                        <span>
                                            History and Cultural Change 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        History and Cultural Change{" "}
                                        {breadthBCreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {breadthCCreds >= 3 ? (
                                    <div>
                                        <span>
                                            Social and Behavioral Sciences 3/3:
                                            ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Social and Behavioral Sciences{" "}
                                        {breadthCCreds}/3: ❌
                                    </span>
                                )}
                            </div>
                            <div>
                                {breadthDCreds >= 3 ? (
                                    <div>
                                        <span>
                                            Math, Natural Sciences and
                                            Technology 3/3: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Math, Natural Sciences and Technology{" "}
                                        {breadthDCreds}/3: ❌
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
                                {CISC401 !== undefined ? (
                                    <div>
                                        <span>CISC401 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC401 0/3: ❌</span>
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
                                {MATH349 !== undefined ? (
                                    <div>
                                        <span>MATH349 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH349 0/3: ❌</span>
                                )}
                            </div>
                            <p></p>
                            <div>Discrete Track</div>
                            <div>
                                {CISC404 !== undefined ? (
                                    <div>
                                        <span>CISC404 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>CISC404 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH245 !== undefined ? (
                                    <div>
                                        <span>MATH245 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH245 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH315 !== undefined ? (
                                    <div>
                                        <span>MATH315 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH315 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH451 !== undefined ? (
                                    <div>
                                        <span>MATH451 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH451 0/3: ❌</span>
                                )}
                            </div>
                            <div>or</div>
                            <div>Continuous Track</div>
                            <div>
                                {MATH243 !== undefined ? (
                                    <div>
                                        <span>MATH243 3/4: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH243 0/4: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH302 !== undefined ? (
                                    <div>
                                        <span>MATH302 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH302 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH535 !== undefined ? (
                                    <div>
                                        <span>MATH535 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH535 0/3: ❌</span>
                                )}
                            </div>
                            <div>
                                {MATH426 !== undefined ? (
                                    <div>
                                        <span>MATH426 3/3: ✔️</span>
                                    </div>
                                ) : (
                                    <span>MATH426 0/3: ❌</span>
                                )}
                            </div>
                            <p></p>
                            <div>
                                {restrictedCreds >= 6 ? (
                                    <div>
                                        <span>
                                            Restricted Electives{" "}
                                            {restrictedCreds}
                                            /6: ✔️
                                        </span>
                                    </div>
                                ) : (
                                    <span>
                                        Restricted Electives {restrictedCreds}
                                        /6: ❌
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
                </Container>
            )}
        </div>
    );
}
