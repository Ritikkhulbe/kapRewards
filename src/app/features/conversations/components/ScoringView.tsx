import React, { useState, useEffect } from "react";
import DynamicQuestion from "./Question";

import Description from "./Description";
import Legends from "./Legends";
import AgentExpectations from "./AgentExpectations";

import AddCommentButton from "./AddCommentButton";

import { CommonQuestion } from "./fetcher/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dummyQuestions: CommonQuestion[] = [
  {
    id: "1",
    type: "scored",
    category: "Issue Resolution",
    title:
      "The agent provided a clear and concise resolution, explaining all steps involved.",
    score: 2,
    maxScore: 5,
  },
  {
    id: "2",
    type: "yesNo",
    category: "Customer Satisfaction",
    title:
      "Demonstrated empathy by actively listening to the customer’s concerns.",
    choices: ["Yes", "No", "N/A"],
  },
  {
    id: "3",
    type: "yesNo",
    category: "Customer Satisfaction",
    title: "The agent used inappropriate language or tone.",
    choices: ["N/A"],
  },
];

const ScoringView: React.FC = () => {
  const [questions, setQuestions] = useState<CommonQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestions(dummyQuestions);
  }, []);

  const handleMarkFatal = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isFatalMarked: true } : q))
    );
  };

  const handleSelectChoice = (id: string, choice: string) => {
    console.log(`Selected ${choice} for question ID ${id}`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="w-full px-3 bg-white border-b border-gray-200 flex justify-between items-center py-3">
        <div className="text-gray-800 text-lg font-medium">Manual QA</div>
        <div className="flex items-center gap-2">
          <div className="text-gray-600 text-base font-medium">Score:</div>
          <svg className="w-6 h-6" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#DFE2E6"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3"
              strokeDasharray="50"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div className="text-gray-800 text-lg font-semibold">50%</div>
        </div>
      </div>

      {/* Question Section */}
      <div className="space-y-4 p-4">
        {currentQuestion && (
          <DynamicQuestion
            question={currentQuestion}
            onMarkFatal={handleMarkFatal}
            onSelectChoice={handleSelectChoice}
          />
        )}

        <AddCommentButton />
        <Description />
        <Legends />
        <AgentExpectations />
      </div>

      {/* Navigation Section */}
      {/* <div className="flex justify-between px-4 py-2">
        <button
          onClick={() =>
            setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
          }
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentQuestionIndex((prev) =>
              Math.min(prev + 1, questions.length - 1)
            )
          }
          disabled={currentQuestionIndex === questions.length - 1}
          className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded"
        >
          Next
        </button>
      </div> */}
      {/* Navigation Section */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
        <div className="flex shadow-sm rounded-cs border border-gray-300 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentQuestionIndex === 0}
            className="flex items-center justify-center px-4 py-2 border-r border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) =>
                Math.min(prev + 1, questions.length - 1)
              )
            }
            disabled={currentQuestionIndex === questions.length - 1}
            className="flex items-center justify-center px-4 py-2 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Save & Continue Button */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-cs shadow-sm font-semibold">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ScoringView;
