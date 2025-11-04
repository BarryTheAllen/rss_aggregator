import { useQuery, useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser, userProfile } from ".";
import { useNavigate } from "react-router";
import { queryClient } from "../client";
import { getArticles } from "../articles/api";

export const useCreateRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/Login");
    }
  });
};

export const useProfileUser = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: userProfile,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  });
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      navigate("/Home");
    }
  });
};

export const useLogoutUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["profile"] });
      navigate("/Login");
    }
  });
};
