import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line no-unused-vars
const apiRequest = function (path, method = "get", data = {}) {
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
};

/**
 * @example export const getPostById = (id, data) => apiRequest(`/posts/${id}`, "get", data);
 * @example export const getPosts = (data) => apiRequest(`/posts`, "get", data);
 * @example export const createPost = (data) => apiRequest(`/posts`, "post", data);
 */
