/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function ViewSubjectForm({ subject }) {
  return (
    <Grid component="form">
      <Grid item>
        <CardHeader title="Subject Details" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Program Code"
                variant="standard"
                fullWidth
                name="programCode"
                value={subject.programCode}
              />
            </MDBox>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Code"
                  variant="standard"
                  fullWidth
                  name="subjectCode"
                  value={subject.subjectCode}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Title"
                  variant="standard"
                  fullWidth
                  name="subjectTitle"
                  value={subject.subjectTitle}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="No. of Units"
                  variant="standard"
                  fullWidth
                  name="units"
                  value={subject.units}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Pre-Requisites"
                  variant="standard"
                  fullWidth
                  name="preRequisites"
                  value={subject.preRequisites}
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

export default ViewSubjectForm;
