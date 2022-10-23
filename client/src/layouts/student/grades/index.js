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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import * as programService from "services/program";
import Swal from "sweetalert2";
import Program from "./data/gradesData";
import AddProgramForm from "./forms/AddProgramForm";

const columns = [
  { id: "subjectCode", label: "Subject Code" },
  { id: "subjectTitle", label: "Subject Name" },
  { id: "grade", label: "Grade" },
  { id: "actions", label: "Actions", align: "center" },
];

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch all programs
  useEffect(async () => {
    await programService.getPrograms().then((response) => {
      setPrograms(response.data);
    });
  }, []);

  // Add a program
  const handleAddProgram = (program) => {
    programService
      .addProgram(program)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "A new program has been added!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "This record may have already been deleted.",
          });
        }
      });
  };

  // Update a program
  const handleEditProgram = (programId, updatedProgram) => {
    setPrograms(
      programs.map((program) => (program.programId === programId ? updatedProgram : program))
    );
    programService.editProgram(programId, updatedProgram).then(() => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Program has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  // Delete a program
  const handleDeleteProgram = async (programId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this record? This process cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          programService.deleteProgram(programId);
          setPrograms(programs.filter((program) => program.programId !== programId));
          Swal.fire("Deleted", "Record has been deleted.", "success");
        } else if (result.isDenied) {
          Swal.fire("Deletion has been cancelled", "", "info");
        }
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "This record may have already been deleted.",
        });
      }
    }
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
                bgColor="error"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Grades
                </MDTypography>
                <Dialog open={open} onClose={handleClose} fullWidth>
                  <DialogContent>
                    <AddProgramForm onAddProgram={handleAddProgram} onClose={handleClose} />
                  </DialogContent>
                </Dialog>
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
                      {programs
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((program) => (
                          <TableRow
                            key={program.programId}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <Program
                              program={program}
                              onEditProgram={handleEditProgram}
                              onDeleteProgram={handleDeleteProgram}
                            />
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
                count={programs.length}
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

export default Programs;
