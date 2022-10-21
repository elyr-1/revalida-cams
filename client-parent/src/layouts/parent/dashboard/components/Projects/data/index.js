/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Subject Code", accessor: "subjectCode", width: "15%", align: "center" },
      { Header: "Subject Name", accessor: "subjectName", width: "15%", align: "left" },
      { Header: "Units", accessor: "units", width: "15%", align: "center" },
      { Header: "Instructor", accessor: "instructorName", width: "15%", align: "center" },
    ],

    rows: [
      {
        subjectCode: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            PHYS101
          </MDTypography>
        ),
        subjectName: (
          <MDBox display="flex" py={1}>
            Physics
          </MDBox>
        ),
        units: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        instructorName: (
          <MDBox width="8rem" textAlign="left">
            Jayson Mamaw
          </MDBox>
        ),
      },
      {
        subjectCode: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            COM101
          </MDTypography>
        ),
        subjectName: (
          <MDBox display="flex" py={1}>
            C Programming
          </MDBox>
        ),
        units: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        instructorName: (
          <MDBox width="8rem" textAlign="left">
            Jayson Daksers
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
