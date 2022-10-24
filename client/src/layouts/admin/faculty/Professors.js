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
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import * as facultyService from "services/faculty";
import Swal from "sweetalert2";
import Professor from "./Professor";
import AddProfessorForm from "./forms/AddProfessorForm";

const columns = [
  { id: "professorNo", label: "Professor No." },
  { id: "professorName", label: "Professor Name" },
  { id: "gender", label: "Gender" },
  { id: "address", label: "Address" },
  { id: "actions", label: "Actions", align: "center" },
];

function Professors() {
  const [professors, setProfessors] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch data from faculty members
  useEffect(async () => {
    await facultyService.getProfessors().then((response) => {
      setProfessors(response.data);
    });
  }, []);

  // Add a faculty
  const handleAddProfessor = (professor) => {
    facultyService
      .addProfessor(professor)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "A new faculty member has been added!",
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

  // Update a faculty
  const handleEditProfessor = (professorId, updatedProfessor) => {
    setProfessors(
      professors.map((professor) =>
        professor.professorId === professorId ? updatedProfessor : professor
      )
    );
    facultyService.editProfessor(professorId, updatedProfessor).then(() => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Faculty member has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  // delete a faculty
  const handleDeleteProfessor = async (professorId) => {
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
          facultyService.deleteProfessor(professorId);
          setProfessors(professors.filter((professor) => professor.professorId !== professorId));
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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Faculty Members
                </MDTypography>
                <IconButton onClick={handleOpen}>
                  <MDBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="2.5rem"
                    height="2.5rem"
                    bgColor="white"
                    shadow="sm"
                    borderRadius="50%"
                    color="dark"
                  >
                    <Tooltip title="Add new faculty member" placement="top">
                      <Icon fontSize="medium" color="inherit">
                        add_rounded
                      </Icon>
                    </Tooltip>
                  </MDBox>
                </IconButton>
                <Dialog open={open} onClose={handleClose} fullWidth>
                  <DialogContent>
                    <AddProfessorForm onAddProfessor={handleAddProfessor} onClose={handleClose} />
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
                      {professors
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((professor) => (
                          <TableRow
                            key={professor.professorId}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <Professor
                              professor={professor}
                              onEditProfessor={handleEditProfessor}
                              onDeleteProfessor={handleDeleteProfessor}
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
                count={professors.length}
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

export default Professors;
