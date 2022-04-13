import React from "react";
import { render, screen } from "@testing-library/react";
import { Planner } from "./Planner";
describe("CheckAnswer Component tests", () => {
    test("renders there is a plan somewhere", () => {
        render(<Planner />);
        const linkElement = screen.getByText(/Plan/i);
        expect(linkElement).toBeInTheDocument();
    });
});
