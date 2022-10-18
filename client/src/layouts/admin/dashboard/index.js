import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import * as programService from "services/program";
import * as subjectService from "services/subject";
import * as facultyService from "services/faculty";
import * as studentService from "services/student";
import AdminUsers from "./components/users";

function Dashboard() {
  const [programs, setPrograms] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(async () => {
    await programService.getPrograms().then((response) => {
      setPrograms(response.data);
    });
  }, []);

  useEffect(async () => {
    await subjectService.getSubjects().then((response) => {
      setSubjects(response.data);
    });
  }, []);

  useEffect(async () => {
    await facultyService.getProfessors().then((response) => {
      setProfessors(response.data);
    });
  }, []);

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
                color="dark"
                icon="workspace_premium"
                title="Programs"
                count={programs.length}
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "more than last academic year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="library_books"
                title="Courses"
                count={subjects.length}
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "more than last academic year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="supervisor_account"
                title="Faculty Members"
                count={professors.length}
                percentage={{
                  color: "success",
                  amount: "+10%",
                  label: "more than last semester",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="school"
                title="Students"
                count={students.length}
                percentage={{
                  color: "success",
                  amount: "+20%",
                  label: "more than last semester",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <AdminUsers />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
