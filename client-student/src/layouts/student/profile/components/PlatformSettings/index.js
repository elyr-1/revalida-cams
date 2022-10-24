// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function PlatformSettings() {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Account Settings
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Full Name
        </MDTypography>
        <MDBox pt={1} px={2}>
          <MDInput type="text" label="Full Name" fullWidth />
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Email
        </MDTypography>
        <MDBox pt={1} px={2}>
          <MDInput type="email" label="Email" fullWidth />
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Password
        </MDTypography>
        <MDBox pt={1} px={2}>
          <MDInput type="password" label="Password" fullWidth />
        </MDBox>
      </MDBox>
      <MDBox color="text" px={2}>
        <MDButton variant="outlined" color="info" size="small">
          Save
        </MDButton>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
