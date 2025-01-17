import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotIcon from "@/app/assets/icons/BotIcon";
import RebuttalHistory from "./RebuttalHistory";
import { withPublicUrl } from "@/util";

interface ConversationHistory {
  id: string;
  agent: string;
  score: string | number;
  scorecard: string;
  status: string;
  auditor: string;
  date: string;
}

interface ConversationHistoryTableProps {
  data: ConversationHistory[];
  role: string;
}

export const ConversationHistoryTable: React.FC<
  ConversationHistoryTableProps
> = ({ data, role }) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showRebuttalHistory, setShowRebuttalHistory] =
    useState<boolean>(false);
  const [rebuttalHistoryData, setRebuttalHistoryData] = useState<any[]>([]);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const navigate = useNavigate();

  const handleStatusHover = (
    status: string,
    event: React.MouseEvent<HTMLTableCellElement>
  ) => {
    if (status === "Rebutted") {
      const rect = event.currentTarget.getBoundingClientRect();
      setPopupPosition({
        top: rect.top + window.scrollY - 5, // Position tooltip below status
        left: rect.left + window.scrollX,
      });
      // Mocked Rebuttal History
      setRebuttalHistoryData([
        {
          date: "January 23, 2024",
          user: "You",
          userInitials: "KP",
          message: "Rebutted the conversation.",
        },
        {
          date: "January 24, 2024",
          user: "Auditor",
          userInitials: "AR",
          message: "Reviewed the rebuttal.",
        },
      ]);
      setShowRebuttalHistory(true);
    }
  };

  const handleStatusLeave = () => {
    setShowRebuttalHistory(false);
    setPopupPosition(null);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-600 text-sm font-medium">
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
              />
            </th>
            {role === "Auditor" && (
              <>
                {" "}
                <th className="px-4 py-2 text-left">Ticket ID</th>
                <th className="px-4 py-2 text-left">Agent</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Scorecard</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </>
            )}
            {(role === "L1Agent" || role === "L2Agent") && (
              <>
                {" "}
                <th className="px-4 py-2 text-left">Ticket ID</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Scorecard</th>
                <th className="px-4 py-2 text-left">Auditor</th>
                <th className="px-4 py-2 text-left">Date</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={
                hoveredRow === item.id
                  ? "bg-blue-50 hover:bg-blue-100 cursor-pointer"
                  : "hover:bg-gray-50 cursor-pointer"
              }
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() =>
                navigate(
                  withPublicUrl(
                    `/conversations/tickets/${item.id}?role=${role}${
                      role === "Auditor" ? `&agent=${item.agent}` : ""
                    }`
                  )
                )
              }
            >
              <td className="px-4 py-3">
                {hoveredRow === item.id && (
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded focus:ring-blue-500"
                    style={{ border: "1px solid #DFE2E6" }}
                  />
                )}
              </td>
              {role === "Auditor" && (
                <>
                  <td className="px-4 py-3 flex">
                    <div className="flex items-center gap-2">
                      <BotIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {item.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {item.agent
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {item.agent}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number(item.score) >= 80
                            ? "border-green-400"
                            : Number(item.score) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{item.score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{item.scorecard}</td>
                  <td
                    className="px-4 py-3 relative"
                    onMouseEnter={(e) => handleStatusHover(item.status, e)}
                    onMouseLeave={handleStatusLeave}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Rebutted"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{item.date}</td>
                </>
              )}

              {role === "L1Agent" && (
                <>
                  <td className="px-4 py-3 flex">
                    <div className="flex items-center gap-2">
                      <BotIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {item.id}
                      </span>
                    </div>
                  </td>
                  <td
                    className="px-4 py-3 relative"
                    onMouseEnter={(e) => handleStatusHover(item.status, e)}
                    onMouseLeave={handleStatusLeave}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Rebutted"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number(item.score) >= 80
                            ? "border-green-400"
                            : Number(item.score) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{item.score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{item.scorecard}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {item.auditor
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {item.auditor}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{item.date}</td>
                </>
              )}
              {role === "L2Agent" && (
                <>
                  <td className="px-4 py-3 flex">
                    <div className="flex items-center gap-2">
                      <BotIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {item.id}
                      </span>
                    </div>
                  </td>
                  <td
                    className="px-4 py-3 relative"
                    onMouseEnter={(e) => handleStatusHover(item.status, e)}
                    onMouseLeave={handleStatusLeave}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Rebutted"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number(item.score) >= 80
                            ? "border-green-400"
                            : Number(item.score) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{item.score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{item.scorecard}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {item.auditor
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {item.auditor}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{item.date}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Rebuttal History Tooltip */}
      {showRebuttalHistory && popupPosition && (
        <div
          className="absolute bg-white shadow-md border rounded p-4 w-64"
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
            zIndex: 50,
          }}
        >
          <RebuttalHistory history={rebuttalHistoryData} />
        </div>
      )}
    </div>
  );
};
