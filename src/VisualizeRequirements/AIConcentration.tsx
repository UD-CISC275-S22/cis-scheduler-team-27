import React, { useState } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Plan } from "../interfaces/Plan";
import { Button } from "react-bootstrap";

export function AIConcentration({ plan }: { plan: Plan }): JSX.Element {
    const courseList = plan.semesters.map(
        (semester: Semester): Course[] => semester.courses
    );
    const merged = Array.prototype.concat.apply([], courseList);
    const courseCodes = merged.map((course: Course): string => course.code);
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
    const [visible, setVisible] = useState<boolean>(false);
    function showRequirements(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button
                data-testid="requirements-button"
                onClick={() => {
                    showRequirements();
                }}
            >
                Display requirements
            </Button>
            {visible && (
                <div>
                    <div>Core Requirements</div>
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
                        {MATH205 !== undefined || MATH350 !== undefined ? (
                            <div>
                                <span>MATH205/350: ✔️</span>
                            </div>
                        ) : (
                            <span>MATH250/350: ❌</span>
                        )}
                    </div>
                    <div>
                        {ENGL312 !== undefined || ENGL410 !== undefined ? (
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
                </div>
            )}
        </div>
    );
}
