import http from "./http";

export function getParents() {
  return http.get("/parent");
}

export function getParent(parentId) {
  return http.get(`/parent/${parentId}`);
}

export function addParent(parent) {
  const parentClone = { ...parent };
  Object.keys(parent).forEach((key) => {
    if (parent[key] === "" || parent[key] === null || parent[key] === "undefined") {
      delete parentClone[key];
    }
  });
  return http.post("/parent", parentClone);
}

export function deleteParent(parentId) {
  return http.delete(`parent/${parentId}`);
}
