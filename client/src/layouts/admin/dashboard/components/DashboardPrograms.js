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
import * as programService from "services/program";

const columns = [
  { id: "programCode", label: "Program Code" },
  { id: "programTitle", label: "Program Title" },
];

function DashboardPrograms() {
  const [programs, setPrograms] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  return (
    <>
      <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox>
            <MDTypography variant="h6" gutterBottom>
              Programs
            </MDTypography>
            <MDBox display="flex" alignItems="center" lineHeight={0}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                View list of Programs offered
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
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MDBox>
      </Card>
      <MDBox>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
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
    </>
  );
}

export default DashboardPrograms;
