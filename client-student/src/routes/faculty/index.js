// import Dashboard from "layouts/student/dashboard";
// import Grades from "layouts/student/grades";
// import Profile from "layouts/student/profile";
// import Courses from "layouts/student/courses";
import Dashboard from "layouts/faculty/dashboard";
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
  //   {
  //     type: "collapse",
  //     name: "Courses",
  //     key: "courses",
  //     icon: <Icon fontSize="small">library_books</Icon>,
  //     route: "/courses",
  //     component: <Courses />,
  //   },
  //   {
  //     type: "collapse",
  //     name: "Grades",
  //     key: "grades",
  //     icon: <Icon fontSize="small">grade</Icon>,
  //     route: "/grades",
  //     component: <Grades />,
  //   },
  //   {
  //     type: "collapse",
  //     name: "Profile",
  //     key: "profile",
  //     icon: <Icon fontSize="small">person</Icon>,
  //     route: "/profile",
  //     component: <Profile />,
  //   },
];

export default facultyRoutes;
