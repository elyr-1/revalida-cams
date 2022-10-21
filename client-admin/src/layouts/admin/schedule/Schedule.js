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
import ViewScheduleForm from "./forms/ViewScheduleForm";
import EditScheduleForm from "./forms/EditScheduleForm";

function Schedule({ schedule, onEditSchedule, onDeleteSchedule }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenView = () => setView(true);
  const handleCloseView = () => setView(false);

  useEffect(() => {
    handleClose();
  }, [schedule]);

  return (
    <>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {schedule.subjectCode}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {schedule.scheduleFrom} - {schedule.scheduleTo}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {schedule.day}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {schedule.yearlevel}
        </MDTypography>
      </TableCell>
      <TableCell>
        <MDTypography display="block" variant="button" color="text" fontWeight="medium">
          {schedule.professorNo}
        </MDTypography>
      </TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Tooltip title="View Schedule Details" placement="top">
            <IconButton onClick={handleOpenView}>
              <VisibilityRoundedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Dialog open={view} onClose={handleCloseView} fullWidth>
            <DialogContent>
              <ViewScheduleForm key={schedule.sessionId} schedule={schedule} />
            </DialogContent>
          </Dialog>
          <Tooltip title="Edit Schedule Details" placement="top">
            <IconButton onClick={handleOpen}>
              <EditRoundedIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogContent>
              <EditScheduleForm
                key={schedule.sessionId}
                schedule={schedule}
                onEditSchedule={onEditSchedule}
              />
            </DialogContent>
          </Dialog>
          <Tooltip title="Delete Schedule" placement="top">
            <IconButton onClick={() => onDeleteSchedule(schedule.scheduleId)}>
              <DeleteRoundedIcon color="error" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

export default Schedule;
