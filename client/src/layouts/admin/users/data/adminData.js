/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDTypography from "components/MDTypography";

export default function adminData() {
  return {
    columns: [
      { Header: "username", accessor: "userName", width: "20%", align: "left" },
      { Header: "first name", accessor: "firstName", align: "left" },
      { Header: "last name", accessor: "lastName", align: "left" },
      { Header: "type", accessor: "type", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        userName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            @petergriffin
          </MDTypography>
        ),
        firstName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Peter
          </MDTypography>
        ),
        lastName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Griffin
          </MDTypography>
        ),
        type: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            SuperUser
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        userName: (
          <MDTypography display="block" variant="button" color="text" fontWeight="medium">
            @glennquagmire
          </MDTypography>
        ),
        firstName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Glenn
          </MDTypography>
        ),
        lastName: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Quagmire
          </MDTypography>
        ),
        type: (
          <MDTypography display="block" variant="button" fontWeight="medium">
            Admin
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
