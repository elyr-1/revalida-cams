import http from "./http";

export function getProfessors() {
  return http.get("/professor");
}

export function getProfessor(professorId) {
  return http.get(`/professor/${professorId}`);
}

export function addProfessor(professor) {
  const professorClone = { ...professor };
  Object.keys(professor).forEach((key) => {
    if (professor[key] === "" || professor[key] === null || professor[key] === "undefined") {
      delete professorClone[key];
    }
  });
  return http.post("/professor", professorClone);
}

export function editProfessor(professorId, professor) {
  return http.patch(`/professor/${professorId}`, professor);
}

export function deleteProfessor(professorId) {
  return http.delete(`professor/${professorId}`);
}
