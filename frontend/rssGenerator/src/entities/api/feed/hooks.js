import { useMutation, useQuery } from "@tanstack/react-query";
import { addRssFeed, getRssFeed } from "./api";
import { queryClient } from "../client";

export const useGetRssFeed = () => {
  return useQuery({
    queryKey: ["getRss"],
    queryFn: getRssFeed
  });
};

export const useAddRssFeed = () => {
  return useMutation({
    mutationFn: addRssFeed,
    onMutate: async newFeed => {
      const oldFeed = queryClient.getQueryData(["getRss"]) || [];
      queryClient.setQueryData(["getRss"], [...oldFeed, newFeed]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRss"] });
    }
  });
};
