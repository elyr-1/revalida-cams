/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDSnackbar from "components/MDSnackbar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Joi from "joi";
import * as studentService from "services/student";

function StudentForm() {
  const [form, setForm] = useState({
    studentNo: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    yearLevel: 0,
    sem: 0,
  });

  const [successSB, setSuccessSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    studentNo: Joi.string().min(1).max(30).required(),
    firstname: Joi.string().min(1).required(),
    middlename: Joi.string().allow("").optional(),
    lastname: Joi.string().min(1).required(),
    gender: Joi.string().allow("").optional(),
    yearlevel: Joi.number().min(1).optional(),
    sem: Joi.number().min(1).optional(),
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

  const handleAddStudent = (student) => {
    studentService
      .addStudent(student)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message[0]);
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddStudent(form);
    console.log(form);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  const renderSuccessSB = (
    <MDSnackbar
      color="info"
      icon="check"
      title="Student Saved"
      content="New student has been added successfully!"
      dateTime=""
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
    />
  );

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
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  type="submit"
                  disabled={!isFormInvalid()}
                  onClick={openSuccessSB}
                >
                  save
                </MDButton>
                {renderSuccessSB}
              </MDBox>
            </MDBox>
          </MDBox>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default StudentForm;
