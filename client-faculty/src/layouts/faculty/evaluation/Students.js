import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import * as studentService from "services/evaluation";
import Swal from "sweetalert2";
import Student from "./Student";

const columns = [
  { id: "studentNo", label: "Student No." },
  { id: "lastname", label: "Last Name" },
  { id: "firstname", label: "First Name" },
  { id: "program", label: "Program" },
  { id: "yearlevel", label: "Year Level" },
  { id: "sem", label: "Semester" },
  { id: "grades", label: "Grades" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Actions", align: "center" },
];

function Students() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch all students
  useEffect(async () => {
    await studentService.getStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  // Update a student
  const handleEditStudent = (studentId, updatedStudent) => {
    setStudents(
      students.map((student) => (student.studentId === studentId ? updatedStudent : student))
    );
    studentService.editStudent(studentId, updatedStudent).then(() => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Student has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };
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
                display="flex"
                justifyContent="space-between"
              >
                <MDTypography variant="h5" color="white">
                  EVALUATION
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
                      {students
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((student) => (
                          <TableRow
                            key={student.studentId}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <Student student={student} onEditStudent={handleEditStudent} />
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
                count={students.length}
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

export default Students;
