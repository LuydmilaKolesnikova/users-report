import { instance } from "./instanceAPI";
import { UsersDataState } from "../redux/users-reducer";

interface usersResponse {
  data: UsersDataState;
}

export const usersAPI = {
  setUsersData(name: string): Promise<usersResponse> {
    return instance.get(`?term=${name}`);
  },
};
