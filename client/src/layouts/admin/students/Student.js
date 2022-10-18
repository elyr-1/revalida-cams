/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import TableCell from "@mui/material/TableCell";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditStudentForm from "./forms/EditStudentForm";

function Student({ student, onEditStudent, onDeleteStudent }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [student]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.studentNo}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.lastname}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.firstname}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.gender}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.programCode}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.yearlevel}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {student.sem}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <IconButton onClick={handleOpen}>
            <EditRoundedIcon color="primary" />
          </IconButton>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditStudentForm
                key={student.studentId}
                student={student}
                onEditStudent={onEditStudent}
              />
            </DialogContent>
          </Dialog>
          <IconButton onClick={() => onDeleteStudent(student.studentId)}>
            <DeleteRoundedIcon color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Student;
