import { useEffect, useState } from "react";

const SingleBar = ({
  title,
  percentage,
  data,
}: {
  title: string;
  percentage?: number;
  data?: any;
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  // Update the current percentage smoothly when the component mounts or the percentage changes
  useEffect(() => {
    if (percentage === undefined) return;
    setTimeout(() => {
      setCurrentPercentage((percentage * 100) / data[0].total_points);
    }, 100);
  }, [percentage]);

  var bar_colour, bar_bg_colour;
  if (percentage !== undefined) {
    if (percentage < 33) {
      bar_colour = "bg-pink-200";
      bar_bg_colour = "bg-red-50";
    } else if (percentage < 66) {
      bar_colour = "bg-green-200";
      bar_bg_colour = "bg-[#FDF4E8]";
    } else {
      bar_colour = "bg-purple-300";
      bar_bg_colour = "bg-[#E8F8F5]";
    }
  }

  console.log(bar_bg_colour);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center pt-1 px-1">
        <div className="text-[20px] font-semibold text-fourth-dark">
          {title}
        </div>
        <div className="text-[20px] font-semibold text-fourth-dark">
          {percentage}
        </div>
      </div>
      <div className={`w-full mt-1 h-4 rounded-[6px] overflow-hidden bg-white`}>
        {/* Transition on width */}
        <div
          className={`h-full ${bar_colour} rounded-r-[6px]`}
          style={{
            width: `${currentPercentage}%`,
            transition: "width 1s ease-in-out", // Smooth transition for the width
          }}
        >
          {""}
        </div>
      </div>
    </div>
  );
};

export default SingleBar;
