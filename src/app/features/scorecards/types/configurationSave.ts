
export interface RebuttalDataList {
    name: string;
    designationIds: string;
}

export interface AllocationDetails {
    isAutoQaEnable: boolean;
    isManualQaEnable: boolean;
    manualQaDesignationIds: string;
    editAutoQaDesignationIds: string;
    autoAcceptQaScore: string;
    sendToAutoQa: string;
    sendToManualQa: string;
    isSendManualQa: boolean;
    isEnableEditAutoQa: boolean;
    isEnableRebuttalFlow: boolean;
    qaTicketVolume: string;
    manualQaTicketVolume: string;
    rebuttalDataList: RebuttalDataList[];
}

export interface LegendDetailsDataList {
    legendName: string;
    enable: boolean;
}

export interface subParameterDetailsList {
    subCategoryName: string;
    weightageType: string;
    weightageDetails: any;
    zt: boolean;
    audio: boolean;
    metaData: boolean;
    hybridQa: boolean;
    enable: boolean;
    legendDetailsDataList: LegendDetailsDataList[];
}

export interface ParameterDetailsList {
    parentCategoryName: string;
    enable: boolean;
    subParameterDetailsList: subParameterDetailsList[];
}

export interface SaveConfiguration {
    qaRules: any[];
    name: string;
    type: string;
    allocationDetails: AllocationDetails; 
    weightageType: string;
    parameterDetailsList: ParameterDetailsList[];
}
export interface Condition {
    attribute: string;
    field: string;
    operator: string;
    value: string;
    conditionType: string;
}

export interface Rule {
    ruleName: string;
    allocation: string;
    conditions: Condition[];
}

export interface qaRules {
    conditionType: string;
    rule: Rule;
}
