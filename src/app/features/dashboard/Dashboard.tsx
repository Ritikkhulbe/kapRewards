import GenericLayout, {
  GenericLayoutButton,
  GenericLayoutDescription,
  GenericLayoutHeader,
  GenericLayoutNotification,
} from "@/app/genericComponents/GenericLayout";
import withReducer from "@/app/utils/withReducer";
import dashboardSlice from "./store/slice/dashboardSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { exampleAction } from "./store/actions/exampleAction";
import DashboardHeader from "./components/DashboardHeader";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({ agent_name: "", reward_point: 0 });
  const [error, setError] = useState({ message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://kaprewards.onrender.com/rewards/get?cmId=1&empId=1"
        );
        console.log(response);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dashboard component mounted");
    dispatch(exampleAction("Hello World"));
  }, []);

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
            {data?.reward_point || 0} Reward Points
          </div>
          <div className="px-5 py-2 rounded-[20px] bg-fourth">
            {data?.agent_name || error?.message}
          </div>
        </div>
      </GenericLayoutButton>
      <DashboardHeader data={data} />
    </GenericLayout>
  );
};

export default withReducer("dashboard", dashboardSlice)(Dashboard);
