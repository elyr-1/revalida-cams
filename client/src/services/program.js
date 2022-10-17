/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getPrograms() {
  return http.get("/program");
}

export function getProgramById(programId) {
  return http.get(`/program/${programId}`);
}

export function addProgram(program) {
  const programClone = { ...program };
  Object.keys(program).forEach((key) => {
    if (program[key] === "" || program[key] === null || program[key] === "undefined") {
      delete programClone[key];
    }
  });
  return http.post("/program", programClone);
}

export function editProgram(programId, program) {
  return http.patch(`/program/${programId}`, program);
}

export function deleteProgram(programId) {
  return http.delete(`program/${programId}`);
}
