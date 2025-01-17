import { PayloadAction } from "@reduxjs/toolkit";
import { ConfigQAStateType } from "../configInitialState";
import { Condition, qaRules } from "../../types/configurationSave";


export const rulesReducer = (state: ConfigQAStateType, action: PayloadAction<qaRules[]>) => {
    state.qaRules = action.payload;
}

export const addRuleReducer = (state: ConfigQAStateType, action: PayloadAction<qaRules>) => {
    state.qaRules.push(action.payload);
}

export const deleteRuleReducer = (state: ConfigQAStateType, action: PayloadAction<number>) => {
    state.qaRules.splice(action.payload, 1);
}

export const updateRuleReducer = (state: ConfigQAStateType, action: PayloadAction<{index: number, rule: qaRules}>) => {
    state.qaRules[action.payload.index] = action.payload.rule;
}

export const conditionReducer = (state: ConfigQAStateType, action: PayloadAction<{index: number, conditions: Condition[]}>) => {
    state.qaRules[action.payload.index].rule.conditions = action.payload.conditions;
}


