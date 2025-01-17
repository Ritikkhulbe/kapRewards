import { createAction } from "@reduxjs/toolkit";
import { GeneralSettingsState } from "../configInitialState";

const GENERAL_SETTINGS_ACTION = "[SCORECARD] CHANGE GENERAL STATE";
const QA_TYPE_SETTINGS_ACTION = "[SCORECARD] CHANGE QA TYPE STATE";

export const generalAction = createAction<GeneralSettingsState>(GENERAL_SETTINGS_ACTION);

export const generalQaTypeAction = createAction<string[]>(QA_TYPE_SETTINGS_ACTION);

