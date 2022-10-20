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
import ViewParentForm from "./forms/ViewParentForm";
import EditParentForm from "./forms/EditParentForm";

function Parent({ parent, onEditParent, onDeleteParent }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenView = () => setView(true);
  const handleCloseView = () => setView(false);

  useEffect(() => {
    handleClose();
  }, [parent]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {parent.parentNo}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {parent.parentName}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {parent.studentNo}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Tooltip title="View Parent Details" placement="top">
            <IconButton onClick={handleOpenView}>
              <VisibilityRoundedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Dialog open={view} onClose={handleCloseView} fullWidth>
            <DialogContent>
              <ViewParentForm key={parent.parentId} parent={parent} />
            </DialogContent>
          </Dialog>
          <Tooltip title="Edit Parent Details" placement="top">
            <IconButton onClick={handleOpen}>
              <EditRoundedIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditParentForm key={parent.parentId} parent={parent} onEditParent={onEditParent} />
            </DialogContent>
          </Dialog>
          <Tooltip title="Delete Parent" placement="top">
            <IconButton onClick={() => onDeleteParent(parent.parentId)}>
              <DeleteRoundedIcon color="error" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Parent;
