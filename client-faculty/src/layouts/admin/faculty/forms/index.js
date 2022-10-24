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
import * as facultyService from "services/faculty";

function FacultyForm() {
  const [form, setForm] = useState({
    professorNo: "",
    professorName: "",
    gender: "",
    status: "",
  });

  const [successSB, setSuccessSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    professorNo: Joi.string().min(1).max(30).required(),
    professorName: Joi.string().min(1).required(),
    gender: Joi.string().allow("").optional(),
    status: Joi.string().min(1).max(30).required(),
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

  const handleAddProfessor = (professor) => {
    facultyService
      .addProfessor(professor)
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
    handleAddProfessor(form);
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
      title="Professor Saved"
      content="New faculty member has been added successfully!"
      dateTime=""
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
    />
  );

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Add New Course" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor No."
                  variant="standard"
                  fullWidth
                  name="professorNo"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Professor Name"
                  variant="standard"
                  fullWidth
                  name="professorName"
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
                  label="Status"
                  variant="standard"
                  fullWidth
                  name="status"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              {/* <MDBox mb={2}>
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
              </MDBox> */}
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  type="submit"
                  disabled={isFormInvalid()}
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

export default FacultyForm;
