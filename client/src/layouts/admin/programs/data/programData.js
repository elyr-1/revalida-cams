/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDTypography from "components/MDTypography";

export default function programData() {
  return {
    columns: [
      { Header: "program code", accessor: "programCode", width: "20%", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "major", accessor: "major", align: "left" },
      { Header: "total no. of students", accessor: "students", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        programCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            BSCS
          </MDTypography>
        ),
        description: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Bachelor of Science in Computer Science
          </MDTypography>
        ),
        major: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Software Engineering
          </MDTypography>
        ),
        students: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            999
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        programCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            BSCE
          </MDTypography>
        ),
        description: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Bachelor of Science in Computer Engineering
          </MDTypography>
        ),
        major: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Computer Systems Engineering
          </MDTypography>
        ),
        students: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
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
