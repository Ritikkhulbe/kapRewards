import React from "react";

const AgentExpectations: React.FC = () => {
  return (
    <div className="p-4 bg-orange-50 border border-orange-200 rounded-cs">
      <h4 className="text-orange-800 font-semibold">Agent's Expectations</h4>
      <p className="mt-2 text-orange-700">
        Expected Score: <span className="font-bold">80%</span>
      </p>
    </div>
  );
};

export default AgentExpectations;
