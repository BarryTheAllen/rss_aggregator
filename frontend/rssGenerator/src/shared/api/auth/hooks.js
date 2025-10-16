import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from ".";

export const useCreateRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser
  });
};
