// import CoachingIcon from "@/app/assets/icons/CoachingIcon";
import ConversationsIcon from "@/app/assets/icons/ConversationsIcon";
import DashboardIcon from "@/app/assets/icons/DashboardIcon";
import ScoreCardIcon from "@/app/assets/icons/ScoreCardIcon";
// import CoachingRoutes from "@/app/features/coaching/CoachingRoutes";
import ConversationRoutes from "@/app/features/conversations/ConversationRoutes";
import DashboardRoutes from "@/app/features/dashboard/DashboardRoutes";
import scorecardRoutes from "@/app/features/scorecards/scorecardRoutes";
import RewardsPage from "@/app/components/RewardsPage";
import GiftNotification from "@/app/components/GiftNotification";
import ProductPage from  "@/app/components/Products"
import OrderPage from  "@/app/components/OrderPage"

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
    path: "/reward/*",
    element: RewardsPage,
    title: "Card",
    icon: ScoreCardIcon,
  },
  {
    path: "/notify/*",
    element: GiftNotification,
    title: "Card",
    icon: ScoreCardIcon,
  },
  {
    path: "/product/*",
    element: ProductPage,
    title: "Card",
    icon: ScoreCardIcon,
  },
  {
    path: "/order/*",
    element: OrderPage,
    title: "Card",
    icon: ScoreCardIcon,
  },
];

export default routesConfig;