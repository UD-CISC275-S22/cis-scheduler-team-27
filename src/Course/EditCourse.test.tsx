import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseView } from "./CourseView";

describe("Testing course editor", () => {
    test("Selecting an editing a course changes its info", () => {
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 108");
        const editCourseButton = screen.getByTestId("edit-course-button");
        userEvent.click(editCourseButton);
        const courseFields = screen.queryAllByRole("textbox");
        const inputName = courseFields[0];
        const inputCredits = courseFields[2];
        const saveButton = screen.getByTestId("save-course-button");
        userEvent.clear(inputName);
        userEvent.clear(inputCredits);
        userEvent.type(inputName, "Not computer science");
        userEvent.type(inputCredits, "5");
        userEvent.click(saveButton);
        expect(screen.getByText(/Not computer science/)).toBeInTheDocument();
        expect(screen.getByText(/Credits: 5/)).toBeInTheDocument();
    });
});
