import { Axios } from "../../app/shared/config/axios";

export const UserApi = {
  async all() {
    const res = await Axios.get("/api/rest/user");

    return {
      data: res.data
    };
  }
};
