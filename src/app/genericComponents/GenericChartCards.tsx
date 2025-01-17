import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "red",
  },
  mobile: {
    label: "Mobile",
    color: "blue",
  },
} satisfies ChartConfig;

const DoubleLineGraph = () => {
  return (
    <Card className="px-6 py-6 w-[49.5%] mr-[1%] last:mr-0 h-[50vh] flex flex-col overflow-hidden bg-primary">
      <CardTitle className="font-light text-[14px] text-textsecondary-light">
        Auto QA vs Manual QA
      </CardTitle>
      <ChartContainer config={chartConfig} className="pt-4 h-full w-full">
        {/* The container for scrolling */}
        <div className="w-[100%]">
          <LineChart
            data={chartData}
            width={100}
            height={100}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value}
              interval={0}

            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickMargin={4} 
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="red"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="blue"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
      </ChartContainer>
    </Card>
  );
};

export { DoubleLineGraph };
