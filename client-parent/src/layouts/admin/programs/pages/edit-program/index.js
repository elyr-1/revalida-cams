/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as programService from "services/program";
import Swal from "sweetalert2";
import ProgramForm from "../../forms";

function EditProgram() {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    programService
      .getProgramById(params.programId)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setProgram(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Edit failed",
            text: "Task might already been deleted",
          });
        }
      });
  }, [params.programId]);

  const handleEditProgram = (form) => {
    programService
      .editProgram(program.programId, form)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Program details has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/programs");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "This record may have already been deleted.",
          });
        }
      });
  };

  if (!loading) {
    return (
      <ProgramForm
        initialValue={{
          programCode: program.programCode,
          programTitle: program.programTitle,
          major: program.major,
        }}
        onSubmit={handleEditProgram}
      />
    );
  }
}

export default EditProgram;
