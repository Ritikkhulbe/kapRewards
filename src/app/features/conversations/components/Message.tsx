import { FC } from "react";
import MessageBubble from "./MessageBubble";

interface MessageProps {
  sender: string;
  role: string;
  text: string;
  timestamp: string;
}

const Message: FC<MessageProps> = ({ sender, role, text, timestamp }) => {
  const isAgent = role === "agent";

  // Extract the first two letters of the sender's name
  const senderInitials = sender
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex ${isAgent ? "flex-row-reverse" : "flex-row"} mb-4 gap-3`}
    >
      {/* Avatar Placeholder with Sender Initials */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 border border-black/10">
        <span className="text-sm font-medium text-gray-700">
          {senderInitials}
        </span>
      </div>

      {/* Message Content */}
      <div
        className={`flex flex-col flex-1 ${
          isAgent ? "items-end" : "items-start"
        } gap-2`}
      >
        {/* Sender and Timestamp */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="text-gray-400">{timestamp}</span>
          <span className="text-gray-800 font-medium">{sender}</span>
        </div>

        {/* Message Bubble */}
        <MessageBubble text={text} isAgent={isAgent} />
      </div>
    </div>
  );
};

export default Message;
