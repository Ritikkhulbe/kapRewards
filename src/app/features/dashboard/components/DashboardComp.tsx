
import { useEffect, useState } from "react"
import { fetchDashboardDataV3 } from "../fetcher";
import { ReactECharts, ReactEChartsProps } from "@/app/components/ReactEchart";
import { Card } from "@/components/ui/card";

const dashboardFetcherPayload = {
  "timeline": "LAST_MONTH", 
  "empId": "0", 
  "isPrevious": true, 
  "dsatScore": 0
}

//auto vs manual qa graph
const option: ReactEChartsProps["option"] | any = {
  dataset: {
    source: [
      ["Week", "Auto QA", "Manual QA"],
      ["Monday", 4, 1],
      ["Tuesday", 2, 0],
      ["Wednesday", 3, 6],
      ["Thursday", 5, 1],
      ["Friday", 3, 5],
      ["Saturday", 2, 6],
    ],
  },
  title:{
    text: "Auto QA vs Manual QA",
    show: true,
    textStyle: {
      fontSize: '14px',
      color: '#68717f',
      fontWeight: '300',
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Auto QA", "Manual QA"],
    bottom: 0,
    lineStyle: {
      color: "#fff",
    }
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "20%",
    bottom: "20%",
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
    splitLine: {
      onZero: false,
      lineStyle: {
        width: 2,
        type: 'dashed',
        opacity: 0.3,
      },
    }
  },
  series: [
    {
      type: "line",
      label: {
        show: false,
      },
      smooth: true,
      symbol: "none",
    },
    {
      type: "line",
      label: {
        show: false,
      },
      smooth: true,
      symbol: "none",
    },
  ],
};

//channel breakdown graph

const DashboardComp = () => {

  const [graph1Data, setGraph1Data] = useState<any[]>([])

  const Data = [
    { title: "Chat Ettiquettes", percentage: 92.34 },
    { title: "Chat Handling", percentage: 88.94 },
    { title: "Folder Selection", percentage: 55.78 },
    { title: "Response Accuracy", percentage: 78.92 },
    { title: "Greetings and Personalization", percentage: 28.45 },
    { title: "Chat Ettiquettes", percentage: 92.34 },
    { title: "Chat Handling", percentage: 88.94 },
    { title: "Folder Selection", percentage: 55.78 },
    { title: "Response Accuracy", percentage: 78.92 },
    { title: "Greetings and Personalization", percentage: 28.45 },
  ]

  const [data, setData] = useState<any>(Data)

  useEffect(() => {
      setGraph1Data(Data)

    const fetchDashboardData = async () => {
      const response = await fetchDashboardDataV3(dashboardFetcherPayload);
      setData(response);
    }

    fetchDashboardData();
  }, [])

  useEffect(() => {
    console.log("Data", data)
  }, [data])
  
  return (
    <>
      
        <Card className=" font-light text-[14px] text-textsecondary-light h-[50vh] p-3 w-[70%] mr-[1%] bg-primary">
          <ReactECharts option={option} />
        </Card>
    </>
  )
}

export default DashboardComp