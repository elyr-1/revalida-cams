/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function ViewProgramForm({ program }) {
  return (
    <Grid component="form">
      <Grid item>
        <CardHeader title="Program Details" sx={{ textAlign: "center" }} />
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
                  value={program.programCode}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Program Title"
                  variant="standard"
                  fullWidth
                  name="programTitle"
                  value={program.programTitle}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Major"
                  variant="standard"
                  fullWidth
                  name="major"
                  value={program.major}
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

export default ViewProgramForm;
