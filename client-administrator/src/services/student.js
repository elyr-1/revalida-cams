/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getStudents() {
  return http.get("/student");
}

export function getStudentById(studentId) {
  return http.get(`/student/${studentId}`);
}

export function addStudent(student) {
  const studentClone = { ...student };
  Object.keys(student).forEach((key) => {
    if (student[key] === "" || student[key] === null || student[key] === "undefined") {
      delete studentClone[key];
    }
  });
  return http.post("/student", studentClone);
}

export function editStudent(studentId, student) {
  return http.patch(`/student/${studentId}`, student);
}

export function deleteStudent(studentId) {
  return http.delete(`/student/${studentId}`);
}
