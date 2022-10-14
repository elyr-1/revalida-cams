/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import Dashboard from "layouts/admin/dashboard";
import AdminUsers from "layouts/admin/users";
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
    name: "Admin Users",
    key: "users",
    icon: <Icon fontSize="small">admin_panel_settings</Icon>,
    route: "/users",
    component: <AdminUsers />,
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
    name: "Students",
    key: "students",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/students",
    component: <Students />,
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
