import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function courseData() {
  return {
    columns: [
      { Header: "student No", accessor: "studentNo", width: "15%", align: "left" },
      { Header: "fullname", accessor: "fullName", width: "15%", align: "left" },
      { Header: "course code", accessor: "subjectCode", width: "15%", align: "left" },
      { Header: "subject", accessor: "subject", align: "left" },
      { Header: "semester", accessor: "semester", align: "center" },
      { Header: "units", accessor: "units", align: "center" },
      { Header: "final grade", accessor: "finalGrade", align: "center" },
      { Header: "remarks", accessor: "remarks", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        studentNo: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            PM-17-00617-A
          </MDTypography>
        ),
        fullName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Jayson Derollo
          </MDTypography>
        ),
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Math102
          </MDTypography>
        ),
        subject: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Fundamentals of Algebra
          </MDTypography>
        ),
        semester: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            2
          </MDTypography>
        ),
        units: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        finalGrade: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            5.0
          </MDTypography>
        ),
        remarks: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="failed" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="button" color="error" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
