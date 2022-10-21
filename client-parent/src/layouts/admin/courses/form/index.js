import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Divider from "@mui/material/Divider";

function CourseForm() {
  return (
    <>
      <MDTypography variant="button" fontWeight="medium" textAlign="center">
        Add New Course
      </MDTypography>
      <Divider />
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput type="text" label="Subject Code" variant="standard" fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="text" label="Subject Title" variant="standard" fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="text" label="Major" variant="standard" fullWidth />
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth>
              save
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </>
  );
}

export default CourseForm;
