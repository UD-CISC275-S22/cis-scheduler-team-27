import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function OpeningInstruction(): JSX.Element {
    const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

    function toggleMessageDisplay() {
        setIsMessageVisible(!isMessageVisible);
    }
    return (
        <div>
            <h1>Welcome to UD CISC Scheduler</h1>
            <Button
                onClick={toggleMessageDisplay}
                style={{
                    backgroundColor: "black"
                }}
            >
                See Instructions
            </Button>
            {isMessageVisible && (
                <p>
                    Use buttons to add, edit, and delete plans, semesters, and
                    courses. Drag and drop courses from the menu to create
                    degree plans, compare concentration requirements, and pick
                    the right classes for your success at UD.
                </p>
            )}
        </div>
    );
}
