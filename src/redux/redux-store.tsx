import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";
import { UsersDataState } from "./users-reducer";

let reducers = combineReducers({
  usersData: usersReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export interface State {
  usersData: UsersDataState;
}

export default store;
