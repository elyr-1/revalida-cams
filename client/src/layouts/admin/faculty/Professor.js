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
import EditProfessorForm from "./forms/EditProfessorForm";

function Professor({ professor, onEditProfessor, onDeleteProfessor }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [professor]);

  return (
    <>
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
          <IconButton onClick={handleOpen}>
            <EditRoundedIcon color="primary" />
          </IconButton>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditProfessorForm
                key={professor.professorId}
                professor={professor}
                onEditProfessor={onEditProfessor}
              />
            </DialogContent>
          </Dialog>
          <IconButton onClick={() => onDeleteProfessor(professor.professorId)}>
            <DeleteRoundedIcon color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Professor;
