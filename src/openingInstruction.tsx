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
                    Add courses and make mock semesters to see how you can
                    graduate on time.
                </p>
            )}
        </div>
    );
}
