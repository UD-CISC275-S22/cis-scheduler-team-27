import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Planner } from "../Plan/Planner";
import userEvent from "@testing-library/user-event";
import { CourseView } from "./CourseView";
import App from "../App";

function dragAndDrop(course: HTMLElement, cell: HTMLElement) {
    fireEvent.dragStart(course);
    fireEvent.dragEnter(cell);
    fireEvent.dragOver(cell);
    fireEvent.drop(cell);
}

describe("Moving and Deleting Courses Tests", () => {
    beforeEach(() => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputPlanBox = planInput[0];
        const savePlanButton = screen.getByTestId("addPlan-save");
        userEvent.type(inputPlanBox, "Plan Name");
        savePlanButton.click();
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        const inputSemBoxSeason = SemInput[0];
        const inputSemBoxYear = SemInput[1];
        const saveButton = screen.getByTestId("save-button");
        userEvent.type(inputSemBoxSeason, "Fall");
        userEvent.type(inputSemBoxYear, "2022");
        saveButton.click();
    });
    test("dragging a course adds it to a semester's courses", () => {
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        const CISC181card = screen.getByTestId("CISC 181");
        const dropArea1 = screen.getByTestId("Fall 2022");
        dragAndDrop(CISC181card, dropArea1);
        expect(screen.getByTestId("Fall 2022")).toHaveTextContent(
            "Course Code: CISC 181"
        );
        userEvent.selectOptions(courseDropdown, "CISC 210");
        const CISC210card = screen.getByTestId("CISC 210");
        dragAndDrop(CISC210card, dropArea1);
        expect(screen.getByTestId("Fall 2022")).toHaveTextContent(
            "Course Code: CISC 210"
        );
    });
    test("a new semester can also accept courses", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        const inputSemBoxSeason = SemInput[0];
        const inputSemBoxYear = SemInput[1];
        const saveButton = screen.getByTestId("save-button");
        userEvent.clear(inputSemBoxSeason);
        userEvent.clear(inputSemBoxYear);
        userEvent.type(inputSemBoxSeason, "Spring");
        userEvent.type(inputSemBoxYear, "2023");
        saveButton.click();
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 275");
        const CISC275card = screen.getByTestId("CISC 275");
        const dropArea = screen.getByTestId("Spring 2023");
        dragAndDrop(CISC275card, dropArea);
        expect(screen.getByTestId("Spring 2023")).toHaveTextContent(
            "Course Code: CISC 275"
        );
        userEvent.selectOptions(courseDropdown, "CISC 372");
        const CISC372card = screen.getByTestId("CISC 372");
        dragAndDrop(CISC372card, dropArea);
        expect(screen.getByTestId("Spring 2023")).toHaveTextContent(
            "Course Code: CISC 372"
        );
    });
    test("dragging a course adds it to course pool", () => {
        render(<App />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 275");
        const CISC275card = screen.getByTestId("CISC 275");
        const pool = screen.getByTestId("course-pool");
        dragAndDrop(CISC275card, pool);
        expect(screen.getByTestId("course-pool")).toHaveTextContent(
            "Course Code: CISC 275"
        );
        userEvent.selectOptions(courseDropdown, "CISC 320");
        const CISC320card = screen.getByTestId("CISC 320");
        dragAndDrop(CISC320card, pool);
        expect(screen.getByTestId("course-pool")).toHaveTextContent(
            "Course Code: CISC 320"
        );
    });
    test("reset course pool button clears course pool", () => {
        render(<App />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 275");
        const CISC275card = screen.getByTestId("CISC 275");
        const pool = screen.getByTestId("course-pool");
        dragAndDrop(CISC275card, pool);
        expect(screen.getByTestId("course-pool")).toHaveTextContent(
            "Course Code: CISC 275"
        );
        userEvent.selectOptions(courseDropdown, "CISC 320");
        const CISC320card = screen.getByTestId("CISC 320");
        dragAndDrop(CISC320card, pool);
        expect(screen.getByTestId("course-pool")).toHaveTextContent(
            "Course Code: CISC 320"
        );
        const clearPool = screen.getByTestId("reset-pool-button");
        userEvent.click(clearPool);
        const { queryByText } = within(screen.getByTestId("course-pool"));
        expect(queryByText("CISC 320")).toBeNull();
        expect(queryByText("CISC 275")).toBeNull();
    });
    test("delete button deletes course from a semester", () => {
        render(<CourseView />);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 275");
        const CISC275card = screen.getByTestId("CISC 275");
        const semCourses = screen.getByTestId("Fall 2022");
        dragAndDrop(CISC275card, semCourses);
        userEvent.selectOptions(courseDropdown, "CISC 320");
        const CISC320card = screen.getByTestId("CISC 320");
        dragAndDrop(CISC320card, semCourses);
        const editButton = screen.getByTestId("edit-sem-button");
        userEvent.click(editButton);
        const deleteButtons = screen.queryAllByTestId("delete-course-from-sem");
        userEvent.click(deleteButtons[0]);
        userEvent.click(deleteButtons[1]);
        const saveButton = screen.getByTestId("edit-sem-save-button");
        userEvent.click(saveButton);
        const { queryByText } = within(screen.getByTestId("Fall 2022"));
        expect(queryByText("CISC 320")).toBeNull();
        expect(queryByText("CISC 275")).toBeNull();
    });
});
