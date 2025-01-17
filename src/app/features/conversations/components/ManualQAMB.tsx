import { useParams } from "react-router-dom";
import { useState } from "react";
import ManualQAScoreCard from "./ManualQAScoreCard";
import TranscriptContainer from "./TranscriptContainer";
import { useNavigate } from "react-router-dom";
import { withPublicUrl } from "@/util";
import ScoringView from "./ScoringView";
import { useSearchParams } from "react-router-dom";

const ManualQAMB = () => {
  const { ticketId } = useParams(); // Get ticketId from URL path
  const [searchParams] = useSearchParams(); // Retrieve query parameters
  const role = searchParams.get("role"); // Extract 'role' query parameter
  const agent = searchParams.get("agent"); // Extract 'agent' if available
  const [showTranscript, setShowTranscript] = useState(role !== "Auditor");

  const viewScoringScreen = searchParams.get("viewScoring") === "true";
  const navigate = useNavigate();
  console.log(agent, "ticket");

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 p-4 ml-3">
        <div
          className="text-gray-500 text-sm font-medium cursor-pointer"
          onClick={() => navigate(withPublicUrl("/conversations/agent/L1"))}
        >
          Conversations
        </div>
        <svg
          className="w-4 h-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <div className="text-gray-800 text-sm font-semibold">
          Ticket #{ticketId}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col border border-gray-200 rounded-cs mt-4 mr-6 mb-5 ml-6">
        <div className="flex flex-1">
          {/* TranscriptContainer */}
          {showTranscript && (
            <div
              className="w-1/2 bg-gray-50 flex items-center justify-center border-r border-gray-200"
              style={{ height: "calc(100vh - 90px)" }}
            >
              <div
                className="w-full h-full overflow-y-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE and Edge
                }}
              >
                <TranscriptContainer />
              </div>
            </div>
          )}

          {viewScoringScreen ? (
            <div
              className="w-1/2 bg-gray-50 flex items-center justify-center border-r border-gray-200"
              style={{ height: "calc(100vh - 90px)" }}
            >
              <div
                className="w-full h-full overflow-y-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE and Edge
                }}
              >
                <ScoringView />
              </div>
            </div>
          ) : (
            <div
              className={`${showTranscript ? "w-1/2" : "w-full"} flex flex-col`}
              style={{ height: "calc(100vh - 90px)" }}
            >
              <div
                className="w-full h-full overflow-y-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE and Edge
                }}
              >
                <ManualQAScoreCard
                  showTranscript={showTranscript}
                  setShowTranscript={setShowTranscript}
                  agent={agent}
                  role={role}
                  viewScoringScreen={viewScoringScreen}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ManualQAMB;
