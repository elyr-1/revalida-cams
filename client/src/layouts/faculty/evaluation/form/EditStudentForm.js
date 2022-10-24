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

function EditStudentForm({ student, onEditStudent }) {
  const id = student.studentId;
  const [studentNo, setStudentNo] = useState(student.studentNo);
  const [firstname, setFirstname] = useState(student.firstname);
  const [middlename, setMiddlename] = useState(student.middlename);
  const [lastname, setLastname] = useState(student.lastname);
  const [yearlevel, setYearlevel] = useState(student.yearlevel);
  const [sem, setSem] = useState(student.sem);
  const [grades, setGrades] = useState(student.grades);
  const [status, setStatus] = useState(student.status);
  const [program, setProgram] = useState(student.program);

  const updatedStudent = {
    ...student,
    studentNo,
    firstname,
    middlename,
    lastname,
    program,
    grades,
    status,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditStudent(id, updatedStudent);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Student Info" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Student No."
                  variant="standard"
                  fullWidth
                  name="studentNo"
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Middle Name"
                  variant="standard"
                  fullWidth
                  name="middlename"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
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
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Grades"
                  variant="standard"
                  fullWidth
                  name="grades"
                  value={grades}
                  onChange={(e) => setGrades(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Status"
                  variant="standard"
                  fullWidth
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Program"
                  variant="standard"
                  fullWidth
                  name="program"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
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

export default EditStudentForm;
