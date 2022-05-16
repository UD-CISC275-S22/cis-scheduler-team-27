import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Planner } from "../Plan/Planner";

describe("Semester Component tests", () => {
    beforeEach(() => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const saveButton = screen.getByTestId("addPlan-save");
        userEvent.type(inputBox, "Plan Name");
        saveButton.click();
    });
    test("Add Semester Modal Pops up", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        expect(SemInput).toHaveLength(2);
    });
    test("Save Button saves input", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        const inputBox = SemInput[1];
        const saveButton = screen.getByTestId("save-button");
        userEvent.type(inputBox, "2030");
        saveButton.click();
        expect(screen.getByText(/2030/)).toBeInTheDocument();
    });
    test("Cancel Button doesn't save input", () => {
        const yearsList = screen.queryAllByText(/2022/);
        expect(yearsList).toHaveLength(0);
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        const inputBox = SemInput[0];
        const cancelButton = screen.getByTestId("cancel-button");
        userEvent.type(inputBox, "2022");
        cancelButton.click();
        const yearsList2 = screen.queryAllByText(/2022/);
        expect(yearsList2).toHaveLength(0);
    });
    test("There is an edit button", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveSemBut = screen.getByTestId("save-button");
        saveSemBut.click();
        const editSemester = screen.getByTestId("edit-sem-button");
        expect(editSemester).toBeInTheDocument();
    });
    test("Edit Button creates three textboxes", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveSemBut = screen.getByTestId("save-button");
        saveSemBut.click();
        const editSemBut = screen.getByTestId("edit-sem-button");
        editSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        expect(SemInput).toHaveLength(3);
    });
    test("Save button in edit mode saves changes", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveButton = screen.getByTestId("save-button");
        saveButton.click();
        const editBut = screen.getByTestId("edit-sem-button");
        editBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        const inputBox = SemInput[0];
        const saveSemInfo = screen.getByTestId("edit-sem-save-button");
        userEvent.type(inputBox, "Semester 1");
        saveSemInfo.click();
        expect(screen.getByText(/Semester 1/)).toBeInTheDocument();
    });
    test("Delete button deletes semester", () => {
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveButton = screen.getByTestId("save-button");
        const inputBoxes = screen.queryAllByRole("textbox");
        const season = inputBoxes[0];
        userEvent.type(season, "Fall");
        saveButton.click();
        expect(screen.getByText(/Fall/)).toBeInTheDocument();
        const editBut = screen.getByTestId("edit-sem-button");
        editBut.click();
        const deleteBut = screen.getByTestId("delete-sem-button");
        deleteBut.click();
        const semName = screen.queryAllByText(/Fall/);
        expect(semName).toHaveLength(0);
    });
    /*
    test("Clear button deletes all semesters", () => {
        render(<SemesterControl />);
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveButton = screen.getByTestId("save-button");
        const inputBoxes = screen.queryAllByRole("textbox");
        const season1 = inputBoxes[0];
        userEvent.type(season1, "Fall");
        saveButton.click();
        expect(screen.getByText(/Fall/)).toBeInTheDocument();
        addSemBut.click();
        const inputBoxes2 = screen.queryAllByRole("textbox");
        const season2 = inputBoxes2[1];
        userEvent.type(season2, "2022");
        saveButton.click();
        expect(screen.getByText(/2022/)).toBeInTheDocument();
        const clearBut = screen.getByTestId("clear-all-sems");
        clearBut.click();
        const sem1 = screen.queryAllByText(/Fall/);
        expect(sem1).toHaveLength(0);
        const sem2 = screen.queryAllByText(/2022/);
        expect(sem2).toHaveLength(0);
    });
    */
});
