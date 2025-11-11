import { useQuery, useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser, userProfile } from ".";
import { useNavigate } from "react-router";
import { queryClient } from "@/shared/api/client";

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
    queryFn: async () => {
      try {
        const res = await userProfile();
        return res;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    throwOnError: false,
    refetchOnReconnect: false,
    onError: error => {
      console.log("error");
      if (error.response?.status === 401) {
        queryClient.removeQueries({ queryKey: ["profile"] });
      }
    }
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
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
