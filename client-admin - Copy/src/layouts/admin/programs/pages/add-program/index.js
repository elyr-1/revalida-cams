/* eslint-disable react/prop-types */
import * as programService from "services/program";
import Swal from "sweetalert2";
import ProgramForm from "../../forms";

function AddProgram({ onClose }) {
  const handleSubmit = (program) => {
    programService
      .addProgram(program)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "A new program has been added!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
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

  return <ProgramForm onSubmit={handleSubmit} onClose={onClose} />;
}

export default AddProgram;
