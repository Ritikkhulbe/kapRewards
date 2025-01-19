  

import { L1ConversationDataSet,L2ConversationDataSet,AuditorConversationDataSet,L1ConversationHistoryDataSet,L2ConversationHistoryDataSet,AuditorConversationHistoryDataSet } from "./types";

export const getConversationMessages = async (): Promise<any> => {
    const response = await fetch("https://democrm.kapturecrm.com/api/version3/ticket/get-ticket-detail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          id: "666396376",
          data_type: "WHATSAPP_MESSAGES",
          ticket_id: "6724653420759",
          cdate: "2024-12-03 12:02:04",
        }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch messages. Status: ${response.status}`);
  }

  return response.json();
};






export const getInboxData = async (
  isL1Agent: boolean,
  isL2Agent: boolean,
  isAuditor: boolean
): Promise< L1ConversationDataSet[] |L2ConversationDataSet[] | AuditorConversationDataSet[]> => {
  // Dummy data instead of fetching from an API
  const L1ConversationData = [
    {
      id: "1234567850",
      score: "20",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "9876543210",
      score: "30",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "123468890",
      score: "80",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "987643280",
      score: "90",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
    {
      id: "12346750",
      score: "62",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "987654310",
      score: "40",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "123568890",
      score: "50",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "98754320",
      score: "90",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
  ];
  const L2ConversationData = [
    {
      id: "1234567850",
      status:"Rescored",
      score: "80",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "9876543210",
      status: "Rebutted to L2",
      score:"62",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "1234568890",
      status: "Rebuttal Rejected",
      score:"50",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "986543280",
      status: "Accepted",
      score:"70",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
    {
      id: "123567850",
      status: "Rebuttal Rejected",
      score:"50",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "987643210",
      status: "Accepted",
      score:"70",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "123456890",
      status: "Rebutted to L2",
      score:"62",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "987643280",
      status: "Rebuttal Rejected",
      score:"50",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
  ];

  const auditorData = [
    {
      id: "1234567850",
      agent: "Nisha Sharma",
      score: "65",
      scorecard: "WhatsApp Conversations",
      type: "Manual",
      date: "Today",
    },
    {
      id: "9876543210",
      agent: "Kartik Patel",
      score: "95",
      scorecard: "Facebook DM",
      type: "Hybrid QA",
      date: "Today",
    },
    {
      id: "1234567840",
      agent: "Nisha Sharma",
      score: "90",
      scorecard: "WhatsApp Conversations",
      type: "Manual",
      date: "Today",
    },
    {
      id: "9876843210",
      agent: "Kartik Patel",
      score: "80",
      scorecard: "Facebook DM",
      type: "Audit",
      date: "Today",
    },
    {
      id: "123567850",
      agent: "Nisha Sharma",
      score: "40",
      scorecard: "WhatsApp Conversations",
      type: "Manual",
      date: "Today",
    },
    {
      id: "987654320",
      agent: "Kartik Patel",
      score: "50",
      scorecard: "Facebook DM",
      type: "Audit",
      date: "Today",
    },
    {
      id: "123457840",
      agent: "Nisha Sharma",
      score: "80",
      scorecard: "WhatsApp Conversations",
      type: "Manual",
      date: "Today",
    },
    {
      id: "976843210",
      agent: "Kartik Patel",
      score: "95",
      scorecard: "Facebook DM",
      type: "Audit",
      date: "Today",
    },
  ];

  // Return different data based on role
  if ( isL1Agent) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(L1ConversationData);
      }, 0);
    });
  }
  if ( isL2Agent) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(L2ConversationData);
      }, 0);
    });
  }

  if (isAuditor) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(auditorData);
      }, 0);
    });
  }

  return [];
};

export const getHistoryData = async (
  isL1Agent: boolean,
  isL2Agent: boolean,
  isAuditor: boolean
): Promise< L1ConversationHistoryDataSet[] |L2ConversationHistoryDataSet[] | AuditorConversationHistoryDataSet[]> => {
  // Dummy data instead of fetching from an API
  const L1ConversationHistoryData = [
    {
      id: "12344567850",
      status:"Scored",
      score: "30",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "987654563210",
      status:"Rebutted to L2",
      score: "60",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "12443468890",
      status:"Rescored",
      score: "80",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "98763343280",
      status:"Rescored",
      score: "90",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
    {
      id: "1234556750",
      status:"Rescored",
      score: "20",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "98765435510",
      status:"Rebuttal Rejected",
      score: "50",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "12356448890",
      status:"Rescored",
      score: "40",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "9833754320",
      status:"Rebuttal Rejected",
      score: "80",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
  ];
  const L2ConversationHistoryData = [
    {
      id: "1234567850",
      status:"Rescored",
      score: "60",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "9876543210",
      status:"Rebutted to L2",
      score: "40",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "1234568890",
      status:"Rebuttal Rejected",
      score: "90",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "986543280",
      status:"Accepted",
      score: "30",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
    {
      id: "123567850",
      status:"Accepted",
      score: "10",
      scorecard: "WhatsApp Conversations",
      auditor: "John Doe",
      date: "Today",
    },
    {
      id: "987643210",
      status:"Accepted",
      score: "70",
      scorecard: "Facebook DM",
      auditor: "Jane Doe",
      date: "Today",
    },
    {
      id: "123456890",
      status:"Accepted",
      score: "70",
      scorecard: "WhatsApp Conversations",
      auditor: "Alice Smith",
      date: "Today",
    },
    {
      id: "987643280",
      status:"Accepted",
      score: "60",
      scorecard: "Facebook DM",
      auditor: "Bob Brown",
      date: "Today",
    },
  ];

  const AuditorConversationHistoryData = [
    {
      id: "1234567850",
      agent: "Nisha Sharma",
      score: "30",
      scorecard: "WhatsApp Conversations",
      status: "Audit",
      date: "Today",
    },
    {
      id: "9876543210",
      agent: "Kartik Patel",
      score: "40",
      scorecard: "Facebook DM",
      status: "Audit",
      date: "Today",
    },
    {
      id: "1234567840",
      agent: "Nisha Sharma",
      score: "60",
      scorecard: "WhatsApp Conversations",
      status: "Audit",
      date: "Today",
    },
    {
      id: "9876843210",
      agent: "Kartik Patel",
      score: "80",
      scorecard: "Facebook DM",
      status: "Audit",
      date: "Today",
    },
    {
      id: "123567850",
      agent: "Nisha Sharma",
      score: "10",
      scorecard: "WhatsApp Conversations",
      status: "Audit",
      date: "Today",
    },
    {
      id: "987654320",
      agent: "Kartik Patel",
      score: "40",
      scorecard: "Facebook DM",
      status: "Audit",
      date: "Today",
    },
    {
      id: "123457840",
      agent: "Nisha Sharma",
      score: "50",
      scorecard: "WhatsApp Conversations",
      status: "Audit",
      date: "Today",
    },
    {
      id: "976843210",
      agent: "Kartik Patel",
      score: "90",
      scorecard: "Facebook DM",
      status: "Audit",
      date: "Today",
    },
  ];

  // Return different data based on role
  if ( isL1Agent) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(L1ConversationHistoryData);
      }, 0);
    });
  }
  if ( isL2Agent) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(L2ConversationHistoryData);
      }, 0);
    });
  }

  if (isAuditor) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(AuditorConversationHistoryData);
      }, 0);
    });
  }

  return [];
};




// export const getHistoryData = async (): Promise<ConversationData[]> => {
//   const response = await fetch("https://democrm.kapturecrm.com/api/history", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       role: "history",
//     }),
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch history data. Status: ${response.status}`);
//   }

