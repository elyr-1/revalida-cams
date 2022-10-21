/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function attendanceData() {
  return {
    columns: [
      { Header: "subject code", accessor: "subjectCode", width: "15%", align: "center" },
      { Header: "subject name", accessor: "subjectName", width: "15%", align: "left" },
      { Header: "units", accessor: "units", width: "15%", align: "center" },
      { Header: "attendance date", accessor: "attendanceDate", width: "15%", align: "center" },
      { Header: "remarks", accessor: "remarks", align: "center" },
      { Header: "instructor name", accessor: "instructorName", width: "18%", align: "center" },
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
            <MDBadge badgeContent="Absent" color="error" variant="gradient" size="sm" />
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
            <MDBadge badgeContent="Present" color="success" variant="gradient" size="sm" />
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
