import { useState } from "react";
import { FC } from "react";
import OverviewCard from "./OverviewCard";
import { SmileIcon } from "lucide-react";
import MessageChatSquare from "@/app/assets/icons/messageChatSquare";
import FrameIcon from "@/app/assets/icons/Frame";
import { withPublicUrl } from "@/util";
import { useNavigate } from "react-router-dom";

interface OverviewSectionProps {
  showTranscript: boolean;
  setShowTranscript: React.Dispatch<React.SetStateAction<boolean>>;
  role: string | null;
  agent: string | null;
  ticketId: string | undefined;
  viewScoringScreen: boolean;
}

const OverviewSection: FC<OverviewSectionProps> = ({
  showTranscript,
  setShowTranscript,
  role,
  agent,
  viewScoringScreen,
  ticketId,
}) => {
  const handleToggleTranscript = () => {
    setShowTranscript((prev) => !prev);
  };
  const [isExpanded, setIsExpanded] = useState(true);
  const [scoreTicketView] = useState(viewScoringScreen);
  const navigate = useNavigate();
  console.log(showTranscript, "showTranscript");

  const summaryText = `
  Olivia reached out to Kapture Support because her SoundPro 300
  headset was continuously playing audio and wouldn't turn off. Alex,
  the support agent, acknowledged her frustration and asked for the
  headset model. After confirming the model, Alex walked her through
  the steps to reset the device. Olivia successfully followed the
  instructions, and the headset turned off. She expressed her
  gratitude, and Alex ensured she had no further questions before
  closing the conversation on a positive note.
`;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  // const handleScoringView = () => {
  //   setScoreTicketView(true);
  // };
  console.log("hii", scoreTicketView);
  return (
    <div className="w-full p-6 bg-[#F5F8FF] flex flex-col">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-800 text-lg font-semibold leading-6">
          Overview
        </div>
        {role === "Auditor" ? (
          <div className="flex gap-2">
            {showTranscript ? (
              ""
            ) : (
              <div className="flex items-center gap-2 mr-8">
                <span className="gap-2 text-sm text-gray-500">Agent:</span>
                <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                  {agent && agent
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {agent}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5">
                <MessageChatSquare />
              </div>
              <button
                className="text-blue-600 mr-4 font-semibold leading-6 text-sm underline cursor-pointer border-0"
                onClick={handleToggleTranscript}
              >
                {showTranscript ? "Hide Transcript" : "View Transcript"}
              </button>
            </div>
            {showTranscript ? (
              ""
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-4.5 h-4.5">
                  <FrameIcon />
                </div>
                <button
                  className="text-blue-600 text-sm font-semibold leading-6 underline cursor-pointer border-0"
                  onClick={() => {
                    setShowTranscript(true); // Set showTranscript to true
                    navigate(
                      withPublicUrl(
                        `/conversations/tickets/${ticketId}?viewScoring=true`
                      )
                    );
                  }}
                >
                  Score Ticket
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5">
                <MessageChatSquare />
              </div>
              <button
                className="text-blue-600 text-lg font-semibold leading-6 underline cursor-pointer border-0"
                onClick={handleToggleTranscript}
              >
                {showTranscript ? "Hide Transcript" : "View Transcript"}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Overview Cards Section */}
      <div
        className={`grid gap-4 mb-6 ${
          showTranscript ? "grid-cols-2" : "grid-cols-4"
        }`}
      >
        <OverviewCard title="Score" icon={<SmileIcon />} value="62%" />
        <OverviewCard title="Average Sentiment" value="" icon={<SmileIcon />} />

        <OverviewCard title="Handling Time" value="15 mins" />
        <OverviewCard title="ZT Failed" value="None" highlight />
      </div>

      {/* Summary Section */}

      <div>
        {showTranscript ? (
          <>
            <p className="text-gray-800 text-sm leading-6">
              {isExpanded ? summaryText : `${summaryText.substring(0, 150)}...`}
            </p>
            <button
              onClick={handleToggle}
              className="text-blue-500 text-sm font-semibold mt-2 underline"
            >
              {isExpanded ? "View Less" : "View More"}
            </button>
          </>
        ) : (
          <div className="flex w-full h-full justify-start items-start gap-4">
            {/* Summary Section */}
            <div className="flex-1 p-5 bg-white shadow-sm rounded-cs border border-gray-200 flex flex-col justify-start items-start gap-3">
              <div className="text-gray-500 text-sm font-medium leading-6 break-words">
                Summary
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="text-gray-900 text-sm font-normal leading-6 break-words">
                  {summaryText}
                </p>
              </div>
            </div>

            {/* Issue Tags Section */}
            <div className="w-[309px] self-stretch p-5 bg-white shadow-sm rounded-cs border border-gray-200 flex flex-col justify-start items-start gap-6">
              {/* Header */}
              <div className="w-full flex items-center">
                <div className="text-gray-500 text-sm font-semibold">
                  Issue Tags
                </div>
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div className="text-[#E737F6] font-medium ">Complaints</div>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-[#FDEBFE] text-[#E737F6] text-xs font-medium rounded-full">
                  Delivery Issue
                </div>
                <div className="px-3 py-1 bg-[#FDEBFE] text-[#E737F6] text-xs font-medium rounded-full">
                  Billing Discrepancy
                </div>
                <div className="px-3 py-1 bg-[#FDEBFE] text-[#E737F6] text-xs font-medium rounded-full">
                  Product Defect
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewSection;
