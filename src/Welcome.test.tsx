import React from "react";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { OpeningInstruction } from "./openingInstruction";

describe("Welcome component tests", () => {
    test("There is a button to view instructions", () => {
        render(<OpeningInstruction />);
        const welcomeButton = screen.getByRole("button");
        expect(welcomeButton).toBeInTheDocument();
    });
    test("Clicking button displays instructions", () => {
        render(<OpeningInstruction />);
        const welcomeButton = screen.getByRole("button");
        welcomeButton.click();
        const welcomeMessage = screen.queryAllByText(
            /Use buttons to add, edit, and delete plans, semesters, and courses. /
        );
        expect(welcomeMessage).toHaveLength(1);
    });
});
