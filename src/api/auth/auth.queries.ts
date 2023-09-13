import { useMutation, useQuery } from "react-query";
import { AuthApi } from "./auth.api";

export const useMeQuery = () =>
  useQuery({
    queryFn: AuthApi.me
  });

export const useSignInMutation = () =>
  useMutation({
    mutationFn: AuthApi.signIn
  });

export const useSignOutMutation = () =>
  useMutation({ mutationFn: AuthApi.signOut });
