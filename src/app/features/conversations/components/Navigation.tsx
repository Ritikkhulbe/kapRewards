import React from "react";

interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-300">
      <button
        disabled={currentQuestion === 1}
        onClick={onPrevious}
        className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">
        {currentQuestion} / {totalQuestions}
      </span>
      <button
        disabled={currentQuestion === totalQuestions}
        onClick={onNext}
        className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
