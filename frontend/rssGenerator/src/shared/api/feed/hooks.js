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
    onSuccess: async () => {
      const data = await addRssFeed();
      queryClient.invalidateQueries({ queryKey: ["getRss"] });
    }
  });
};
