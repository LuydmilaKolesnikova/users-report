import { usersAPI } from "../api/usersAPI";
import { initialState } from "./initialState";

const SET_USERS_DATA = "SET_USERS_DATA";

interface SetUsersDataAction {
  type: typeof SET_USERS_DATA;
  usersData: UsersList;
}

export function setUsersData(usersData: UsersList): SetUsersDataAction {
  return {
    type: SET_USERS_DATA,
    usersData,
  };
}

export interface UserInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

export type UsersList = UserInfo[];

const usersReducer = (
  state: UsersList = initialState,
  action: SetUsersDataAction
): UsersList => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return action.usersData;
    }
    default:
      return state;
  }
};

type SetUsersDataDispatchCallback = (param: SetUsersDataAction) => UsersList;

export function updateUsersData(name: string) {
  return async (dispatch: SetUsersDataDispatchCallback) => {
    try {
      const response = await usersAPI.getUsers(name);
      dispatch(setUsersData(response.data));
    } catch (e) {}
  };
}

export default usersReducer;
