import { Home, AccountCircle, Dashboard } from "@material-ui/icons";
import { HomePage, AccountPage, DashboardPage } from "src/pages";

export const ROUTES = [
  { name: "Home", path: "/", Component: HomePage, Icon: Home },
  {
    name: "Account",
    path: "/account",
    Component: AccountPage,
    Icon: AccountCircle,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    Component: DashboardPage,
    Icon: Dashboard,
  },
];
