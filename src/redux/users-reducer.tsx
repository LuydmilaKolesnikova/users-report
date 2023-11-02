import { usersAPI } from "../api/usersAPI";
import { initialState } from "./initialState";

const SET_USERS_DATA = "SET_USERS_DATA";

interface SetUsersDataAction {
  type: typeof SET_USERS_DATA;
  usersData: UsersDataState;
}

export function setUsersData(usersData: UsersDataState): SetUsersDataAction {
  return {
    type: SET_USERS_DATA,
    usersData
  };
}

export interface UserState {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

export interface UsersDataState extends Array<UserState> {}

const usersReducer = (
  state: UsersDataState = initialState,
  action: SetUsersDataAction
): UsersDataState => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return action.usersData;
    }
    default:
      return state;
  }
};

type SetUsersDataDispatchCallback = (
  param: SetUsersDataAction
) => UsersDataState;

export function getUsersData(name: string) {
  return async (dispatch: SetUsersDataDispatchCallback) => {
    try {
      const response = await usersAPI.setUsersData(name);
      dispatch(setUsersData(response.data));
    } catch (e) {
      alert("No response from server");
    }
  };
}

export default usersReducer;
