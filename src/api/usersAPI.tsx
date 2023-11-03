import { instance } from "./instanceAPI";
import { UsersList } from "../redux/users-reducer";

interface usersResponse {
  data: UsersList;
}

export const usersAPI = {
  getUsers(name: string): Promise<usersResponse> {
    return instance.get(`?term=${name}`);
  },
};
