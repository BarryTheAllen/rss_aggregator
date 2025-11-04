import { apiClient } from "../client";

export const getArticles = async () => {
  const res = await apiClient.get("/article");
  return res.data;
};

export const refreshArticles = async () => {
  const res = await apiClient.post("/article/refresh");
  return res.data;
};

export const getArticlesByTag = async tag => {
  const res = await apiClient.get("/article/by-tag", {
    params: { tag }
  });
  return res.data;
};
