/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "subject code", accessor: "subjectCode", width: "15%", align: "left" },
      { Header: "subject name", accessor: "subjectName", align: "left" },
      { Header: "units", accessor: "units", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            PHYS101
          </MDTypography>
        ),
        subjectName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Physics 1 : Quantum Mechanics
          </MDTypography>
        ),
        units: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="dropped" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            COM101
          </MDTypography>
        ),
        subjectName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            C Programming
          </MDTypography>
        ),
        units: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
