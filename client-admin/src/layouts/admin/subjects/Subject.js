/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import TableCell from "@mui/material/TableCell";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import ViewSubjectForm from "./forms/ViewSubjectForm";
import EditSubjectForm from "./forms/EditSubjectForm";

function Subject({ subject, onEditSubject, onDeleteSubject }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenView = () => setView(true);
  const handleCloseView = () => setView(false);

  useEffect(() => {
    handleClose();
  }, [subject]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.subjectId}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {subject.program}
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
        <MDTypography
          display="block"
          variant="button"
          color="text"
          fontWeight="medium"
          align="center"
        >
          {subject.yearLevel} / {subject.sem}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Tooltip title="View Subject Details" placement="top">
            <IconButton onClick={handleOpenView}>
              <VisibilityRoundedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Dialog open={view} onClose={handleCloseView} fullWidth>
            <DialogContent>
              <ViewSubjectForm key={subject.subjectId} subject={subject} />
            </DialogContent>
          </Dialog>
          <Tooltip title="Edit Subject Details" placement="top">
            <IconButton onClick={handleOpen}>
              <EditRoundedIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditSubjectForm
                key={subject.subjectId}
                subject={subject}
                onEditSubject={onEditSubject}
              />
            </DialogContent>
          </Dialog>
          <Tooltip title="Delete Subject" placement="top">
            <IconButton onClick={() => onDeleteSubject(subject.subjectId)}>
              <DeleteRoundedIcon color="error" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Subject;
