import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_API_URL || "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

function apiRequest(path, method = "get", data = {}) {
  return new Promise((resolve, reject) => {
    api
      .request({
        url: path,
        method,
        ...(method === "get"
          ? {
              params: data,
            }
          : {
              data,
            }),
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * @example export const getPostById = (id, data) => apiRequest(`/posts/${id}`, "get", data);
 * @example export const getPosts = (data) => apiRequest(`/posts`, "get", data);
 * @example export const createPost = (data) => apiRequest(`/posts`, "post", data);
 */
