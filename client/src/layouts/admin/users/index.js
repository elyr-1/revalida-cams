import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
// Data
import * as adminService from "services/admin";

function AdminUsers() {
  const [adminUsers, setAdminUsers] = useState([]);

  // Fetch data from server
  useEffect(async () => {
    await adminService.getAdminUsers().then((response) => {
      // console.log(response);
      setAdminUsers(response.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Admin Users
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <TableContainer>
                  <Table>
                    <MDBox component="thead">
                      <TableRow>
                        <TableCell>
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            Username
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            First Name
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            Last Name
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            User Type
                          </MDTypography>
                        </TableCell>
                      </TableRow>
                    </MDBox>
                    <TableBody>
                      {adminUsers.map((adminUser) => (
                        <TableRow
                          key={adminUser.adminId}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell>
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {adminUser.username}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            {" "}
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {adminUser.firstname}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            {" "}
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {adminUser.lastname}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {adminUser.type}
                            </MDTypography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AdminUsers;
