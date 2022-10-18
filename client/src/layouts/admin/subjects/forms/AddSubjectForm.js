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

function AddSubjectForm({ onAddSubject, onClose }) {
  const [form, setForm] = useState({
    subjectCode: "",
    subjectTitle: "",
    units: 0,
    preRequisites: "",
    programCode: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    subjectCode: Joi.string().min(1).max(30).required(),
    subjectTitle: Joi.string().min(1).required(),
    units: Joi.number().min(1).required(),
    preRequisites: Joi.string().allow("").optional(),
    programCode: Joi.string().min(1).max(30).required(),
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
    onAddSubject(form);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Add New Subject" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
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
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Code"
                  variant="standard"
                  fullWidth
                  name="subjectCode"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Title"
                  variant="standard"
                  fullWidth
                  name="subjectTitle"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Units"
                  variant="standard"
                  fullWidth
                  name="units"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Pre-requisites"
                  variant="standard"
                  fullWidth
                  name="preRequisites"
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

export default AddSubjectForm;
