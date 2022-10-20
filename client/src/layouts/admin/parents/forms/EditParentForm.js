/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function EditParentForm({ parent, onEditParent }) {
  const id = parent.parentId;
  const [parentNo, setParentNo] = useState(parent.parentNo);
  const [parentName, setParentName] = useState(parent.parentName);
  const [studentNo, setStudentNo] = useState(parent.studentNo);

  const updatedParent = { ...parent, parentNo, parentName, studentNo };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditParent(id, updatedParent);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Parent" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Parent No."
                  variant="standard"
                  fullWidth
                  name="parentNo"
                  value={parentNo}
                  onChange={(e) => setParentNo(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Parent Name"
                  variant="standard"
                  fullWidth
                  name="parentName"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  required
                />
              </MDBox>
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

export default EditParentForm;
