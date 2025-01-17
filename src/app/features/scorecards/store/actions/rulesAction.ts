import { createAction } from "@reduxjs/toolkit";
import { Condition, qaRules } from "../../types/configurationSave";

const QA_RULES_SETTINGS_ACTION = "[SCORECARD] CHANGE QARULES STATE";
const QA_RULES_ADD_ACTION = "[SCORECARD] ADD QA RULES";
const QA_RULES_DELETE_ACTION = "[SCORECARD] DELETE QA RULES";
const QA_RULES_UPDATE_ACTION = "[SCORECARD] UPDATE QA RULES";
const QA_RULES_CONDITION_ACTION = "[SCORECARD] UPDATE CONDITION";

export const rulesAction = createAction<qaRules>(QA_RULES_SETTINGS_ACTION);

export const addRuleAction = createAction<qaRules>(QA_RULES_ADD_ACTION);

export const deleteRuleAction = createAction<number>(QA_RULES_DELETE_ACTION);

export const updateRuleAction = createAction<{index: number, rule: qaRules}>(QA_RULES_UPDATE_ACTION);

export const conditionAction = createAction<{index: number, conditions: Condition[]}>(QA_RULES_CONDITION_ACTION);