//   const data: ConversationData[] = await response.json();
//   return data;
// };



// export const getHistoryData = async (): Promise<ConversationData[]> => {
//   // Dummy data for conversation history
//   const dummyData: ConversationData[] = [
//     {
//       ticketId: "1234567850",
//       agent: "Nisha Sharma",
//       score: "85",
//       scorecard: "Chat QA",
//       status: "Scored",
//       date: "Yesterday",
//     },
//     {
//       ticketId: "9876543210",
//       agent: "Kartik Patel",
//       score: "60",
//       scorecard: "Chat QA",
//       status: "Rebutted",
//       date: "Yesterday",
//     },
//     {
//       ticketId: "1234568890",
//       agent: "Ajay Kumar",
//       score: "75",
//       scorecard: "Chat QA",
//       status: "Accepted",
//       date: "2 Days Ago",
//     },
//     {
//       ticketId: "9876543280",
//       agent: "Kartik Singh",
//       score: "30",
//       scorecard: "Chat QA",
//       status: "Rebutted",
//       date: "2 Days Ago",
//     },
//     {
//       ticketId: "1234337850",
//       agent: "Nisha Sharma",
//       score: "45",
//       scorecard: "Chat QA",
//       status: "Scored",
//       date: "Yesterday",
//     },
//     {
//       ticketId: "9876546210",
//       agent: "Kartik Patel",
//       score: "20",
//       scorecard: "Chat QA",
//       status: "Rebutted",
//       date: "Yesterday",
//     },
//     {
//       ticketId: "1233968890",
//       agent: "Ajay Kumar",
//       score: "90",
//       scorecard: "Chat QA",
//       status: "Accepted",
//       date: "2 Days Ago",
//     },
//   ];

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dummyData); // Resolve the promise with the dummy data
//     }, 0); // Simulate a delay of 1 second
//   });
// };

