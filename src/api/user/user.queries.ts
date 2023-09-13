import { useQuery } from "react-query";
import { UserApi } from "./user.api";

export const userQueryKeys = {
  all: ["users"] as const,
  lists: () => [...userQueryKeys.all, "list"] as const,
  list: (...params: unknown[]) => [...userQueryKeys.lists(), ...params] as const
};

export const useUserListQuery = () =>
  useQuery({
    queryKey: [...userQueryKeys.lists()],
    queryFn: UserApi.all
  });
