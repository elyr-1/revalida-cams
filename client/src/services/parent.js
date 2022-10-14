import http from "./http";

export function getParents() {
  return http.get("/parent");
}

export function getParent(parentId) {
  return http.get(`/parent/${parentId}`);
}

export function deleteParent(parentId) {
  return http.delete(`parent/${parentId}`);
}
