import React from "react";
import { CommonQuestion } from "./fetcher/types";

interface DynamicQuestionProps {
  question: CommonQuestion;
  onMarkFatal?: (id: string) => void;
  onSelectChoice?: (id: string, choice: string) => void;
}

const MarkFatalButton: React.FC<{
  isFatalMarked?: boolean;
  onClick?: () => void;
}> = ({ isFatalMarked, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 border rounded-cs text-base font-semibold ${
      isFatalMarked
        ? "text-red-500 border-red-500 bg-red-100 cursor-default"
        : "text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
    }`}
    disabled={isFatalMarked}
  >
    {isFatalMarked ? "Fatal Marked" : "Mark Fatal"}
  </button>
);

const DynamicQuestion: React.FC<DynamicQuestionProps> = ({
  question,
  onMarkFatal,
  onSelectChoice,
}) => {
  return (
    <div className="flex flex-col w-full gap-4 p-4 border-b border-gray-300">
      {/* Title Section */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-400">
          {question.category}
        </span>
        <span className="text-base font-semibold text-foreground">
          {question.title}
        </span>
      </div>

      {/* Content Section */}
      {(() => {
        switch (question.type) {
          case "scored":
            return (
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">Score:</span>
                  <input
                    type="text"
                    defaultValue={question.score}
                    className="w-10 px-3 py-2 shadow-sm border rounded-cs border-gray-300 text-center text-sm font-semibold"
                  />
                  <span className="text-sm font-normal text-muted-foreground">
                    Max. score:
                  </span>
                  <span className="text-sm font-semibold">
                    {question.maxScore} pts
                  </span>
                </div>
              </div>
            );

          case "yesNo":
            return (
              <div className="flex items-center gap-4 mt-2">
                {question.choices?.map((choice) => (
                  <button
                    key={choice}
                    className="px-3 py-2 text-sm bg-white border border-gray-200 hover:bg-gray-300 rounded"
                    onClick={() => onSelectChoice?.(question.id, choice)}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            );

          case "markedFatal":
            return (
              <span className="text-red-600 text-sm font-semibold">
                This question has been marked as Fatal.
              </span>
            );

          default:
            return null;
        }
      })()}

      {/* Mark Fatal Button */}
      <div className="self-end">
        <MarkFatalButton
          isFatalMarked={question.isFatalMarked}
          onClick={() => onMarkFatal?.(question.id)}
        />
      </div>
    </div>
  );
};

export default DynamicQuestion;
