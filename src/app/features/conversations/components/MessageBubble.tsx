import { FC } from "react";

interface MessageBubbleProps {
  text: string;
  isAgent: boolean;
}

const MessageBubble: FC<MessageBubbleProps> = ({ text, isAgent }) => {
  return (
    <div
      className={`p-4 text-base leading-6 rounded-lg shadow-md w-full h-full flex items-center gap-2 
      ${
        isAgent
          ? "bg-blue-500 text-white rounded-tl-cs rounded-tr-cs rounded-br-cs"
          : "bg-gray-200 text-black rounded-tl-cs rounded-tr-cs rounded-bl-cs justify-end"
      }`}
    >
      <div className="flex-1 break-words font-normal">{text}</div>
    </div>
  );
};

export default MessageBubble;
