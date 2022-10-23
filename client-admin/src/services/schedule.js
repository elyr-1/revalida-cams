/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getSchedule() {
  return http.get("/schedule");
}

export function getScheduleById(scheduleId) {
  return http.get(`/schedule/${scheduleId}`);
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

export function editSchedule(scheduleId, schedule) {
  return http.patch(`/schedule/${scheduleId}`, schedule);
}

export function deleteSchedule(scheduleId) {
  return http.delete(`schedule/${scheduleId}`);
}
