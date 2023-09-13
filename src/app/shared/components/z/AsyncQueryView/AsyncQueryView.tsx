import type { UseQueryResult } from "@tanstack/react-query";
import type { ReactNode } from "react";

export type AsyncQuery<T> = UseQueryResult<T, unknown>;

export interface AsyncQueryViewProps<T> {
  query: AsyncQuery<T>;
  loading?: ReactNode;
  error?: (error: unknown) => ReactNode;
  data: (data: T) => ReactNode;
}

export const AsyncQueryView = <T,>(props: AsyncQueryViewProps<T>) => {
  if (props.query.status === "loading") {
    return props.loading ?? <div>Caricamento in corso</div>;
  }

  if (props.query.status === "error") {
    return props.error && props.error(props.query.error);
  }

  return props.data(props.query.data);
};
