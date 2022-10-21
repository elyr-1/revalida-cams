/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import KeyboardDatePicker from "@material-ui/pickers/DatePicker";

function EditScheduleForm({ schedule, onEditSchedule }) {
  const id = schedule.sessionId;
  const [subjectCode, setSubjectCode] = useState(schedule.subjectCode);
  const [academicYear, setAcademicYear] = useState(schedule.academicYear);
  const [sem, setSem] = useState(schedule.sem);
  const [scheduleFrom, setScheduleFrom] = useState(schedule.scheduleFrom);
  const [scheduleTo, setScheduleTo] = useState(schedule.scheduleTo);
  const [day, setDay] = useState(schedule.day);
  const [section, setSection] = useState(schedule.address);
  const [yearlevel, setYearlevel] = useState(schedule.yearlevel);
  const [professorNo, setProfessorNo] = useState(schedule.professorNo);

  const updatedSchedule = {
    ...schedule,
    subjectCode,
    academicYear,
    sem,
    scheduleFrom,
    scheduleTo,
    day,
    section,
    yearlevel,
    professorNo,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditSchedule(id, updatedSchedule);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Schedule" sx={{ textAlign: "center" }} />
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
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Academic Year"
                  variant="standard"
                  fullWidth
                  name="academicyear"
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="Start Time"
                  variant="standard"
                  fullWidth
                  name="scheduleFrom"
                  value={scheduleFrom}
                  onChange={(e) => setScheduleFrom(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="End Time"
                  variant="standard"
                  fullWidth
                  name="scheduleTo"
                  value={scheduleTo}
                  onChange={(e) => setScheduleTo(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Day"
                  variant="standard"
                  fullWidth
                  name="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Section"
                  variant="standard"
                  fullWidth
                  name="section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Year Level"
                  variant="standard"
                  fullWidth
                  name="yearlevel"
                  value={yearlevel}
                  onChange={(e) => setYearlevel(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor No."
                  variant="standard"
                  fullWidth
                  name="professorNo"
                  value={professorNo}
                  onChange={(e) => setProfessorNo(e.target.value)}
                />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth type="submit">
                  save
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default EditScheduleForm;
