import http from "./http";

export function getCourses() {
  return http.get("/subject");
}

export function getCourse(subjectId) {
  return http.get(`/subject/${subjectId}`);
}

export function addCourse(course) {
  const courseClone = { ...course };
  Object.keys(course).forEach((key) => {
    if (course[key] === "" || course[key] === null || course[key] === "undefined") {
      delete courseClone[key];
    }
  });
  return http.post("/subject", courseClone);
}

export function deleteCourse(subjectId) {
  return http.delete(`subject/${subjectId}`);
}
