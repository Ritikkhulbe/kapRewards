import { FC, useState } from "react";
import AlertHexagon from "@/app/assets/icons/AlertHexagon";
import GroupIcon from "@/app/assets/icons/GroupIcon";
import AuditorRebuttalView from "./AuditorRebuttalView";

interface EvaluationItemProps {
  title: string;
  score: string;
  autoQA: string;
  ztFailed: boolean;
  role: string; // Role: e.g., "Auditor"
}

const EvaluationItem: FC<EvaluationItemProps> = ({
  title,
  score,
  autoQA,
  ztFailed,
  role,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showGroupComponent, setShowGroupComponent] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
    setShowGroupComponent(false); // Ensure group component is hidden if toggling details
  };

  const handleGroupIconClick = () => {
    setShowGroupComponent((prev) => !prev);
    setShowDetails(false); // Hide details when toggling group/Auditor component
  };

  const handleCancel = () => {
    setShowGroupComponent(false);
  };

  const detailsData = [
    {
      title: "Tone",
      secured: "20%",
      evidence:
        "The agent displayed excellent chat etiquette, earning a high score by greeting the customer warmly, responding promptly, and maintaining a clear, empathetic tone. They concluded the conversation professionally, leaving a positive impression through active listening and thoughtful responses.",
    },
    // Other detail items...
  ];

  return (
    <div className="w-full bg-white rounded-cs border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
        <div className="flex-1 text-gray-800 font-semibold text-sm">
          {title}
        </div>
        <div className="flex-1 flex items-center gap-2">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
            <div className="absolute inset-0 rounded-full border-4 border-green-600"></div>
          </div>
          <div className="text-green-600 font-semibold text-sm">{score}</div>
        </div>
        <div className="flex-1 text-blue-600 font-medium text-sm">{autoQA}</div>
        {ztFailed && (
          <div className="flex-1 flex items-center gap-1">
            <AlertHexagon />
            <div className="text-gray-600 font-semibold text-xs">ZT</div>
          </div>
        )}
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded-full font-semibold text-sm cursor-pointer"
          onClick={handleToggleDetails}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
        <button
          className="px-3 py-1 text-white rounded-full font-semibold text-sm cursor-pointer"
          onClick={handleGroupIconClick}
        >
          <GroupIcon />
        </button>
      </div>

      {/* Conditional Group Component Section */}
      {showGroupComponent && (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-b-md">
          {role === "Auditor" ? (
            <AuditorRebuttalView />
          ) : (
            <div className="flex flex-col gap-4">
              {/* Expected Score Section */}
              <div className="flex items-start gap-8">
                <div className="w-[200px]">
                  <div className="text-[#373C43] text-sm font-semibold">
                    Expected Score
                  </div>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-[175px] p-2 border border-[#C6CBD1] rounded-cs"
                    placeholder="Expected Score"
                  />
                </div>
              </div>

              {/* Comment Section */}
              <div className="flex items-start gap-8">
                <div className="w-[200px]">
                  <div className="text-[#373C43] text-sm font-semibold">
                    Comment
                  </div>
                </div>
                <div className="flex-1">
                  <textarea
                    className="w-full p-3 border border-[#D0D5DD] rounded-cs"
                    rows={4}
                    placeholder="Type here..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-white text-[#373C43] border border-[#C6CBD1] rounded-cs font-semibold"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-[#277DF9] text-white rounded-cs font-semibold">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Details Section */}
      {showDetails && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          {detailsData.map((detail, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-800 font-semibold text-sm">
                  {detail.title}
                </div>
                <div className="text-sm">
                  <span className="font-normal text-gray-800">Secured: </span>
                  <span className="font-semibold text-gray-800">
                    {detail.secured}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="text-gray-600 text-sm">{detail.evidence}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvaluationItem;
