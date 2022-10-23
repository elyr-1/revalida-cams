/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getUsers() {
  return http.get("/auth");
}

export function login(username, password) {
  return http.post("/auth", { username, password });
}

export function getCurrentUser() {}
