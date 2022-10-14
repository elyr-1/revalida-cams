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
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ButtonGroup from "@mui/material/ButtonGroup";
import TablePagination from "@mui/material/TablePagination";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as programService from "services/program";
import AddProgram from "./forms";

const columns = [
  { id: "programCode", label: "Program Code" },
  { id: "programTitle", label: "Program Title" },
  { id: "major", label: "Major" },
  { id: "courseCount", label: "Total No. of Courses", align: "center" },
  { id: "unitCount", label: "Total No. of Units", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 350,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function Programs() {
  const [programs, setPrograms] = useState([]);
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

  const handleDeleteProgram = async (programId) => {
    try {
      await programService.deleteProgram(programId);
      setPrograms(programs.filter((program) => program.programId !== programId));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Program may have already been deleted");
      }
    }
  };

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
                display="flex"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Programs
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
                    <Box sx={style}>
                      <AddProgram />
                    </Box>
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
                      {programs
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((program) => (
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
                              <ButtonGroup>
                                <IconButton>
                                  <EditRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteProgram(program.programId)}>
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
