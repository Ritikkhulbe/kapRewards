export interface getConfigListData {
    id: Number,
    name: string,
    type: string,
    "parameter count": Number,
    "sub-parameter count": Number,
    weightage: Number,
    "Total ZTs": Number,
    lastUpdatedTime: string,
}

export interface getConfigList {
    data: getConfigListData[],
    message: string,
    status: boolean
}

export interface Designation {
    id: number;
    cmId: number;
    groupName: string;
    privilegeId: string;
    enable: boolean;
    checkAssignToId: boolean;
}

export interface DesignationApiResponse {
    status: string;
    Message: string;
    Designation: Designation[];
}

interface QaRuleDetailsList {
    filterName: string;
    folderIds: string;
    queue: string;
    agentId: string;
    ticketConversationCount: number;
    agentJoinedInLastXDays: number;
    ticketResolutionTime: number;
    selectedRule: string[];
}

interface QaRuleList {
    ruleName: string;
    filterLogic: string;
    qaRuleDetailsList: QaRuleDetailsList[];
}

interface RebuttalDataList {
    name: string;
    designationIds: string;
}

interface AllocationDetails {
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

interface LegendDetailsDataList {
    name: string;
}

interface subParameterDetailsList {
    name: string;
    weightage: string;
    zt: boolean;
    legendDetailsDataList: LegendDetailsDataList[];
    categoryType: string;
}

interface ParameterDetailsList {
    name: string;
    subParameterDetailsList: subParameterDetailsList[];
}

export interface QAConfigurationData {
    qaRuleLogic: string;
    qaRuleList: QaRuleList[];
    name: string;
    type: string;
    allocationDetails: AllocationDetails;
    weightageType: string;
    parameterDetailsList: ParameterDetailsList[];
}