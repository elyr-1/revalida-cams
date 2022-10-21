/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function ViewScheduleForm({ schedule }) {
  return (
    <Grid>
      <Grid item>
        <CardHeader title="Schedule Details" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Code"
                  variant="standard"
                  fullWidth
                  name="subjectCode"
                  value={schedule.subjectCode}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Academic Year"
                  variant="standard"
                  fullWidth
                  name="academicYear"
                  value={schedule.academicYear}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  value={schedule.sem}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="Start Time"
                  variant="standard"
                  fullWidth
                  name="scheduleFrom"
                  value={schedule.scheduleFrom}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="End Time"
                  variant="standard"
                  fullWidth
                  name="scheduleTo"
                  value={schedule.scheduleTo}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Day"
                  variant="standard"
                  fullWidth
                  name="day"
                  value={schedule.day}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Section"
                  variant="standard"
                  fullWidth
                  name="section"
                  value={schedule.section}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Year Level"
                  variant="standard"
                  fullWidth
                  name="yearlevel"
                  value={schedule.yearlevel}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor No."
                  variant="standard"
                  fullWidth
                  name="professorNo"
                  value={schedule.professorNo}
                />
              </MDBox>
              <Divider />
            </MDBox>
          </MDBox>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default ViewScheduleForm;
