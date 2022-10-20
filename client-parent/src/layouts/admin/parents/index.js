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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import * as parentService from "services/parent";
import Swal from "sweetalert2";
import ParentForm from "./forms";

const columns = [
  { id: "parentNo", label: "Parent No." },
  { id: "parentName", label: "Parent Name" },
  { id: "studentNo", label: "Student No." },
  { id: "actions", label: "Actions", align: "center" },
];

function Parents() {
  const [parents, setParents] = useState([]);
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

  const handleDeleteParent = (parentId) => {
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
          parentService.deleteParent(parentId);
          setParents(parents.filter((parent) => parent.parentId !== parentId));
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

  // Fetch data from server
  useEffect(async () => {
    await parentService.getParents().then((response) => {
      setParents(response.data);
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
                  Parents
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
                    <Tooltip title="Add new parent" placement="top">
                      <Icon fontSize="medium" color="inherit">
                        add_rounded
                      </Icon>
                    </Tooltip>
                  </MDBox>
                </IconButton>
                <Dialog open={open} onClose={handleClose} fullWidth>
                  <DialogContent>
                    <ParentForm />
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
                      {parents
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((parent) => (
                          <TableRow
                            key={parent.parentId}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {parent.parentNo}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {parent.parentName}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {parent.studentId}
                              </MDTypography>
                            </TableCell>
                            {/* <TableCell>
                              <MDTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="medium"
                              >
                                {professor.status}
                              </MDTypography>
                            </TableCell> */}
                            <TableCell align="center">
                              <ButtonGroup>
                                <IconButton>
                                  <EditRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteParent(parent.parentId)}>
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
                count={parents.length}
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

export default Parents;
