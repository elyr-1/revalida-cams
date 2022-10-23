/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Joi from "joi";

function AddScheduleForm({ onAddSchedule, onClose }) {
  const [form, setForm] = useState({
    subjectId: 0,
    academicYear: "",
    sem: 0,
    scheduleFrom: "",
    scheduleTo: "",
    day: "",
    sectionId: 0,
    yearlevel: "",
    professorId: 0,
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    subjectId: Joi.number().min(1).max(30).required(),
    academicYear: Joi.string().allow("").optional(),
    sem: Joi.number().allow("").optional(),
    scheduleFrom: Joi.string().allow("").optional(),
    scheduleTo: Joi.string().allow("").optional(),
    day: Joi.string().allow("").optional(),
    sectionId: Joi.number().min(1).required(),
    yearlevel: Joi.string().min(1).required(),
    professorId: Joi.number().min(1).required(),
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddSchedule(form);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Add New Schedule" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Subject ID"
                  variant="standard"
                  fullWidth
                  name="subjectId"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Year Level"
                  variant="standard"
                  fullWidth
                  name="yearlevel"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Academic Year"
                  variant="standard"
                  fullWidth
                  name="academicYear"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="Start Time"
                  variant="standard"
                  fullWidth
                  name="scheduleFrom"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="time"
                  label="End Time"
                  variant="standard"
                  fullWidth
                  name="scheduleTo"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Day"
                  variant="standard"
                  fullWidth
                  name="day"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Section ID"
                  variant="standard"
                  fullWidth
                  name="sectionId"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Professor ID"
                  variant="standard"
                  fullWidth
                  name="professorId"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  type="submit"
                  disabled={isFormInvalid()}
                  onClick={onClose}
                >
                  save
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default AddScheduleForm;
