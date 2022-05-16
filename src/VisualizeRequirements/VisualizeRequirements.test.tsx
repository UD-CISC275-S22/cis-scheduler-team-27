import React from "react";
import { render, screen } from "@testing-library/react";
import { Planner } from "../Plan/Planner";
import userEvent from "@testing-library/user-event";

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
        const inputSemBox = SemInput[1];
        const saveButton = screen.getByTestId("save-button");
        userEvent.type(inputSemBox, "2022");
        saveButton.click();
    });
    test("Concentration dropdown exists", () => {
        const concDropdown = screen.getAllByRole("combobox");
        expect(concDropdown).toHaveLength(1);
    });
    test("Selecting concentration functions", () => {
        const concDropdown = screen.getByTestId("concentration-dropdown");
        userEvent.selectOptions(concDropdown, "AI Robotics");
    });
});
