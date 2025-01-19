import { useState, FC } from "react";
import EvaluationItem from "./EvaluationItem";
import SendForRebuttal from "./SendRebuttal";

interface EvaluationReportSectionProps {
  role: string | null;
}

const EvaluationReportSection: FC<EvaluationReportSectionProps> = ({
  role,
}) => {
  const [showRebuttalModal, setShowRebuttalModal] = useState(false);

  const evaluationItems = [
    "Chat Etiquettes",
    "Response Speed",
    "Empathy & Tone",
    "Resolution Effectiveness",
    "Customer Satisfaction",
    "Chat Etiquettes",
    "Response Speed",
    "Empathy & Tone",
    "Resolution Effectiveness",
    "Customer Satisfaction",
  ];

  const handleSendRebuttalClick = () => {
    setShowRebuttalModal(true);
  };

  const handleCloseRebuttalModal = () => {
    setShowRebuttalModal(false);
  };

  return (
    <div className="p-6 border-t border-[#F2F3F4] flex flex-col gap-4 bg-white">
      {/* Footer Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-[#DFE2E6]">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <h3 className="text-[#373C43] text-base font-semibold">
            Evaluation Report
          </h3>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex items-center gap-3">
          {/* Accept Score Button */}
          <button className="px-6 py-2 border border-[#DFE2E6] shadow-sm rounded-cs text-[#7A8595] font-semibold text-sm leading-[22px]">
            Accept Score
          </button>

          {/* Send Rebuttal Button */}
          <button
            onClick={handleSendRebuttalClick}
            className="px-6 py-2 bg-[#277DF9] shadow-sm rounded-cs text-white font-semibold text-sm leading-[22px]"
          >
            Send Rebuttal
          </button>
        </div>
      </div>

      {/* Scrollable Evaluation Items Section */}
      <div
        className="flex flex-col gap-2 max-h-72 overflow-auto"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        {evaluationItems.map((item, index) => (
          <EvaluationItem
            key={index}
            title={item}
            score="80%"
            autoQA="Auto QA"
            ztFailed
            role={role}
            onDetailsClick={() => alert(`${item} Details`)}
          />
        ))}
      </div>

      {showRebuttalModal && (
        <SendForRebuttal onClose={handleCloseRebuttalModal} />
      )}
    </div>
  );
};

export default EvaluationReportSection;
