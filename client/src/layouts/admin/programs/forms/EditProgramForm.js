/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function EditProgramForm({ program, onEditProgram }) {
  const id = program.programId;
  const [programCode, setProgramCode] = useState(program.programCode);
  const [programTitle, setProgramTitle] = useState(program.programTitle);
  const [major, setMajor] = useState(program.major);

  const updatedProgram = { ...program, programCode, programTitle, major };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProgram(id, updatedProgram);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Program" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Program Code"
                  variant="standard"
                  fullWidth
                  name="programCode"
                  value={programCode}
                  onChange={(e) => setProgramCode(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Program Title"
                  variant="standard"
                  fullWidth
                  name="programTitle"
                  value={programTitle}
                  onChange={(e) => setProgramTitle(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Major"
                  variant="standard"
                  fullWidth
                  name="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
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

export default EditProgramForm;
