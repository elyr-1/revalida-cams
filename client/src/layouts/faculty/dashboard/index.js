import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useState, useEffect } from "react";
import * as studentService from "services/student";
import Schedules from "./components/Schedules";

function Dashboard() {
  const [students, setStudents] = useState([]);
  useEffect(async () => {
    await studentService.getStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="supervisor_account"
                title="TOTAL NO. OF STUDENTS ENROLLED"
                count={students.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "ATTENDANCE",
                }}
              />
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="ABSENT"
                count="none"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "ATTENDANCE",
                }}
              />
            </MDBox>
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="school"
                title="PASSED"
                count={students.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: " OF THE STUDENTS",
                }}
              />
            </MDBox>
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="leaderboard"
                title="FAILED"
                count="0"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "OF THE STUDENTS",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Schedules />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
