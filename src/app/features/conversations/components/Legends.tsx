import React from "react";
import LightBulb from "@/app/assets/icons/LightBulb";
const Legends: React.FC = () => {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-cs">
      <div className="flex justify-start items-center gap-1.5">
        <LightBulb />
        <h4 className="text-blue-800 font-semibold">Legends</h4>
      </div>

      <ul className="mt-2 text-blue-700 list-disc list-inside">
        <li>
          The agent should fully resolve the issue with clear instructions and
          next steps.
        </li>
        <li>
          Ensure the customer understands the solution by explaining it in
          simple terms.
        </li>
        <li>
          The agent should confirm with the customer if any additional
          clarification is needed.
        </li>
      </ul>
    </div>
  );
};

export default Legends;
