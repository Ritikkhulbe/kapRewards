// import CoachingIcon from "@/app/assets/icons/CoachingIcon";
import ConversationsIcon from "@/app/assets/icons/ConversationsIcon";
import DashboardIcon from "@/app/assets/icons/DashboardIcon";
import ScoreCardIcon from "@/app/assets/icons/ScoreCardIcon";
// import CoachingRoutes from "@/app/features/coaching/CoachingRoutes";
import DashboardRoutes from "@/app/features/dashboard/DashboardRoutes";
import scorecardRoutes from "@/app/features/scorecards/scorecardRoutes";
import RewardsPage from "@/app/components/RewardsPage";
import GiftNotification from "@/app/components/GiftNotification";
import CoachingIcon from "@/app/assets/icons/CoachingIcon";

interface RouteConfig {
  path: string;
  element: (props:any) => JSX.Element;
  title: string;
  icon: ({isActive}: {isActive:boolean}) => JSX.Element;
}

const routesConfig: RouteConfig[] = [
  {
    path: "/dashboard/*",
    element: DashboardRoutes,
    title: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/reward/*",
    element: RewardsPage,
    title: "Card",
    icon: ConversationsIcon,
  },
  {
    path: "/scorecard/*",
    element: scorecardRoutes,
    title: "Score Card",
    icon: ScoreCardIcon,
  },
  {
    path: "/notify/*",
    element: GiftNotification,
    title: "Card",
    icon: CoachingIcon,
  },

];

export default routesConfig;