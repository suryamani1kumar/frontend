import { axiosInstance } from "./axiosInstance";

export const getBlog = async (page = 1, limit = 50) => {
  try {
    const response = await axiosInstance.get(
      `/allBlogs?page=${page}&limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getBlogBySlug = async (url) => {
  try {
    const response = await axiosInstance.get(`/blogBySlug?pageurl=${url}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message,
    );
    return error;
  }
};

export const getAllDestinations = async () => {
  try {
    const response = await axiosInstance.get("/allDestinationWeb");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching destinations:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getDestinationBySlug = async (url) => {
  try {
    console.log("url",url)
    const response = await axiosInstance.get(`/getDesWebBySlug?slug=${url}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message,
    );
    return error;
  }
};
