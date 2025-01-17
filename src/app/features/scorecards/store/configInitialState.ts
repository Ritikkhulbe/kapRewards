import { ParameterDetailsList, qaRules } from "../types/configurationSave";

export interface GeneralSettingsState {
    title: string;
    description: string;
    type: string;
    QAType: string[];
    ManualQAAuditor: any[];
    AISuggestResponse: string;
    AutoQAReviewer: any[];
    isRebuttal: boolean;
}

interface RebuttalLevelType{
    LEVEL_1?: string[];
    LEVEL_2?: string[];
    LEVEL_3?: string[];
    LEVEL_4?: string[];
}

export interface RebuttalSettingsState {
    autoAccept: boolean;
    acceptTime: number | null;
    rebuttalLevel: RebuttalLevelType;
}


export interface ConfigQAStateType {
    general: GeneralSettingsState;
    rebuttal: RebuttalSettingsState;
    parameterDetailsList: ParameterDetailsList[];
    qaRules: qaRules[];
}


export const ConfigQAInitialState: ConfigQAStateType = {
    general: {
        title: "",
        description: "",
        type: "",
        QAType: [],
        ManualQAAuditor: [],
        AISuggestResponse: "",
        AutoQAReviewer: [],
        isRebuttal: false
    },
    rebuttal: {
        autoAccept: false,
        acceptTime: 1,
        rebuttalLevel: {}
    },
    parameterDetailsList: [],
    qaRules: []
};