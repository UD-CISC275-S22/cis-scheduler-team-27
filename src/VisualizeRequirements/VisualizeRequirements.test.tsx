import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Planner } from "../Plan/Planner";
import userEvent from "@testing-library/user-event";
import { CourseView } from "../Course/CourseView";

function dragAndDrop(course: HTMLElement, cell: HTMLElement) {
    fireEvent.dragStart(course);
    fireEvent.dragEnter(cell);
    fireEvent.dragOver(cell);
    fireEvent.drop(cell);
}

describe("Visualize Requirements Test", () => {
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
        const inputSeason = SemInput[0];
        const inputYear = SemInput[1];
        const saveButton = screen.getByTestId("save-button");
        userEvent.type(inputSeason, "Fall");
        userEvent.type(inputYear, "2022");
        saveButton.click();
    });
    test("Concentration dropdown exists", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        expect(concDropdown).toBeInTheDocument();
    });
    test("Degree requirements are initially not filled", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        expect(screen.getByText(/CISC181 0\/3: ❌/)).toBeInTheDocument();
        expect(screen.getByText(/CISC210 0\/3: ❌/)).toBeInTheDocument();
    });
    test("Core degree requirements can be filled", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        const dropArea = screen.getByTestId("Fall 2022");
        const CISC181card = screen.getByTestId("CISC 181");
        dragAndDrop(CISC181card, dropArea);
        userEvent.selectOptions(courseDropdown, "CISC 210");
        const CISC210card = screen.getByTestId("CISC 210");
        dragAndDrop(CISC210card, dropArea);
        expect(screen.getByText(/CISC181 3\/3: ✔️/)).toBeInTheDocument();
        expect(screen.getByText(/CISC210 3\/3: ✔️/)).toBeInTheDocument();
    });
    test("Creative breadth electives can established and filled", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        const editCourseButton = screen.getByTestId("edit-course-button");
        userEvent.click(editCourseButton);
        const checkList = screen.queryAllByRole("checkbox");
        const inputName = checkList[3];
        userEvent.click(inputName);
        const saveCourse = screen.getByTestId("save-course-button");
        userEvent.click(saveCourse);
        const dropArea = screen.getByTestId("Fall 2022");
        const CISC181card = screen.getByTestId("CISC 181");
        dragAndDrop(CISC181card, dropArea);
        dragAndDrop(CISC181card, dropArea);
        expect(
            screen.getByText(/Creative Arts and Humanities 3\/3: ✔️/)
        ).toBeInTheDocument();
    });
    test("History breadth electives can established and filled", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "ARAB 305");
        const editCourseButton = screen.getByTestId("edit-course-button");
        userEvent.click(editCourseButton);
        const checkList = screen.queryAllByRole("checkbox");
        const inputName = checkList[4];
        userEvent.click(inputName);
        const saveCourse = screen.getByTestId("save-course-button");
        userEvent.click(saveCourse);
        const dropArea = screen.getByTestId("Fall 2022");
        const ARAB305card = screen.getByTestId("ARAB 305");
        dragAndDrop(ARAB305card, dropArea);
        dragAndDrop(ARAB305card, dropArea);
        expect(
            screen.getByText(/History and Cultural Change 3\/3: ✔️/)
        ).toBeInTheDocument();
    });
    test("Breadth requirement no longer filled if courses are cleared", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "ARAB 305");
        const editCourseButton = screen.getByTestId("edit-course-button");
        userEvent.click(editCourseButton);
        const checkList = screen.queryAllByRole("checkbox");
        const inputName = checkList[4];
        userEvent.click(inputName);
        const saveCourse = screen.getByTestId("save-course-button");
        userEvent.click(saveCourse);
        const dropArea = screen.getByTestId("Fall 2022");
        const ARAB305card = screen.getByTestId("ARAB 305");
        dragAndDrop(ARAB305card, dropArea);
        dragAndDrop(ARAB305card, dropArea);
        expect(
            screen.getByText(/History and Cultural Change 3\/3: ✔️/)
        ).toBeInTheDocument();
        const clearCourses = screen.getByTestId("clear-courses-button");
        userEvent.click(clearCourses);
        expect(
            screen.getByText(/History and Cultural Change 0\/3: ❌/)
        ).toBeInTheDocument();
    });
    test("Core degree requirements no longer filled if courses are cleared", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("AI-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        const dropArea = screen.getByTestId("Fall 2022");
        const CISC181card = screen.getByTestId("CISC 181");
        dragAndDrop(CISC181card, dropArea);
        userEvent.selectOptions(courseDropdown, "CISC 210");
        const CISC210card = screen.getByTestId("CISC 210");
        dragAndDrop(CISC210card, dropArea);
        expect(screen.getByText(/CISC181 3\/3: ✔️/)).toBeInTheDocument();
        expect(screen.getByText(/CISC210 3\/3: ✔️/)).toBeInTheDocument();
        const clearCourses = screen.getByTestId("clear-courses-button");
        userEvent.click(clearCourses);
        expect(screen.getByText(/CISC181 0\/3: ❌/)).toBeInTheDocument();
        expect(screen.getByText(/CISC210 0\/3: ❌/)).toBeInTheDocument();
    });
    test("Core degree requirements can be filled for another concentration", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "Data Science");
        render(<CourseView />);
        const displayRequirements = screen.getByTestId("Data-Requirements");
        userEvent.click(displayRequirements);
        const courseDropdown = screen.getByTestId("course-dropdown");
        userEvent.selectOptions(courseDropdown, "CISC 181");
        const dropArea = screen.getByTestId("Fall 2022");
        const CISC181card = screen.getByTestId("CISC 181");
        dragAndDrop(CISC181card, dropArea);
        userEvent.selectOptions(courseDropdown, "CISC 210");
        const CISC210card = screen.getByTestId("CISC 210");
        dragAndDrop(CISC210card, dropArea);
        expect(screen.getByText(/CISC181 3\/3: ✔️/)).toBeInTheDocument();
        expect(screen.getByText(/CISC210 3\/3: ✔️/)).toBeInTheDocument();
    });
});
