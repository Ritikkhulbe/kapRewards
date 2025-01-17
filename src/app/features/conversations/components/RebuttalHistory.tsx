import React from "react";

interface RebuttalHistoryProps {
  history: {
    date: string;
    user: string;
    userInitials: string;
    message: string;
    isUser: boolean;
  }[];
}

const RebuttalHistory: React.FC<RebuttalHistoryProps> = ({ history }) => (
  <div className="p-4 bg-white shadow-md rounded-cs border border-[#DFE2E6] flex flex-col gap-4">
    <div className="text-lg font-semibold text-gray-700">Rebuttal History</div>
    <ul className="space-y-4">
      {history.map((entry, index) => (
        <li key={index} className="flex flex-col gap-2">
          <div className="text-xs text-gray-500">{entry.date}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* User Initials or Avatar */}
              <div
                className={`w-6 h-6 ${
                  entry.isUser ? "bg-blue-100" : "bg-[#E9F2FE]"
                } border border-[#BCD7FD] rounded-full flex justify-center items-center`}
              >
                <span
                  className={`text-xs font-semibold text-${
                    entry.isUser ? "blue-600" : "gray-600"
                  }`}
                >
                  {entry.userInitials}
                </span>
              </div>
              <div className="text-sm font-medium text-gray-700">
                {entry.user}
              </div>
            </div>
            <div className="text-sm text-gray-500">{entry.message}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RebuttalHistory;
