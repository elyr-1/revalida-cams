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
      { Header: "professor name", accessor: "professorname", width: "15%", align: "left" },
      { Header: "subject", accessor: "subject", width: "15%", align: "left" },
      { Header: "course code", accessor: "subjectCode", width: "15%", align: "left" },
      { Header: "units", accessor: "units", align: "left" },
      { Header: "yearlevel", accessor: "yearlevel", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "time", accessor: "time", align: "center" },
    ],

    rows: [
      {
        professorname: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Jason Macabante
          </MDTypography>
        ),
        subject: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Fundamentals of Algebra
          </MDTypography>
        ),
        subjectCode: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            Math102
          </MDTypography>
        ),
        units: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            3
          </MDTypography>
        ),
        yearlevel: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            4th year
          </MDTypography>
        ),
        date: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Oct 20, 2022
          </MDTypography>
        ),
        time: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            2:00 PM - 5:00 PM
          </MDTypography>
        ),
      },
    ],
  };
}
