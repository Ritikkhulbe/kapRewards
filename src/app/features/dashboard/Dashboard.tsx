import GenericLayout, { GenericLayoutButton, GenericLayoutDescription, GenericLayoutHeader, GenericLayoutNotification } from "@/app/genericComponents/GenericLayout"
import withReducer from "@/app/utils/withReducer"
import dashboardSlice from "./store/slice/dashboardSlice"
import { useEffect } from "react"
import { useAppDispatch } from "@/store/hooks"
import { exampleAction } from "./store/actions/exampleAction"
import DashboardHeader from "./components/DashboardHeader"

const Dashboard = () => {

  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    console.log("Dashboard component mounted")
    dispatch(exampleAction("Hello World"))
  },[])

  return (
    <GenericLayout>
      <GenericLayoutHeader> Kap Rewards </GenericLayoutHeader>
      <GenericLayoutNotification>5</GenericLayoutNotification>
      <GenericLayoutDescription> Your current Rewards Portal</GenericLayoutDescription>
      <GenericLayoutButton>
        <div className="px-5 py-2 rounded-[20px] bg-blue-500">5 Reward Points</div>
      </GenericLayoutButton>
      <DashboardHeader />
    </GenericLayout>
  )
}

export default withReducer("dashboard", dashboardSlice)(Dashboard)