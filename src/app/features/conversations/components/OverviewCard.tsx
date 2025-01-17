import { FC } from "react";

interface OverviewCardProps {
  title: string;
  value: string;
  icon?: JSX.Element; // Optional icon for additional visuals
  highlight?: boolean;
}

const OverviewCard: FC<OverviewCardProps> = ({
  title,
  value,
  icon,
  highlight,
}) => {
  return (
    <div
      className={`w-full h-full p-6 bg-white shadow-sm rounded-cs border border-gray-200 flex justify-start items-start gap-4 ${
        highlight ? "border border-red-500" : "bg-white"
      }`}
    >
      {/* Icon Section */}
      {icon && <div className="w-[75.43px] h-[66px] relative">{icon}</div>}

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-start items-start gap-2">
        {/* Title */}
        <div className="w-full h-5 flex justify-start items-start gap-2">
          <div className="flex-1 text-gray-500 text-sm font-medium leading-5">
            {title}
          </div>
        </div>

        {/* Value */}
        <div className="w-full h-[38px] flex justify-start items-center gap-4">
          <div className="text-gray-800 text-2xl font-semibold leading-[38px]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
