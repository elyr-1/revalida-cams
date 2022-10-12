/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getPrograms() {
  return http.get("/program");
}
