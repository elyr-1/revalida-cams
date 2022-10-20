/*
import Dashboard from "layouts/student/dashboard";
import Grades from "layouts/student/grades";
import Profile from "layouts/student/profile";
import Courses from "layouts/student/courses";
*/
import Dashboard from "layouts/parent/dashboard";
import Grades from "layouts/parent/grades";
import Attendance from "layouts/parent/attendance";
import Profile from "layouts/parent/profile";
import Icon from "@mui/material/Icon";

const parentRoutes = [
  {
    type: "collapse",
    name: "Parent Dashboard",
    key: "dashboard/parent",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard/parent",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Attendance",
    key: "attendance",
    icon: <Icon fontSize="small">library_books</Icon>,
    route: "/attendance",
    component: <Attendance />,
  },

  {
    type: "collapse",
    name: "Grades",
    key: "grades",
    icon: <Icon fontSize="small">grade</Icon>,
    route: "/grades",
    component: <Grades />,
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

export default parentRoutes;
