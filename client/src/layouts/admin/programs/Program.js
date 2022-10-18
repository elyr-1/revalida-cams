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
import EditProgramForm from "./forms/EditProgramForm";

function Program({ program, onEditProgram, onDeleteProgram }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [program]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {program.programCode}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {program.programTitle}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {program.major}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <IconButton onClick={handleOpen}>
            <EditRoundedIcon color="primary" />
          </IconButton>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditProgramForm
                key={program.programId}
                program={program}
                onEditProgram={onEditProgram}
              />
            </DialogContent>
          </Dialog>
          <IconButton onClick={() => onDeleteProgram(program.programId)}>
            <DeleteRoundedIcon color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Program;
