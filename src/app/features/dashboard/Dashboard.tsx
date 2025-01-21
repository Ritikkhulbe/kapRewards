import { useEffect, useState } from "react";
import GenericLayout, {
  GenericLayoutButton,
  GenericLayoutDescription,
  GenericLayoutHeader,
  GenericLayoutNotification,
} from "@/app/genericComponents/GenericLayout";
import withReducer from "@/app/utils/withReducer";
import dashboardSlice from "./store/slice/dashboardSlice";
import { useAppDispatch } from "@/store/hooks";
import { exampleAction } from "./store/actions/exampleAction";
import DashboardHeader from "./components/DashboardHeader";
import { API_URL_GET } from "@/constants";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  // State for storing API data
  const [name, setName] = useState<string>("");
  const [reward, setReward] = useState<number>(0);

  // Fetch data when the component mounts
  useEffect(() => {
    console.log("Dashboard component mounted");
    dispatch(exampleAction("Hello World"));

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL_GET);
        const data = await response.json();
        // Extract name and reward from the API response
        setName(data.agent_name);
        setReward(data.reward_point);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch]); // Empty dependency array ensures it runs only once

  return (
    <GenericLayout>
      <GenericLayoutHeader> Kap Rewards </GenericLayoutHeader>
      <GenericLayoutNotification>5</GenericLayoutNotification>
      <GenericLayoutDescription>
        {" "}
        Your current Rewards Portal
      </GenericLayoutDescription>
      <GenericLayoutButton>
        <div className="flex items-center gap-2">
          <div className="px-5 py-2 rounded-[20px] bg-blue-500">
            {/* Dynamically displaying reward points */}
            {reward} Reward Points
          </div>
          <div className="px-5 py-2 rounded-[20px] bg-fourth">
            {/* Dynamically displaying user name */}
            {name}
          </div>
        </div>
      </GenericLayoutButton>
      <DashboardHeader />
    </GenericLayout>
  );
};

export default withReducer("dashboard", dashboardSlice)(Dashboard);
