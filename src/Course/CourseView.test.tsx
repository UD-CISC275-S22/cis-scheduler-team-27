import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseView } from "./CourseView";

describe("Testing courses drag and drop", () => {
    test("Selecting a course displays it's info - test 1", () => {
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 108");
        expect(screen.getByText(/Course Code: CISC 108/)).toBeInTheDocument();
        expect(screen.getByText(/Credits: 3/)).toBeInTheDocument();
    });
    test("Selecting a course displays it's info - test 2", () => {
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        expect(screen.getByText(/Course Code: CISC 181/)).toBeInTheDocument();
        expect(screen.getByText(/Credits: 3/)).toBeInTheDocument();
    });
});
