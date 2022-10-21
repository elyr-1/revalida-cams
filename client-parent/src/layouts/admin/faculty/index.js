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
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import * as facultyService from "services/faculty";
import FacultyForm from "./form";

const columns = [
  { id: "professorNo", label: "Professor No." },
  { id: "professorName", label: "Name" },
  { id: "work", label: "Work" },
  { id: "status", label: "Status", align: "center" },
  { id: "birthDate", label: "Birth Date", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function Faculty() {
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

  const handleDeleteProfessor = async (professorId) => {
    try {
      await facultyService.deleteProfessor(professorId);
      setProfessors(professors.filter((professor) => professor.professorId !== professorId));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Professor may have already been deleted");
      }
    }
  };

  // Fetch data from server
  useEffect(async () => {
    await facultyService.getProfessors().then((response) => {
      // console.log(response);
      setProfessors(response.data);
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
                    <Tooltip title="Add new program" placement="top">
                      <Icon fontSize="medium" color="inherit">
                        add_rounded
                      </Icon>
                    </Tooltip>
                  </MDBox>
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Card sx={style}>
                      <FacultyForm />
                    </Card>
                  </Fade>
                </Modal>
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
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.professorNo}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.professorName}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.work}
                              </MDTypography>
                            </TableCell>
                            <TableCell align="center">
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.status}
                              </MDTypography>
                            </TableCell>
                            <TableCell align="center">
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.birthdate}
                              </MDTypography>
                            </TableCell>
                            <TableCell align="center">
                              <ButtonGroup>
                                <IconButton>
                                  <EditRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton
                                  onClick={() => handleDeleteProfessor(professor.professorId)}
                                >
                                  <DeleteRoundedIcon color="error" />
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

export default Faculty;
