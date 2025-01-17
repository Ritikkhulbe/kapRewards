import { useEffect, useState } from 'react';

const SingleBar = ({ title, percentage }: { title: string, percentage?: number }) => {

    const [currentPercentage, setCurrentPercentage] = useState(0);

    // Update the current percentage smoothly when the component mounts or the percentage changes
    useEffect(() => {
        if (percentage === undefined) return;
        setTimeout(() => {
            setCurrentPercentage(percentage);
        },100)
    }, [percentage]);

    var bar_colour, bar_bg_colour;
    if (percentage !== undefined) {
        if (percentage < 33) {
            bar_colour = "bg-red-500";
            bar_bg_colour = "bg-red-50";
        } else if (percentage < 66) {
            bar_colour = "bg-[#ECA23F]";
            bar_bg_colour = "bg-[#FDF4E8]";
        } else {
            bar_colour = "bg-[#42C286]";
            bar_bg_colour = "bg-[#E8F8F5]";
        }
    }

    return (
        <div>
            <div className={`w-full mt-2 h-4 rounded-[6px] overflow-hidden ${bar_bg_colour}`}>
                {/* Transition on width */}
                <div
                    className={`h-full ${bar_colour}`}
                    style={{
                        width: `${currentPercentage}%`,
                        transition: 'width 1s ease-in-out' // Smooth transition for the width
                    }}
                ></div>
            </div>
            <div className="flex justify-between items-center pt-1 px-1">
                <div className="text-[10px] font-semibold text-fourth-dark">{title}</div>
                <div className="text-[10px] font-semibold text-fourth-dark">{percentage}%</div>
            </div>
        </div>
    );
}

export default SingleBar;
