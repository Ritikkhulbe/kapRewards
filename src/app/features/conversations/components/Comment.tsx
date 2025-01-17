import React from "react";

interface CommentProps {
  comment: string;
  onCommentChange: (newComment: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onCommentChange }) => {
  return (
    <div className="">
      <textarea
        value={comment}
        onChange={(e) => onCommentChange(e.target.value)}
        className="w-full p-2 border rounded-cs shadow-sm focus:ring focus:ring-blue-300"
        placeholder="Type here"
        rows={3}
      ></textarea>
    </div>
  );
};

export default Comment;
