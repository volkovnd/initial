import axios from "axios";
import { API_BASE_URL } from "@/config";

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});

export const ApiService = {
  query(endpoint, params) {
    if (process.env.NODE_ENV === "development") {
      if (params.limit != null) params._limit = params.limit;
      if (params.offset != null) params._offset = params.offset;
    }

    return axiosClient
      .get(`/${endpoint}`, {
        params,
      })
      .catch((error) => {
        throw new Error(`ApiService[query] ${error}`);
      });
  },

  get(endpoint, resource) {
    return axiosClient.get(`/${endpoint}/${resource}`).catch((error) => {
      throw new Error(`ApiService[get] ${error}`);
    });
  },

  post(endpoint, data) {
    return axiosClient.post(`/${endpoint}`, data).catch((error) => {
      throw new Error(`ApiService[post] ${error}`);
    });
  },

  update(endpoint, resource, data) {
    return axiosClient.put(`/${endpoint}/${resource}`, data).catch((error) => {
      throw new Error(`ApiService[update] ${error}`);
    });
  },

  put(endpoint, data) {
    return axiosClient.put(`/${endpoint}`, data).catch((error) => {
      throw new Error(`ApiService[put] ${error}`);
    });
  },

  delete(endpoint, resource) {
    return axiosClient.delete(`/${endpoint}/${resource}`).catch((error) => {
      throw new Error(`ApiService[delete] ${error}`);
    });
  },
};

export default ApiService;

export const PostsService = {
  query(params) {
    return ApiService.query("posts", params);
  },

  get(id) {
    return ApiService.get("posts", id);
  },

  create(data) {
    return ApiService.post("posts", data);
  },

  update(id, data) {
    return ApiService.update("posts", id, data);
  },

  destroy(id) {
    return ApiService.delete("posts", id);
  },
};

export const PostsCommentsService = {
  get(postId) {
    if (!postId) {
      throw new Error("CommentsService.get() post id required to fetch comments");
    }
    return ApiService.get(`posts/${postId}/comments`);
  },

  create(postId, data) {
    return ApiService.post(`posts/${postId}/comments`, data);
  },

  destroy(postId, commentId) {
    return ApiService.delete(`posts/${postId}/comments`, commentId);
  },
};
