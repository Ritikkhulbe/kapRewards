import { useState } from "react";
import MessageTextSquare from "@/app/assets/icons/MessageTextSquare";
import Comment from "./Comment";
import XCloseIcon from "@/app/assets/icons/XCloseIcon";

const AddCommentButton = () => {
  const [showComment, setShowComment] = useState(false); // State to toggle comment component
  const [comment, setComment] = useState(""); // State to handle comment text

  return (
    <div className="flex flex-col w-full h-full justify-start items-start gap-1">
      <div className="flex w-full justify-between items-center gap-1.5">
        {/* Add Comment Button */}
        <button
          onClick={() => setShowComment(true)} // Toggle visibility
          className="flex justify-start items-center gap-1.5 p-2 hover:bg-muted rounded-md transition"
        >
          <MessageTextSquare />
          <span className="text-sm font-semibold text-blue-500">
            Add Comment
          </span>
        </button>

        {/* XCloseIcon */}
        {showComment && (
          <button
            onClick={() => setShowComment(false)} // Close Comment
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <XCloseIcon />
          </button>
        )}
      </div>

      {/* Show Comment Component Conditionally */}
      {showComment && (
        <div className="w-full">
          <Comment comment={comment} onCommentChange={setComment} />
        </div>
      )}
    </div>
  );
};

export default AddCommentButton;
