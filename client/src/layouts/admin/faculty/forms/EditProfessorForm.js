/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function EditProfessorForm({ professor, onEditProfessor }) {
  const id = professor.professorId;
  const [professorNo, setProfessorNo] = useState(professor.professorNo);
  const [professorName, setProfessorName] = useState(professor.professorName);
  const [gender, setGender] = useState(professor.gender);
  const [birthdate, setBirthdate] = useState(professor.birthdate);
  const [address, setAddress] = useState(professor.address);

  const updatedProfessor = { ...professor, professorNo, professorName, gender, birthdate, address };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfessor(id, updatedProfessor);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Professor" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor No."
                  variant="standard"
                  fullWidth
                  name="professorNo"
                  value={professorNo}
                  onChange={(e) => setProfessorNo(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor Name"
                  variant="standard"
                  fullWidth
                  name="professorName"
                  value={professorName}
                  onChange={(e) => setProfessorName(e.target.value)}
                  required
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
                  label="Address"
                  variant="standard"
                  fullWidth
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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

export default EditProfessorForm;
