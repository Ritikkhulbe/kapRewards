
import { qaRules } from "../types/configurationSave";
import { QAConfigurationData } from "./responseTypes";


export const SaveApi : QAConfigurationData = {
    qaRuleLogic: "OR",
    qaRuleList: [
      {
        ruleName: "whatsapp",
        filterLogic: "OR",
        qaRuleDetailsList: [
          {
            filterName: "Rule Filter 1",
            folderIds: "715317",
            queue: "",
            agentId: "",
            ticketConversationCount: 0,
            agentJoinedInLastXDays: 0,
            ticketResolutionTime: 0,
            selectedRule: [
              "FOLDER"
            ]
          }
        ]
      }
    ],
    name: "test",
    type: "P",
    allocationDetails: {
      isAutoQaEnable: true,
      isManualQaEnable: true,
      manualQaDesignationIds: "36101",
      editAutoQaDesignationIds: "36797",
      autoAcceptQaScore: "2",
      sendToAutoQa: "",
      sendToManualQa: "",
      isSendManualQa: false,
      isEnableEditAutoQa: true,
      isEnableRebuttalFlow: true,
      qaTicketVolume: "ALL",
      manualQaTicketVolume: "ALL",
      rebuttalDataList: [
        {
          name: "Rebuttal1",
          designationIds: "34264"
        },
        {
          name: "Rebuttal2",
          designationIds: "35857"
        }
      ]
    },
    weightageType: "PERCENTAGE",
    parameterDetailsList: [
      {
        name: "Chat Ettiquettes",
        subParameterDetailsList: [
          {
            name: "Mirrored Language",
            weightage: "20",
            zt: false,
            legendDetailsDataList: [
              {
                name: "Did the agent use language that reflected the customer's tone and style?"
              },
              {
                name: "Did the agent acknowledge the customer's concerns using similar phrasing?"
              }
            ],
            categoryType: ""
          },
          {
            "name": "Abusive Language",
            "weightage": "20",
            "zt": true,
            "legendDetailsDataList": [
              {
                "name": "Did the agent maintain a professional tone throughout the interaction?"
              },
              {
                "name": "Was there any instance of the agent using language that could be perceived as disrespectful?"
              }
            ],
            "categoryType": ""
          }
        ]
      },
      {
        name: "Greetings",
        subParameterDetailsList: [
          {
            "name": "Customer Greeting",
            "weightage": "Yes/No",
            "zt": false,
            "legendDetailsDataList": [
              {
                "name": "Did the agent greet the customer at the beginning of the chat?"
              },
              {
                "name": "Was the greeting personalized (e.g., using the customer's name)?"
              }
            ],
            "categoryType": ""
          }
        ]
      }
    ]
}

const parameterDetailsList1 = {
  "parentParameterDetailsList": [
        {
            "parentCategoryName": "Customer Communication and a lot more words",
            "enable": true,
            "subParameterDetailsList": [
                {
                    "subCategoryName": "Greeting",
                    "weightageType": "Yes/No",
                    "weightageDetails": "10",
                    "zt": true,
                    "audio": false,
                    "metaData": true,
                    "hybridQa": false,
                    "enable": true,
                    "legendDetailsDataList": [
                        {
                            "legendName": "Did the agent greet the customer at the beginning of the chat?",
                            "enable": true
                        },
                        {
                            "legendName": "Was the greeting personalized (e.g., using the customer's name)?",
                            "enable": true
                        }
                    ]
                },
                {
                    "subCategoryName": "Problem Resolution",
                    "weightageType": "Value",
                    "weightageDetails": "5",
                    "zt": false,
                    "audio": true,
                    "metaData": false,
                    "hybridQa": true,
                    "enable": true,
                    "legendDetailsDataList": [
                        {
                            "legendName": "Did the agent resolve the customer's issue?",
                            "enable": true
                        }
                    ]
                }
            ]
        },
        {
            "parentCategoryName": "Technical Expertise",
            "enable": true,
            "subParameterDetailsList": [
                {
                    "subCategoryName": "Product Knowledge",
                    "weightageType": "N/A",
                    "weightageDetails": "N/A",
                    "zt": true,
                    "audio": true,
                    "metaData": true,
                    "hybridQa": true,
                    "enable": true,
                    "legendDetailsDataList": [
                        {
                            "legendName": "Comprehensive Explanation",
                            "enable": true
                        }
                    ]
                }
            ]
        }
    ]
}
export const getParameterDetailsList = () => {
  // return [];
  // return [{name: "Chat Ettiquettes", subParameterDetailsList: []}];
  return parameterDetailsList1.parentParameterDetailsList;
}

export const saveConfig = {
  "type": "QA_CONFIG",
  "enabled": true,
  // "configId": 6,
  "title": "test1",
  "description": "test description",
  "qaType": [
    "AUTO_QA",
    "SMART_MANUAL_QA",
    "HYBRID_QA"
  ],
  "sourceType": "I",
  "manualQaAuditor": [
    "Gourav Arora###1",
    "Darshan###2"
  ],
  "aiSuggestResponse": "AUTOMATIC",
  "autoQaReviewer": [
    "Gourav Arora###1",
    "Darshan###2"
  ],
  "rebuttalEnabled": true,
  "rebuttal": {
    "autoAcceptScore": true,
    "levelAndEmployees": {
      "LEVEL_1": [
        "Gourav Arora###1",
        "Darshan###2"
      ],
      "LEVEL_2": [
        "Gourav Arora###1",
        "Darshan###2"
      ]
    }
  },
  "criterionId": 0
}

