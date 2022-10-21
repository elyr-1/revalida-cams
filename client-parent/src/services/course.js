import http from "./http";

export function getCourses() {
  return http.get("/subject");
}

export function getCourse(subjectId) {
  return http.get(`/subject/${subjectId}`);
}

export function deleteCourse(subjectId) {
  return http.delete(`subject/${subjectId}`);
}
