/* eslint-disable react/prop-types */
import MDTypography from "components/MDTypography";
import TableCell from "@mui/material/TableCell";

function Program({ subject }) {
  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.subjectCode}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.subjectTitle}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.status}
        </MDTypography>
      </TableCell>
    </>
  );
}

export default Program;
