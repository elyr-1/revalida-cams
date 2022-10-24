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
import * as scheduleService from "services/schedule";

const columns = [
  { id: "subjectId", label: "Subject Id" },
  { id: "subjectCode", label: "Subject Code" },
  { id: "scheduleFrom", label: "Start Time" },
  { id: "scheduleTo", label: "End Time" },
  { id: "day", label: "Day" },
];

function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch data from server
  useEffect(async () => {
    await scheduleService.getSchedule().then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <>
      <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox>
            <MDTypography variant="h6" gutterBottom>
              SUBJECTS
            </MDTypography>
            <MDBox display="flex" alignItems="center" lineHeight={0}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                subjects Enrolled
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
                {schedules
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((schedule) => (
                    <TableRow
                      key={schedule.scheduleId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="medium"
                        >
                          {schedule.subjectId}
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="medium"
                        >
                          {schedule.subjectCode}
                        </MDTypography>
                      </TableCell>

                      <TableCell>
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="medium"
                        >
                          {schedule.scheduleFrom}
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="medium"
                        >
                          {schedule.scheduleTo}
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="medium"
                        >
                          {schedule.day}
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
          count={schedules.length}
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

export default Schedules;
