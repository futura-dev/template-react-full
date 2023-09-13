import { FC, ReactNode } from "react";
import { useMeQuery } from "../../../../../api/auth/auth.queries";
import { AsyncQueryView } from "../AsyncQueryView/AsyncQueryView";
import { Navigate } from "react-router-dom";

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const meQuery = useMeQuery();

  return (
    <AsyncQueryView
      query={meQuery}
      data={_ => children}
      loading={<div>@ LOADING ...</div>}
      error={_ => <Navigate to={"/sign-in"} />}
    ></AsyncQueryView>
  );
};
