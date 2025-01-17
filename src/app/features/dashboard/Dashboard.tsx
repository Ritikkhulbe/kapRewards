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
      <GenericLayoutHeader> Dashboard </GenericLayoutHeader>
      <GenericLayoutNotification>5</GenericLayoutNotification>
      <GenericLayoutDescription> Your current QA summary and activity </GenericLayoutDescription>
      <GenericLayoutButton> Export report </GenericLayoutButton>
      <DashboardHeader />
    </GenericLayout>
  )
}

export default withReducer("dashboard", dashboardSlice)(Dashboard)