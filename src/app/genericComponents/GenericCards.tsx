import ArrorDown from "@/app/assets/icons/ArrorDown";
import ArrorUp from "@/app/assets/icons/ArrorUp";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SingleBar from "./smallerComponents/SingleBar";

const SmallCard = ({
  title,
  number,
  percentage,
  variant = "up",
}: {
  title: string;
  number: string;
  percentage?: Number;
  variant?: "up" | "down";
}) => {
  var classes;

  if (variant === "up") {
    classes = "text-[#159A5C] border-[#9CDFC0] bg-[#ECFDF3]";
  } else {
    classes = "text-red-400 bg-red-50 border-red-400";
  }

  return (
    <Card className="px-6 py-6 w-[32.7%] last:mr-0 bg-primary">
      <CardTitle className="font-light text-[14px] text-textsecondary-light">
        {title}
      </CardTitle>
      <CardDescription className="text-3xl font-bold flex items-center pt-1">
        {number.toString()}
        {percentage && (
          <span
            className={
              "ml-2 flex justify-center items-center rounded-xl border px-3 text-[12px] h-[24px] gap-1" +
              " " +
              classes
            }
          >
            {variant === "up" ? <ArrorUp /> : <ArrorDown />}
            {percentage.toString()}%
          </span>
        )}
      </CardDescription>
    </Card>
  );
};

const SkeletonSmallCard = () => {
  return (
    <Card className="p-6 w-[24.25%] mr-[1%] last:mr-0 bg-primary">
      <CardTitle className="font-light text-[14px] text-textsecondary-light">
        <Skeleton className="h-[18px] w-[140px] bg-fourth rounded-xl    " />
      </CardTitle>
      <CardDescription className="text-3xl font-bold flex items-center pt-2">
        <Skeleton className="h-[36px] w-[100px] bg-fourth rounded-xl" />
        <span
          className={
            "ml-2 flex justify-center items-center rounded-xl border  text-[12px] h-[20px] gap-1"
          }
        >
          <Skeleton className="h-[20px] w-[50px] bg-fourth rounded-xl" />
        </span>
      </CardDescription>
    </Card>
  );
};

const SingleBarCard = ({
  title,
  graphData,
}: {
  title: string;
  graphData: { title: string; percentage: number }[];
}) => {
  return (
    <Card className="px-1 pt-3 pb-5 w-[24.25%] mr-[1%] last:mr-0 bg-primary h-[50vh] ">
      <CardTitle className="font-light text-[14px] text-textsecondary-light mb-2 pt-2 px-3">
        {title}
      </CardTitle>
      <div className="flex flex-col px-3 justify-evenly w-full p-0 overflow-scroll h-[92%] bg-primary">
        {graphData.map((data, index) => (
          <SingleBar
            key={index}
            title={data.title}
            percentage={data.percentage}
          />
        ))}
      </div>
    </Card>
  );
};

const SkeletonSingleBarCard = ({ numberOfBars }: { numberOfBars: number }) => {
  return (
    <Card className="px-6 py-3 w-[24.25%] mr-[1%] last:mr-0 bg-primary h-[50vh]">
      <CardTitle className="font-light text-[14px] text-textsecondary-light mt-1 mb-4">
        <Skeleton className="h-[24px] w-[140px] bg-fourth rounded-xl" />
      </CardTitle>
      {[...Array(numberOfBars)].map((_, index) => (
        <div key={index}>
          <div
            className={
              "w-full mt-2 h-4 rounded-[6px] overflow-hidden bg-secondary"
            }
          >
            <Skeleton className={"h-full bg-fourth"} style={{ width: `80%` }} />
          </div>
          <div className="flex justify-between items-center pt-1 px-1">
            <Skeleton className="w-24 h-[14px] bg-fourth rounded-[8px]" />
            <Skeleton className="w-8 h-[14px] bg-fourth rounded-[8px]" />
          </div>
        </div>
      ))}
    </Card>
  );
};

export { SmallCard, SkeletonSmallCard, SingleBarCard, SkeletonSingleBarCard };
