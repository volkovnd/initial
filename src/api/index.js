import axios from "axios";

import { API_BASE_URL } from "@/config";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
