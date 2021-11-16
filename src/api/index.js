import axios from "axios";
import { API_BASE_URL } from "@/config";

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});

if (process.env.NODE_ENV === "development") {
  axiosClient.interceptors.request.use((config) => {
    return new Promise((resolve, reject) => {
      config.params = config.params || {};

      if (config.filters)
        config.params = Object.keys(config.filters).reduce(
          (params, key) => ({
            [`_${key}`]: config.filters[key],
            ...params,
          }),
          {}
        );

      resolve(config);
    });
  });

  axiosClient.interceptors.response.use((value) => {
    if (value.headers["x-total-count"]) {
      value.data.list = value.data;
      value.data.total = parseInt(value.headers["x-total-count"], 10);
    }

    return value;
  });
}

export const ApiService = {
  query(resource, params) {
    return axiosClient.get(resource, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return axiosClient.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axiosClient.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axiosClient.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axiosClient.put(`${resource}`, params);
  },

  delete(resource) {
    return axiosClient.delete(resource).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export default ApiService;

export const PostsService = {
  query(params) {
    return ApiService.query("posts", params);
  },

  get(postId) {
    return ApiService.get("posts", postId);
  },

  create(params) {
    return ApiService.post("posts", params);
  },

  update(postId, params) {
    return ApiService.update("posts", postId, { post: params });
  },

  destroy(postId) {
    return ApiService.delete(`posts/${postId}`);
  },
};

export const CommentsService = {
  get(postId) {
    if (!postId) {
      throw new Error("CommentsService.get() post id required to fetch comments");
    }
    return ApiService.get("posts", `${postId}/comments`);
  },

  post(postId, payload) {
    return ApiService.post(`posts/${postId}/comments`, {
      comment: { body: payload },
    });
  },

  destroy(postId, commentId) {
    return ApiService.delete(`posts/${postId}/comments/${commentId}`);
  },
};
