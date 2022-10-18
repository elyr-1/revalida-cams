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
import EditSubjectForm from "./forms/EditSubjectForm";

function Subject({ subject, onEditSubject, onDeleteSubject }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [subject]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.programCode}
        </MDTypography>
      </TableCell>
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
          {subject.units}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.preRequisites}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <IconButton onClick={handleOpen}>
            <EditRoundedIcon color="primary" />
          </IconButton>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditSubjectForm
                key={subject.subjectId}
                subject={subject}
                onEditSubject={onEditSubject}
              />
            </DialogContent>
          </Dialog>
          <IconButton onClick={() => onDeleteSubject(subject.subjectId)}>
            <DeleteRoundedIcon color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Subject;
