import { apiClient, queryClient } from "../client";

export const addRssFeed = async feedData => {
  const res = await apiClient.post("/feed/add", feedData);
  return res.data;
};

export const getRssFeed = async () => {
  const res = await apiClient.get("/feed/all");
  return res.data;
};
