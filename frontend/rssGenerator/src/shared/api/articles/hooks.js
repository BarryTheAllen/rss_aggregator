import { useMutation, useQuery } from "@tanstack/react-query";
import { getArticles, refreshArticles } from "./api";
import { queryClient } from "../client";

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getArticles
  });
};

export const useRefreshArticles = () => {
  return useMutation({
    mutationFn: refreshArticles,
    onSuccess: data => {
      return queryClient.invalidateQueries({ queryKey: ["articles"] });
    }
  });
};
