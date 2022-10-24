/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import KeyboardDatePicker from "@material-ui/pickers/DatePicker";

function EditStudentForm({ student, onEditStudent }) {
  const id = student.studentId;
  const [studentNo, setStudentNo] = useState(student.studentNo);
  const [firstname, setFirstname] = useState(student.firstname);
  const [middlename, setMiddlename] = useState(student.middlename);
  const [lastname, setLastname] = useState(student.lastname);
  const [birthdate, setBirthdate] = useState(student.birthdate);
  const [gender, setGender] = useState(student.gender);
  const [address, setAddress] = useState(student.address);
  const [yearlevel, setYearlevel] = useState(student.yearlevel);
  const [sem, setSem] = useState(student.sem);
  const [programId, setProgramId] = useState(student.programId);
  const [program, setProgram] = useState(student.program);
  const [sectionId, setSectionId] = useState(student.sectionId);

  const updatedStudent = {
    ...student,
    studentNo,
    firstname,
    middlename,
    lastname,
    birthdate,
    gender,
    address,
    yearlevel,
    sem,
    programId,
    program,
    sectionId,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditStudent(id, updatedStudent);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Student" sx={{ textAlign: "center" }} />
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
                  type="date"
                  label="Birthdate"
                  variant="standard"
                  fullWidth
                  name="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Gender"
                  variant="standard"
                  fullWidth
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Address"
                  variant="standard"
                  fullWidth
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  label="Program ID"
                  variant="standard"
                  fullWidth
                  name="programId"
                  value={programId}
                  onChange={(e) => setProgramId(e.target.value)}
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
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Section ID"
                  variant="standard"
                  fullWidth
                  name="sectionId"
                  value={sectionId}
                  onChange={(e) => setSectionId(e.target.value)}
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
