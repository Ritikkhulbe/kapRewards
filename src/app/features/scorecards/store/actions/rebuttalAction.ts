import { createAction } from "@reduxjs/toolkit";
import { RebuttalSettingsState } from "../configInitialState";

const REBUTTAL_SETTINGS_ACTION = "[SCORECARD] CHANGE REBUTTAL STATE";

export const rebuttalAction = createAction<RebuttalSettingsState>(REBUTTAL_SETTINGS_ACTION);