import React from "react";
import XCloseIcon from "@/app/assets/icons/XCloseIcon";

interface SendForRebuttalProps {
  onClose: () => void;
}

const SendForRebuttal: React.FC<SendForRebuttalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-cs overflow-hidden border border-gray-300 flex flex-col justify-start items-start gap-6 relative">
        {/* Header Section */}
        <div className="w-full h-[88px] flex flex-col justify-start items-start gap-4">
          <div className="w-full h-[28px] flex justify-between items-center">
            {/* Title */}
            <div className="flex flex-1 h-full justify-start items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Send for rebuttal
              </h2>
            </div>
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full border border-gray-400 flex justify-center items-center"
            >
              <XCloseIcon />
            </button>
          </div>
          {/* Subtext */}
          <div className="w-full">
            <span className="text-sm font-normal text-gray-500">
              Are you certain you want to submit your expected score and
              comments for{" "}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              rebuttal
            </span>
            <span className="text-sm font-normal text-gray-500">?</span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full flex justify-end items-center gap-5">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="flex-1 h-9 px-3 py-1.5 border border-[#C6CBD1] rounded-cs flex justify-center items-center gap-2"
          >
            <span className="text-[#373C43] text-sm font-semibold">Cancel</span>
          </button>

          {/* Send Button */}
          <button className="flex-1 h-9 px-3 py-1.5 bg-[#277DF9] rounded-cs flex justify-center items-center gap-2">
            <span className="text-white text-sm font-semibold">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendForRebuttal;
