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
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ButtonGroup from "@mui/material/ButtonGroup";
// Data
import * as programService from "services/program";

function Programs() {
  const [programs, setPrograms] = useState([]);

  // Fetch data from server
  useEffect(async () => {
    await programService.getPrograms().then((response) => {
      // console.log(response);
      setPrograms(response.data);
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
                  Programs
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
                            Program Code
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
                            Program Title
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
                            Major
                          </MDTypography>
                        </TableCell>
                        <TableCell align="center">
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            Total No. of Courses
                          </MDTypography>
                        </TableCell>
                        <TableCell align="center">
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            Total No. of Units
                          </MDTypography>
                        </TableCell>
                        <TableCell align="center">
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            fontSize="0.7rem"
                            textTransform="uppercase"
                          >
                            Actions
                          </MDTypography>
                        </TableCell>
                      </TableRow>
                    </MDBox>
                    <TableBody>
                      {programs.map((program) => (
                        <TableRow
                          key={program.programId}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell>
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {program.programCode}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {program.programTitle}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {program.major}
                            </MDTypography>
                          </TableCell>
                          <TableCell align="center">
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {50}
                            </MDTypography>
                          </TableCell>
                          <TableCell align="center">
                            <MDTypography
                              display="block"
                              variant="button"
                              color="text"
                              fontWeight="medium"
                            >
                              {300}
                            </MDTypography>
                          </TableCell>
                          <TableCell align="center">
                            <ButtonGroup sx={{ alignContent: "center" }}>
                              <IconButton>
                                <EditRoundedIcon color="primary" />
                              </IconButton>
                              <IconButton>
                                <DeleteForeverRoundedIcon color="error" />
                              </IconButton>
                            </ButtonGroup>
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

export default Programs;
