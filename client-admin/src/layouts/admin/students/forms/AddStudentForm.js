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

function AddStudentForm({ onAddStudent, onClose }) {
  const [form, setForm] = useState({
    id: 0,
    studentNo: "",
    firstname: "",
    middlename: "",
    lastname: "",
    birthdate: "",
    gender: "",
    address: "",
    yearlevel: 0,
    sem: 0,
    programCode: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    id: Joi.number().min(1).required(),
    studentNo: Joi.string().min(1).max(30).required(),
    firstname: Joi.string().min(1).required(),
    middlename: Joi.string().allow("").optional(),
    lastname: Joi.string().min(1).required(),
    birthdate: Joi.date().required(),
    gender: Joi.string().allow("").optional(),
    address: Joi.string().allow("").optional(),
    yearlevel: Joi.number().min(1).required(),
    sem: Joi.number().min(1).required(),
    programCode: Joi.string().min(1).required(),
  });

  const handleChange = (event) => {
    console.log(event.currentTarget.value);
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
    onAddStudent(form);
    console.log(form);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Add New Student" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="User ID"
                  variant="standard"
                  fullWidth
                  name="id"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Student No."
                  variant="standard"
                  fullWidth
                  name="studentNo"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  name="firstname"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Middle Name"
                  variant="standard"
                  fullWidth
                  name="middlename"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  name="lastname"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="date"
                  label="Birthdate"
                  variant="standard"
                  fullWidth
                  name="birthdate"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Gender"
                  variant="standard"
                  fullWidth
                  name="gender"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Address"
                  variant="standard"
                  fullWidth
                  name="address"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
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
                  type="text"
                  label="Program Code"
                  variant="standard"
                  fullWidth
                  name="programCode"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
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

export default AddStudentForm;
