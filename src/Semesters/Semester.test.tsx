import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterControl } from "./SemesterControl";
import userEvent from "@testing-library/user-event";

describe("Semester Component tests", () => {
    test("There are initially two buttons", () => {
        render(<SemesterControl />);
        const addSemester = screen.getByRole("button");
        expect(addSemester).toBeInTheDocument();
    });
    test("Add Semester Modal Pops up", () => {
        render(<SemesterControl />);
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const SemInput = screen.queryAllByRole("textbox");
        expect(SemInput).toHaveLength(2);
    });
    test("Save Button saves input", () => {
        render(<SemesterControl />);
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
        render(<SemesterControl />);
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
        render(<SemesterControl />);
        const addSemBut = screen.getByTestId("AddSemButton");
        addSemBut.click();
        const saveSemBut = screen.getByTestId("save-button");
        saveSemBut.click();
        const editSemester = screen.getByTestId("edit-sem-button");
        expect(editSemester).toBeInTheDocument();
    });
    test("Edit Button creates three textboxes", () => {
        render(<SemesterControl />);
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
        render(<SemesterControl />);
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
        render(<SemesterControl />);
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
