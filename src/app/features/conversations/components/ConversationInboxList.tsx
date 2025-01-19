import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhatsappIcon from "@/app/assets/icons/WhatsappIcon";
import { withPublicUrl } from "@/util";

interface ConversationInboxL1 {
  id: string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
}
interface ConversationInboxL2 {
  id: string;
  score: string;
  scorecard: string;
  auditor: string;
  date: string;
  status: string;
}

interface ConversationInboxAuditor {
  id: string;
  agent: string;
  score: string;
  scorecard: string;
  type: string;
  date: string;
}

export const ConversationInboxTable: React.FC<any> = ({ data, role }) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const navigate = useNavigate();

  //const isL2Agent = withPublicUrl(location.pathname).includes("/agent/L2");

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2">
      <table
        className="table-auto w-full border-separate"
        style={{ borderSpacing: "0 8px" }}
      >
        <thead>
          <tr className="bg-gray-50 text-gray-400 font-medium text-sm">
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
              />
            </th>

            {role === "Auditor" && (
              <>
                <th className="px-4 py-2 text-left">Ticket ID</th>
                <th className="px-4 py-2 text-left">Agent</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Scorecard</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Date</th>
              </>
            )}
            {(role === "L1Agent" || role === "L2Agent") && (
              <>
                <th className="px-4 py-2 text-left">Ticket ID</th>
                <th className="px-4 py-2 text-left">Score</th>

                <th className="px-4 py-2 text-left">Scorecard</th>
                <th className="px-4 py-2 text-left">Auditor</th>
                <th className="px-4 py-2 text-left">Date</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr
              key={item.id}
              className={`${
                hoveredRow === item.id
                  ? "bg-blue-50 border-blue-200"
                  : index % 2 === 0
                  ? "bg-white"
                  : "bg-gray-50"
              } border border-gray-200 cursor-pointer`}
              style={{
                borderRadius: hoveredRow === item.id ? "8px" : undefined,
                overflow: "hidden", // Ensures content respects the rounded corners
              }}
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
              // onClick={() => {
              //   navigate(
              //     withPublicUrl(
              //       `/conversations/tickets/${item.id}?viewScoring=false`
              //     )
              //   );
              // }}
              onClick={() =>
                navigate(
                  withPublicUrl(
                    `/conversations/tickets/${item.id}?role=${role}${
                      role === "Auditor"
                        ? `&agent=${(item as ConversationInboxAuditor).agent}`
                        : ""
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
                      <WhatsappIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {(item as ConversationInboxAuditor).id}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {(item as ConversationInboxAuditor).agent
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {(item as ConversationInboxAuditor).agent}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number((item as ConversationInboxAuditor).score) >= 80
                            ? "border-green-400"
                            : Number(
                                (item as ConversationInboxAuditor).score
                              ) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{(item as ConversationInboxAuditor).score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium text-sm">
                    {(item as ConversationInboxAuditor).scorecard}
                  </td>
                  <td className="px-4 py-3">
                    <div className="px-3 py-1 bg-yellow-50 rounded-full flex items-center">
                      <span className="text-yellow-500 text-sm font-semibold">
                        {(item as ConversationInboxAuditor).type}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-sm">
                    {(item as ConversationInboxAuditor).date}
                  </td>
                </>
              )}
              {role === "L1Agent" && (
                <>
                  <td className="px-4 py-3 flex">
                    <div className="flex items-center gap-2">
                      <WhatsappIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {(item as ConversationInboxL1).id}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number((item as ConversationInboxL1).score) >= 80
                            ? "border-green-400"
                            : Number((item as ConversationInboxL1).score) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{(item as ConversationInboxL1).score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium text-sm">
                    {(item as ConversationInboxL1).scorecard}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {(item as ConversationInboxL1).auditor
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {(item as ConversationInboxL1).auditor}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-gray-500 text-sm">
                    {(item as ConversationInboxL1).date}
                  </td>
                </>
              )}
              {role === "L2Agent" && (
                <>
                  <td className="px-4 py-3 flex">
                    <div className="flex items-center gap-2">
                      <WhatsappIcon />
                      <span className="text-gray-700 font-semibold text-sm">
                        {(item as ConversationInboxL2).id}
                      </span>
                    </div>
                  </td>
                  {/* <td className="px-4 py-3 relative">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        (item as ConversationInboxL2).status ===
                        "Rebutted to L2"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {(item as ConversationInboxL2).status}
                    </div>
                  </td> */}

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          Number((item as ConversationInboxL2).score) >= 80
                            ? "border-green-400"
                            : Number((item as ConversationInboxL2).score) >= 50
                            ? "border-yellow-400"
                            : "border-red-400"
                        }`}
                      ></div>
                      <span>{(item as ConversationInboxL2).score}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium text-sm">
                    {(item as ConversationInboxL2).scorecard}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded-full flex justify-center items-center text-blue-600 font-semibold text-xs">
                        {(item as ConversationInboxL2).auditor
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {(item as ConversationInboxL2).auditor}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-gray-500 text-sm">
                    {(item as ConversationInboxL2).date}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
