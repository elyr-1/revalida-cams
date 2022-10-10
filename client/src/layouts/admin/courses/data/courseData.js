/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function courseData() {
  return {
    columns: [
      { Header: "subject code", accessor: "subjectCode", width: "15%", align: "left" },
      { Header: "title", accessor: "title", align: "left" },
      { Header: "units", accessor: "units", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            PHYS101
          </MDTypography>
        ),
        title: (
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
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            COM101
          </MDTypography>
        ),
        title: (
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
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
