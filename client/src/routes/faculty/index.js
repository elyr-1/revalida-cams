import Dashboard from "layouts/faculty/dashboard";
import Evaluation from "layouts/faculty/evaluation";
import Students from "layouts/faculty/students";
import Profile from "layouts/faculty/profile";
import Icon from "@mui/material/Icon";

const facultyRoutes = [
  {
    type: "collapse",
    name: "Faculty Dashboard",
    key: "dashboard/faculty",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard/faculty",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Evaluation",
    key: "evaluation",
    icon: <Icon fontSize="small">library_books</Icon>,
    route: "/evaluation",
    component: <Evaluation />,
  },
  {
    type: "collapse",
    name: "Students",
    key: "students",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/students",
    component: <Students />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];
export default facultyRoutes;
