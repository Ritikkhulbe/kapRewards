import CoachingIcon from "@/app/assets/icons/CoachingIcon";
import ConversationsIcon from "@/app/assets/icons/ConversationsIcon";
import DashboardIcon from "@/app/assets/icons/DashboardIcon";
import ScoreCardIcon from "@/app/assets/icons/ScoreCardIcon";
import CoachingRoutes from "@/app/features/coaching/CoachingRoutes";
import ConversationRoutes from "@/app/features/conversations/ConversationRoutes";
import DashboardRoutes from "@/app/features/dashboard/DashboardRoutes";
import scorecardRoutes from "@/app/features/scorecards/scorecardRoutes";

interface RouteConfig {
  path: string;
  element: () => JSX.Element;
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
    path: "/conversations/*",
    element: ConversationRoutes,
    title: "Conversations",
    icon: ConversationsIcon,
  },
  {
    path: "/scorecard/*",
    element: scorecardRoutes,
    title: "Score Card",
    icon: ScoreCardIcon,
  },
  {
    path: "/coaching/*",
    element: CoachingRoutes,
    title: "Coaching",
    icon: CoachingIcon,
  },
];

export default routesConfig;