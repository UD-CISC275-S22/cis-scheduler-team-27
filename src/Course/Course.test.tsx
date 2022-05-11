import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseView } from "./CourseView";
import userEvent from "@testing-library/user-event";

describe("Course Component tests", () => {
    test("There is a dropdown", () => {
        render(<CourseView />);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("When Course is selected it is displayed properly", () => {
        render(<CourseView />);
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "ACCT 166");
        expect(screen.getByText(/SPECIAL PROBLEM/i)).toBeInTheDocument();
        expect(screen.getByText(/Course Code: ACCT 166/i)).toBeInTheDocument();
        expect(screen.getByText(/Credits: 1-3/i)).toBeInTheDocument();
        expect(screen.getByText(/Required PreReqs:/i)).toBeInTheDocument();
    });
});
