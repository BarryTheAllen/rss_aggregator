import { apiClient } from "@/shared/api/client";

export const registerUser = async regData => {
  const res = await apiClient.post("/auth/register", regData);
  return res.data;
};

export const loginUser = async loginData => {
  const res = await apiClient.post("/auth/login", loginData);
  return res.data;
};

export const userProfile = async () => {
  const res = await apiClient.get("/auth/me");
  return res.data;
};

export const logoutUser = async () => {
  const res = await apiClient.post("auth/logout");
  return res.data;
};
