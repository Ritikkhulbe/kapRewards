// fetcher/types.ts
// export interface WhatsAppMessage {
//     messageId: string;
//     postedByUserNumber: string;
//     whatsappNumber: string;
//     message: string;
//     createdTime: string;
//   }
  
//   export interface GetMessagesResponse {
//     response: {
//       whatsapp: WhatsAppMessage[];
//     };
//   }


  export interface MessageTranscript {
    conversationType:string;
    whatsappNumber:string;
    postedByUserNumber:string;
    postedByUserId:string;
    pageId:string;
    postedBy:string;
    postType:string;
    sent:string;
    isAutoResponse:string;
    type:string;
    

  }
  

  export interface GetMessagesResponse {
    response: {
      MessageTranscripts: MessageTranscript[];
    };
  }


export interface CommonQuestion {
  id: string;
  type: "scored" | "yesNo" | "markedFatal";
  title: string;
  category:string;
  score?: number;
  maxScore?: number;
  choices?: string[]; // For choice-based questions
  isFatalMarked?: boolean; // For fatal marked status
}

// API Response type
export interface ApiResponse {
  questions: CommonQuestion[];
}



export interface L1ConversationDataSet {
  id: string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
 
}
export interface L2ConversationDataSet {
  id: string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
 
}

export interface AuditorConversationDataSet {
  id: string;
  agent: string;
  score: string;
  scorecard: string;
  type: string;
  date: string;
  
}

export interface L1ConversationHistoryDataSet {
  id: string;
  status:string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
 
}
export interface L2ConversationHistoryDataSet {
  id: string;
  status:string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
 
}

export interface AuditorConversationHistoryDataSet {
  id: string;
  agent: string;
  score: string;
  scorecard: string;
  status: string;
  date: string;
  
}

export interface ConversationData {
  ticketId: string;
  agent: string;
  score: string;
  scorecard: string;
  status: string;
  date: string;
}




