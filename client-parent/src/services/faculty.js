import http from "./http";

export function getProfessors() {
  return http.get("/professor");
}

export function getProfessor(professorId) {
  return http.get(`/professor/${professorId}`);
}

export function deleteProfessor(professorId) {
  return http.delete(`professor/${professorId}`);
}
