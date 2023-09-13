import { env } from "../../config/env";

export const useApplicationMode = ():
  | "debug"
  | "development"
  | "production" => {
  return env.VITE_APPLICATION_MODE;
};
