import http from "./http";

export function getSubjects() {
  return http.get("/subject");
}

export function getSubjectById(subjectId) {
  return http.get(`/subject/${subjectId}`);
}

export function addSubject(subject) {
  const subjectClone = { ...subject };
  Object.keys(subject).forEach((key) => {
    if (subject[key] === "" || subject[key] === null || subject[key] === "undefined") {
      delete subjectClone[key];
    }
  });
  return http.post("/subject", subjectClone);
}

export function editSubject(subjectId, subject) {
  return http.patch(`/subject/${subjectId}`, subject);
}

export function deleteSubject(subjectId) {
  return http.delete(`subject/${subjectId}`);
}