export const des ={
  "status": "success",
  "Message": "Designation List Fetched Successfully",
  "Designation": [
      {
          "id": 34264,
          "cmId": 8400,
          "groupName": "Manager",
          "privilegeId": "12172,65,18,42,43,19,49,123,125,129,270,4,31,1003,1004,1005,1006,1007,1008,1009,1010,1011,1023,1064,10497,300,301,302,306,10541,12135,12183,12172,249,250,800,350,351,354,289,878,879,900,912,932,942,12114,12116,12133,10530",
          "enable": true,
          "checkAssignToId": true
      },
      {
          "id": 35823,
          "cmId": 8400,
          "groupName": "Agent",
          "privilegeId": "4,31,300,301,306,249,250,800,350,351,879,12114",
          "enable": true,
          "checkAssignToId": true
      },
      {
          "id": 35857,
          "cmId": 8400,
          "groupName": "Super Admin",
          "privilegeId": "-1",
          "enable": true,
          "checkAssignToId": true
      },
      {
          "id": 36070,
          "cmId": 8400,
          "groupName": "Operations Head",
          "privilegeId": "12172,65,18,42,43,19,125,4,31,1003,1004,1005,1006,1007,1008,1009,1010,1011,1023,1064,1066,10497,300,301,302,306,10541,12135,12183,12172,249,250,800,350,351,353,354,289,878,879,900,912,932,942,12114,12116,12133,12137,10530",
          "enable": true,
          "checkAssignToId": true
      },
      {
          "id": 36101,
          "cmId": 8400,
          "groupName": "Rajeev Agent",
          "privilegeId": "4,31,351,353",
          "enable": true,
          "checkAssignToId": true
      },
      {
          "id": 36797,
          "cmId": 8400,
          "groupName": "QA Manager",
          "privilegeId": "65,18,42,43,19,49,123,125,129,270,10509,131,885,835,837,874,876,890,10415,1083,1089,9048,1133,12082,12130,12131,12134,12146,12147,12150,12164,12180,12067,10532,300,301,302,306,10541,12135,12183,12172,249,250,282,285,286,288,800,887,956,10427,350,351,353,354,289,878,879,900,912,913,932,942,1124,12114,12116,12133,12137,10540,10543,10544,10530",
          "enable": true,
          "checkAssignToId": true
      }
  ]
}


export const qaRuleExample: qaRules[]=   [
  {
      "conditionType": "AND",
      "rule": {
          "ruleName": "First Rule",
          "allocation": "FIXED",
          "conditions": [
              {
                  "attribute": "TICKET",
                  "field": "PRIORITY",
                  "operator": "GREATER",
                  "value": "1",
                  "conditionType": "AND"
              },
              {
                  "attribute": "TICKET",
                  "field": "CREATOR_ID",
                  "operator": "EQUAL",
                  "value": "1",
                  "conditionType": "OR"
              },
              {
                  "attribute": "TICKET",
                  "field": "REOPENED_COUNT",
                  "operator": "LESS",
                  "value": "4",
                  "conditionType": "OR"
              },
              {
                  "attribute": "AGENT",
                  "field": "TENURE",
                  "operator": "GREATER",
                  "value": "12",
                  "conditionType": "OR"
              },
              {
                  "attribute": "AGENT",
                  "field": "NAME",
                  "operator": "EQUAL",
                  "value": "Gourav,Akash",
                  "conditionType": "AND"
              },
              {
                  "attribute": "AGENT",
                  "field": "ID",
                  "operator": "GREATER",
                  "value": "24",
                  "conditionType": "AND"
              }
          ]
      }
  },
  {
      "conditionType": "OR",
      "rule": {
          "ruleName": "Nested Rule",
          "allocation": "FIXED",
          "conditions": [
              {
                  "attribute": "TICKET",
                  "field": "PRIORITY",
                  "operator": "GREATER",
                  "value": "1",
                  "conditionType": "AND"
              },
              {
                  "attribute": "TICKET",
                  "field": "CREATOR_ID",
                  "operator": "EQUAL",
                  "value": "1",
                  "conditionType": "OR"
              },
              {
                  "attribute": "TICKET",
                  "field": "REOPENED_COUNT",
                  "operator": "LESS",
                  "value": "4",
                  "conditionType": "OR"
              },
              {
                  "attribute": "AGENT",
                  "field": "TENURE",
                  "operator": "GREATER",
                  "value": "12",
                  "conditionType": "OR"
              },
              {
                  "attribute": "AGENT",
                  "field": "NAME",
                  "operator": "EQUAL",
                  "value": "Gourav,Akash",
                  "conditionType": "AND"
              },
              {
                  "attribute": "AGENT",
                  "field": "ID",
                  "operator": "GREATER",
                  "value": "24",
                  "conditionType": "AND"
              }
          ]
      }
  }
]