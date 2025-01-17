import { useState, useEffect } from "react";
import { ConversationInboxTable } from "./components/ConversationInboxList";
import { ConversationHistoryTable } from "./components/ConversationHistory";
import { Header } from "./components/ConversationHeader";
import GenericLayout, {
  GenericLayoutDescription,
  GenericLayoutHeader,
  GenericLayoutNotification,
} from "@/app/genericComponents/GenericLayout";

import { getInboxData } from "./components/fetcher";
import { getHistoryData } from "./components/fetcher";
import {
  L1ConversationDataSet,
  L2ConversationDataSet,
  AuditorConversationDataSet,
  L1ConversationHistoryDataSet,
  L2ConversationHistoryDataSet,
  AuditorConversationHistoryDataSet,
} from "./components/fetcher/types";

import { useLocation } from "react-router-dom";
import { withPublicUrl } from "@/util";

export default function Conversation() {
  const [activeTab, setActiveTab] = useState<string>("inbox");
  const [notificationCount, setNotificationCount] = useState<number>(0);

  const [conversationInboxData, setConversationInboxData] = useState<
    | L1ConversationDataSet[]
    | L2ConversationDataSet[]
    | AuditorConversationDataSet[]
  >([]);
  const [conversationHistoryData, setConversationHistoryData] = useState<
    | L1ConversationHistoryDataSet[]
    | L2ConversationHistoryDataSet[]
    | AuditorConversationHistoryDataSet[]
  >([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();

  // Identify role based on URL path

  const isAuditor = withPublicUrl(location.pathname).includes("/auditormain");
  const isL1Agent = withPublicUrl(location.pathname).includes("/agent/L1");
  const isL2Agent = withPublicUrl(location.pathname).includes("/agent/L2");

  const role = isAuditor
    ? "Auditor"
    : isL1Agent
    ? "L1Agent"
    : isL2Agent
    ? "L2Agent"
    : "Unknown";

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        if (activeTab === "inbox") {
          const inboxData = await getInboxData(isL1Agent, isL2Agent, isAuditor);
          setConversationInboxData(inboxData);
          setNotificationCount(inboxData.length);
        } else if (activeTab === "history") {
          const historyData = await getHistoryData(
            isL1Agent,
            isL2Agent,
            isAuditor
          );
          setConversationHistoryData(historyData);
          setNotificationCount(historyData.length);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, isL1Agent, isL2Agent, isAuditor]);

  return (
    <GenericLayout>
      <GenericLayoutHeader>Conversations</GenericLayoutHeader>
      <GenericLayoutNotification>{notificationCount}</GenericLayoutNotification>
      <GenericLayoutDescription>
        View and manage the overall quality assurance process, including ticket
        evaluations and performance scores.
      </GenericLayoutDescription>

      <Header onTabChange={handleTabChange} role={role} />

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {!loading && !error && activeTab === "inbox" && (
        <ConversationInboxTable data={conversationInboxData} role={role} />
      )}
      {!loading && !error && activeTab === "history" && (
        <ConversationHistoryTable data={conversationHistoryData} role={role} />
      )}
    </GenericLayout>
  );
}
