/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function ViewStudentForm({ student }) {
  return (
    <Grid>
      <Grid item>
        <CardHeader title="Student Info" sx={{ textAlign: "center" }} />
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
                  value={student.studentNo}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  name="firstname"
                  value={student.firstname}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Middle Name"
                  variant="standard"
                  fullWidth
                  name="middlename"
                  value={student.middlename}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  name="lastname"
                  value={student.lastname}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Year Level"
                  variant="standard"
                  fullWidth
                  name="yearlevel"
                  value={student.yearlevel}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  value={student.sem}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Grades"
                  variant="standard"
                  fullWidth
                  name="grades"
                  value={student.grades}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Program"
                  variant="standard"
                  fullWidth
                  name="program"
                  value={student.program}
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

export default ViewStudentForm;
