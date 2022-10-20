/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function ViewParentForm({ parent }) {
  return (
    <Grid component="form">
      <Grid item>
        <CardHeader title="Parent Details" sx={{ textAlign: "center" }} />
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
                  value={parent.parentNo}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Parent Name"
                  variant="standard"
                  fullWidth
                  name="parentName"
                  value={parent.parentName}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Student No."
                  variant="standard"
                  fullWidth
                  name="studentNo"
                  value={parent.studentNo}
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

export default ViewParentForm;
