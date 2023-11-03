import { instance } from "./instanceAPI";
import { UsersList } from "../redux/users-reducer";
import { initialState } from "../redux/initialState";

interface usersResponse {
  data: UsersList;
}

export const usersAPI = {
  getUsers(name: string): Promise<usersResponse> | usersResponse {
    if (document.location.host.endsWith('github.io')) {
      return {data: initialState.filter(user => user.name.toLowerCase().includes((name).toLowerCase()))};
    } 
    return instance.get(`?term=${name}`)
  },
};


