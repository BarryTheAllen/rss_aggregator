import { useQuery, useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser, userProfile } from ".";
import { useNavigate } from "react-router";
import { queryClient } from "../client";

export const useCreateRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/Login");
    }
  });
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      const data = await userProfile();
      queryClient.setQueriesData(["profile"], data);
      navigate("/Home");
    }
  });
};

export const useProfileUser = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: userProfile,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
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
