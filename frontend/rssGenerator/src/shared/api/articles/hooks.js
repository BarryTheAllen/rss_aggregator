import { useMutation, useQuery } from "@tanstack/react-query";
import { getArticles, refreshArticles } from "./api";
import { queryClient } from "../client";
import { useLoginUser, useProfileUser } from "../auth";

export const useGetArticles = enabled => {
  return useQuery({
    queryKey: ["articles"],
    enabled: enabled,
    queryFn: getArticles,
    retry: false
  });
};

export const useRefreshArticles = () => {
  return useMutation({
    mutationFn: refreshArticles,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    }
  });
};
