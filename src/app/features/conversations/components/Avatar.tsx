import { FC } from "react";

interface AvatarProps {
  name: string;
  role: "agent" | "customer";
}

const Avatar: FC<AvatarProps> = ({ name, role }) => {
  const isAgent = role === "agent";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return isAgent ? (
    <img
      src="https://via.placeholder.com/40"
      alt={`${name}'s avatar`}
      className="w-10 h-10 rounded-full border border-gray-300"
    />
  ) : (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold">
      {initials}
    </div>
  );
};

export default Avatar;
