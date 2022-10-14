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
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ButtonGroup from "@mui/material/ButtonGroup";
import TablePagination from "@mui/material/TablePagination";
import * as courseService from "services/course";

const columns = [
  { id: "subjectCode", label: "Subject Code" },
  { id: "subjectTitle", label: "Subject Title" },
  { id: "units", label: "Units" },
  { id: "preRequisites", label: "Pre-Requisites", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

function Courses() {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteCourse = async (subjectId) => {
    try {
      await courseService.deleteCourse(subjectId);
      setCourses(courses.filter((course) => course.subjectId !== subjectId));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Course may have already been deleted");
      }
    }
  };

  // Fetch data from server
  useEffect(async () => {
    await courseService.getCourses().then((response) => {
      // console.log(response);
      setCourses(response.data);
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
                  Courses
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <TableContainer>
                  <Table>
                    <MDBox component="thead">
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell key={column.id} align={column.align}>
                            <MDTypography
                              display="block"
                              variant="caption"
                              color="text"
                              fontWeight="medium"
                              fontSize="0.7rem"
                              textTransform="uppercase"
                            >
                              {column.label}
                            </MDTypography>
                          </TableCell>
                        ))}
                      </TableRow>
                    </MDBox>
                    <TableBody>
                      {courses
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((course) => (
                          <TableRow
                            key={course.subjectId}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {course.subjectCode}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {course.subjectTitle}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {course.units}
                              </MDTypography>
                            </TableCell>
                            <TableCell align="center">
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {course.preRequisites}
                              </MDTypography>
                            </TableCell>
                            <TableCell align="center">
                              <ButtonGroup>
                                <IconButton>
                                  <EditRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton>
                                  <DeleteRoundedIcon
                                    color="error"
                                    onClick={() => handleDeleteCourse(course.subjectId)}
                                  />
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
            <MDBox>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={courses.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                  ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiTablePagination-select, .MuiTablePagination-selectIcon, .MuiTablePagination-actions":
                    {
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "gray",
                    },
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Courses;
