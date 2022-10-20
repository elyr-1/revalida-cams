import Dashboard from "layouts/admin/dashboard";
import Programs from "layouts/admin/programs";
import Courses from "layouts/admin/courses";
import Students from "layouts/admin/students";
import Faculty from "layouts/admin/faculty";
import Profile from "layouts/admin/profile";
import Parents from "layouts/admin/parents";
import Icon from "@mui/material/Icon";

const adminRoutes = [
  {
    type: "collapse",
    name: "Admin Dashboard",
    key: "dashboard/admin",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard/admin",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Programs",
    key: "programs",
    icon: <Icon fontSize="small">workspace_premium</Icon>,
    route: "/programs",
    component: <Programs />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">library_books</Icon>,
    route: "/courses",
    component: <Courses />,
  },
  {
    type: "collapse",
    name: "Faculty",
    key: "faculty",
    icon: <Icon fontSize="small">engineering</Icon>,
    route: "/faculty",
    component: <Faculty />,
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
    name: "Parents",
    key: "parents",
    icon: <Icon fontSize="small">supervisor_account</Icon>,
    route: "/parents",
    component: <Parents />,
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

export default adminRoutes;
