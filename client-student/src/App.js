import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
// import facultyRoutes from "routes/faculty";
// import adminRoutes from "routes/admin";
import studentRoutes from "routes/student";
import Login from "layouts/authentication/login";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import * as authService from "services/auth";
import Swal from "sweetalert2";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    await authService.getUsers().then((response) => {
      setUsers(response.data);
      users.map((user) => user);
    });
  }, []);

  const authUsers = users;

  const handleLogin = (username, password) => {
    authUsers.forEach((user) => {
      if (user.username === username && user.password === password && user.roleId === 1) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/admin");
      }
      if (user.username === username && user.password === password && user.roleId === 2) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/faculty");
      }
      if (user.username === username && user.password === password && user.roleId === 3) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/student");
      }
      if (user.username === username && user.password === password && user.roleId === 4) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/parent");
      }
      // Swal.fire({
      //   icon: "error",
      //   title: "Error",
      //   text: "Username or password is incorrect",
      // });
    });
  };

  // const navigationRoutes = () => {
  //   const roleId = 1;
  //   if (roleId === 1) {
  //     return adminRoutes;
  //   }
  //   if (roleId === 2) {
  //     return facultyRoutes;
  //   }
  //   if (roleId === 3) {
  //     return studentRoutes;
  //   }

  //   return null;
  // };

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Eight Institute"
            routes={studentRoutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(studentRoutes)}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </ThemeProvider>
  );
}
