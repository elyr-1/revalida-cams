// @mui material components
// import MDBox from "components/MDBox";
// import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  return {
    columns: [
      { Header: "student No", accessor: "studentNo", width: "15%", align: "left" },
      { Header: "fullname", accessor: "fullName", width: "15%", align: "left" },
      { Header: "course code", accessor: "subjectCode", width: "15%", align: "left" },
      { Header: "subject", accessor: "subject", align: "left" },
      { Header: "yearlevel", accessor: "yearlevel", align: "center" },
      { Header: "semester", accessor: "semester", align: "center" },
      { Header: "units", accessor: "units", align: "center" },
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
        yearlevel: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            4th year
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
        action: (
          <MDTypography component="a" href="#" variant="button" color="error" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
