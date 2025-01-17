import GenericLayout, { GenericLayoutButton, GenericLayoutDescription, GenericLayoutHeader, GenericLayoutNotification } from "@/app/genericComponents/GenericLayout"
import { useEffect, useState } from "react"

const CoachingRoutes = () => {
  
  const [notificationNumber, setNotificationNumber] = useState<string>("0") 

  useEffect(()=>{
      setNotificationNumber("6")
  },[])


  return (
    <GenericLayout>
      <GenericLayoutHeader>Coaching</GenericLayoutHeader>
      <GenericLayoutDescription>Personalized learning resources to help agents improve skills and boost performance</GenericLayoutDescription>
      <GenericLayoutNotification>{notificationNumber}</GenericLayoutNotification>
      <GenericLayoutButton>Upload</GenericLayoutButton>
    <div>Coaching routes</div>
    </GenericLayout>
  )
}

export default CoachingRoutes