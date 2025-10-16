import { apiClient } from "../client";

export const registerUser = async regData => {
  const res = await apiClient.post("/auth/register", regData);
  return res.data;
};
