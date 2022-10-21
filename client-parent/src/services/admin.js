/* eslint-disable import/prefer-default-export */
import http from "./http";

export function getAdminUsers() {
  return http.get("/admin");
}

export function getAdminUser(adminId) {
  return http.get(`/admin/${adminId}`);
}

// export function addAdminUser(admin) {
//   return http.post("/admin");
// }

// export function updateAdminUser(adminId, admin) {
//   return http.put(`/admin/${adminId}`);
// }

export function deleteAdminUser(adminId) {
  return http.delete(`/admin/${adminId}`);
}
