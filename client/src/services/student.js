/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getStudents() {
  return http.get("/student");
}

export function deleteStudent(studentId) {
  return http.delete(`/student/${studentId}`);
}
