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
            /Add courses and make mock semesters to see how you can graduate on time./
        );
        expect(welcomeMessage).toHaveLength(1);
    });
});
