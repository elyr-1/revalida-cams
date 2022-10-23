/* eslint-disable react/prop-types */
import { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function EditSubjectForm({ subject, onEditSubject }) {
  const id = subject.subjectId;
  const [subjectCode, setSubjectCode] = useState(subject.subjectCode);
  const [subjectTitle, setSubjectTitle] = useState(subject.subjectTitle);
  const [units, setUnits] = useState(subject.units);
  const [preRequisites, setPreRequisites] = useState(subject.preRequisites);
  const [yearLevel, setYearLevel] = useState(subject.yearLevel);
  const [sem, setSem] = useState(subject.sem);
  const [programId, setProgramId] = useState(subject.programId);

  const updatedSubject = {
    ...subject,
    subjectCode,
    subjectTitle,
    units,
    preRequisites,
    yearLevel,
    sem,
    programId,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditSubject(id, updatedSubject);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid item>
        <CardHeader title="Edit Subject" sx={{ textAlign: "center" }} />
        <Divider />
        <CardContent>
          <MDBox pt={1} pb={1} px={1}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Code"
                  variant="standard"
                  fullWidth
                  name="subjectCode"
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Subject Title"
                  variant="standard"
                  fullWidth
                  name="subjectTitle"
                  value={subjectTitle}
                  onChange={(e) => setSubjectTitle(e.target.value)}
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="No. of Units"
                  variant="standard"
                  fullWidth
                  name="units"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Pre-Requisites"
                  variant="standard"
                  fullWidth
                  name="preRequisites"
                  value={preRequisites}
                  onChange={(e) => setPreRequisites(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Year Level"
                  variant="standard"
                  fullWidth
                  name="yearLevel"
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Semester"
                  variant="standard"
                  fullWidth
                  name="sem"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Program ID"
                  variant="standard"
                  fullWidth
                  name="programId"
                  value={programId}
                  onChange={(e) => setProgramId(e.target.value)}
                />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth type="submit">
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

export default EditSubjectForm;
