import React from "react";
import { render, screen } from "@testing-library/react";
import { Planner } from "./Planner";
import userEvent from "@testing-library/user-event";

describe("Plan Component tests", () => {
    test("There are initially two buttons", () => {
        render(<Planner />);
        const addPlan = screen.getByRole("button");
        expect(addPlan).toBeInTheDocument();
    });
    test("Add Semester Modal Pops up", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        expect(planInput).toHaveLength(1);
    });
    test("Save Button saves input", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const saveButton = screen.getByTestId("addPlan-save");
        userEvent.type(inputBox, "Plan Name");
        saveButton.click();
        expect(screen.getByText(/Plan Name/)).toBeInTheDocument();
    });
    test("Cancel Button doesn't save input", () => {
        render(<Planner />);
        const planList = screen.queryAllByText(/Plan Name/);
        expect(planList).toHaveLength(0);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const cancelButton = screen.getByTestId("addPlan-cancel");
        userEvent.type(inputBox, "Plan Name");
        cancelButton.click();
        const planList2 = screen.queryAllByText(/Plan Name/);
        expect(planList2).toHaveLength(0);
    });
    test("There is an edit button", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const savePlanBut = screen.getByTestId("addPlan-save");
        savePlanBut.click();
        const editPlan = screen.getByTestId("edit-plan-button");
        expect(editPlan).toBeInTheDocument();
    });
    test("Edit Button creates one textboxes", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const savePlanBut = screen.getByTestId("addPlan-save");
        savePlanBut.click();
        const editPlanBut = screen.getByTestId("edit-plan-button");
        editPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        expect(planInput).toHaveLength(1);
    });
    test("Save button in edit mode saves changes", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const saveButton = screen.getByTestId("addPlan-save");
        saveButton.click();
        const editBut = screen.getByTestId("edit-plan-button");
        editBut.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const savePlanData = screen.getByTestId("edit-plan-save-button");
        userEvent.type(inputBox, "Plan 1");
        savePlanData.click();
        expect(screen.getByText(/Plan 1/)).toBeInTheDocument();
    });
    test("Delete button deletes plan", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const saveButton = screen.getByTestId("addPlan-save");
        const inputBoxes = screen.queryAllByRole("textbox");
        const planTitle = inputBoxes[0];
        userEvent.type(planTitle, "Plan 1");
        saveButton.click();
        expect(screen.getByText(/Plan 1/)).toBeInTheDocument();
        const editBut = screen.getByTestId("edit-plan-button");
        editBut.click();
        const deleteBut = screen.getByTestId("delete-plan-button");
        deleteBut.click();
        const planName = screen.queryAllByText(/Plan 1/);
        expect(planName).toHaveLength(0);
    });
    /*
    test("Clear button deletes all semesters", () => {
        render(<Planner />);
        const addPlanBut = screen.getByTestId("AddPlanButton");
        addPlanBut.click();
        const saveButton = screen.getByTestId("addPlan-cancel");
        const inputBoxes = screen.queryAllByRole("textbox");
        const season1 = inputBoxes[0];
        userEvent.type(season1, "Fall");
        saveButton.click();
        expect(screen.getByText(/Fall/)).toBeInTheDocument();
        addPlanBut.click();
        const inputBoxes2 = screen.queryAllByRole("textbox");
        const season2 = inputBoxes2[1];
        userEvent.type(season2, "Plan Name");
        saveButton.click();
        expect(screen.getByText(/Plan Name/)).toBeInTheDocument();
        const clearBut = screen.getByTestId("clear-all-sems");
        clearBut.click();
        const sem1 = screen.queryAllByText(/Fall/);
        expect(sem1).toHaveLength(0);
        const sem2 = screen.queryAllByText(/Plan Name/);
        expect(sem2).toHaveLength(0);
    });
    */
});
