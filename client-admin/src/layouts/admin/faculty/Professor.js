/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import TableCell from "@mui/material/TableCell";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import ViewProfessorForm from "./forms/ViewProfessorForm";
import EditProfessorForm from "./forms/EditProfessorForm";

function Professor({ professor, onEditProfessor, onDeleteProfessor }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenView = () => setView(true);
  const handleCloseView = () => setView(false);

  useEffect(() => {
    handleClose();
  }, [professor]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {professor.professorId}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {professor.professorNo}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {professor.professorName}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {professor.gender}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {professor.address}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Tooltip title="View Professor Details" placement="top">
            <IconButton onClick={handleOpenView}>
              <VisibilityRoundedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Dialog open={view} onClose={handleCloseView} fullWidth>
            <DialogContent>
              <ViewProfessorForm key={professor.professorId} professor={professor} />
            </DialogContent>
          </Dialog>
          <Tooltip title="Edit Professor Details" placement="top">
            <IconButton onClick={handleOpen}>
              <EditRoundedIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditProfessorForm
                key={professor.professorId}
                professor={professor}
                onEditProfessor={onEditProfessor}
              />
            </DialogContent>
          </Dialog>
          <Tooltip title="Delete Faculty Member" placement="top">
            <IconButton onClick={() => onDeleteProfessor(professor.professorId)}>
              <DeleteRoundedIcon color="error" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Professor;
