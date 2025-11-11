import { apiClient, queryClient } from "@/shared/api/client";

export const addRssFeed = async feedData => {
  const res = await apiClient.post("/feed/", feedData);
  return res.data;
};

export const getRssFeed = async newFeed => {
  const res = await apiClient.get("/feed/all");
  return res.data;
};
