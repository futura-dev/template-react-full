import { User } from "../../app/model/user/user";
import { Axios } from "../../app/shared/config/axios";
import { validateObject } from "../../utils/zod/validator";
import { meResponseSchema, signInResponseSchema } from "./validators/schema";

export const AuthApi = {
  signIn: async (input: { username: string; password: string }) => {
    const res = await Axios.post("/auth/sign-in", { ...input });
    // validate
    validateObject(signInResponseSchema, res.data);
  },

  me: async (): Promise<{ data: User }> => {
    const res = await Axios.get("/auth/me");
    // validate
    const validRes = await validateObject(meResponseSchema, res.data);
    return {
      data: {
        id: validRes.id,
        username: validRes.username,
        password: validRes.password
      }
    };
  },

  signOut: async () => {
    await Axios.post("/auth/sign-out", {});
  }
};
