import { Route, Routes } from "react-router-dom";
import Conversation from "./Conversation";
import ManualQAMB from "./components/ManualQAMB";

const ConversationRoutes = () => {
  return (
    <Routes>
      {/* L1 Agent Route */}
      <Route path="agent/l1" element={<Conversation />} />
      <Route path="/" element={<Conversation />} />

      {/* L2 Agent Route */}
      <Route path="agent/l2" element={<Conversation />} />

      {/* Auditor Route */}
      <Route path="auditormain" element={<Conversation />} />

      {/* Ticket Route */}
      <Route path="tickets/:ticketId" element={<ManualQAMB />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default ConversationRoutes;
