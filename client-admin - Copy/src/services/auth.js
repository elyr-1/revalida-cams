/* eslint-disable import/prefer-default-export */
import http from "./http";

export function login(username, password) {
  return http.post("/auth", { username, password });
}
