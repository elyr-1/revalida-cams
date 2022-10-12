/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "Program Code", accessor: "programCode", width: "15%", align: "left" },
      { Header: "Description", accessor: "description", width: "30%", align: "left" },
      { Header: "Major", accessor: "major", align: "left" },
      { Header: "No. of Subjects", accessor: "subjectCount", align: "left" },
      { Header: "No. of Units Required", accessor: "unitCount", align: "left" },
      { Header: "No. of Students", accessor: "studentCount", align: "left" },
    ],

    rows: [
      {
        programCode: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            BSCS
          </MDTypography>
        ),
        description: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            Bachelor of Science in Computer Science
          </MDTypography>
        ),
        major: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            Software Engineering
          </MDTypography>
        ),
        subjectCount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            60
          </MDTypography>
        ),
        unitCount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            300
          </MDTypography>
        ),
        studentCount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            500
          </MDTypography>
        ),
      },
    ],
  };
}
