import { useMutation, useQuery } from "@tanstack/react-query";
import { getArticles, getArticlesByTag, refreshArticles } from "./api";
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

export const useGetArticlesByTag = tag => {
  return useQuery({
    queryKey: ["articles", "by-tag", tag],
    queryFn: async () => {
      if (!tag) {
        throw new Error("Tag is required");
      }
      return await getArticlesByTag(tag);
    },
    enabled: Boolean(tag)
  });
};
