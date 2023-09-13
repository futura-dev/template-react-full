import { useMutation, useQuery, useQueryClient } from "react-query";
import { TodoApi } from "./todo.api";
import { ParamsOf } from "../../utils/types/types";

export const todoQueryKeys = {
  all: ["products"] as const,
  lists: () => [...todoQueryKeys.all, "list"] as const,
  list: (...params: unknown[]) =>
    [...todoQueryKeys.lists(), ...params] as const,
  details: () => [...todoQueryKeys.all, "detail"] as const,
  detail: (...params: unknown[]) =>
    [...todoQueryKeys.details(), ...params] as const
};

export const useTodoListQuery = () =>
  useQuery({
    queryKey: todoQueryKeys.list(),
    queryFn: () => TodoApi.all()
  });

export const useTodoQuery = (...params: ParamsOf<typeof TodoApi.get>) =>
  useQuery({
    queryKey: todoQueryKeys.detail(...params),
    queryFn: () => TodoApi.get(...params)
  });

export const useTodoCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => TodoApi.create(),
    onSuccess: () => {
      queryClient.invalidateQueries(todoQueryKeys.lists());
    }
  });
};
