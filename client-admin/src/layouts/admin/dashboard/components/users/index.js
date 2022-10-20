import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import * as adminService from "services/admin";

const columns = [
  { id: "userName", label: "Username" },
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "userType", label: "User Type" },
];

function AdminUsers() {
  const [adminUsers, setAdminUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch data from server
  useEffect(async () => {
    await adminService.getAdminUsers().then((response) => {
      // console.log(response);
      setAdminUsers(response.data);
    });
  }, []);

  return (
    <>
      <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox>
            <MDTypography variant="h6" gutterBottom>
              Administrators
            </MDTypography>
            <MDBox display="flex" alignItems="center" lineHeight={0}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                View list of administrators
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox>
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
                {adminUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((adminUser) => (
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
      <MDBox>
        <TablePagination
          rowsPerPageOptions={[8, 16]}
          component="div"
          count={adminUsers.length}
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
    </>
  );
}

export default AdminUsers;
