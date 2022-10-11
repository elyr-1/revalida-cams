/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function facultyData() {
  return {
    columns: [
      { Header: "student no.", accessor: "studentNo", align: "left" },
      { Header: "program", accessor: "program", align: "left" },
      { Header: "first name", accessor: "firstName", align: "center" },
      { Header: "middle name", accessor: "middleName", align: "center" },
      { Header: "last name", accessor: "lastName", align: "center" },
      { Header: "birth date", accessor: "birthDate", align: "center" },
      { Header: "gender", accessor: "gender", align: "center" },
      { Header: "year level", accessor: "yearLevel", align: "center" },
      { Header: "semester", accessor: "semester", align: "center" },
      { Header: "academic year", accessor: "academicYear", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        studentNo: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            0001
          </MDTypography>
        ),
        program: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            BSCS
          </MDTypography>
        ),
        firstName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Justin
          </MDTypography>
        ),
        middleName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Peter
          </MDTypography>
        ),
        lastName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Griffin
          </MDTypography>
        ),
        birthDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            01/04/1956
          </MDTypography>
        ),
        gender: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Male
          </MDTypography>
        ),
        yearLevel: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        semester: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        academicYear: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            1998
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="absent" color="warning" variant="gradient" size="sm" />
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
