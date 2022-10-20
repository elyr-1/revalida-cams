/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getSchedule() {
  return http.get("/schedule");
}

export function getScheduleById(sessionId) {
  return http.get(`/schedule/${sessionId}`);
}

export function addSchedule(schedule) {
  const scheduleClone = { ...schedule };
  Object.keys(schedule).forEach((key) => {
    if (schedule[key] === "" || schedule[key] === null || schedule[key] === "undefined") {
      delete scheduleClone[key];
    }
  });
  return http.post("/schedule", scheduleClone);
}

export function editSchedule(sessionId, schedule) {
  return http.patch(`/schedule/${sessionId}`, schedule);
}

export function deleteSchedule(sessionId) {
  return http.delete(`schedule/${sessionId}`);
}
