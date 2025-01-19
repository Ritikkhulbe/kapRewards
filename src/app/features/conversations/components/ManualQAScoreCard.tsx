import { useParams } from "react-router-dom";
import { FC } from "react";
import OverviewSection from "./OverviewSection";
import EvaluationReportSection from "./EvaluationReportSection";

interface ManualQAScoreCardProps {
  showTranscript: boolean;
  setShowTranscript: React.Dispatch<React.SetStateAction<boolean>>;
  agent: string | null;
  role: string | null;
  viewScoringScreen: boolean;
}

const ManualQAScoreCard: FC<ManualQAScoreCardProps> = ({
  showTranscript,
  setShowTranscript,
  role,
  agent,
  viewScoringScreen,
}) => {
  const { ticketId } = useParams<{ ticketId: string }>();

  console.log(ticketId, "ticket");

  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* Overview Section */}
      <OverviewSection
        showTranscript={showTranscript}
        setShowTranscript={setShowTranscript}
        role={role}
        agent={agent}
        ticketId={ticketId}
        viewScoringScreen={viewScoringScreen}
      />

      {/* Evaluation Report Section */}
      <EvaluationReportSection role={role} />
    </div>
  );
};

export default ManualQAScoreCard;
