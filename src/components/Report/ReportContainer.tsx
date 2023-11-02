import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Report from "./Report";
import { getUsersData } from "../../redux/users-reducer";
import { State } from "../../redux/redux-store";
import { UsersDataState } from "../../redux/users-reducer";

interface DispatchProps {
  getUsersData: (name: string) => Promise<void>;
}

export interface Props extends DispatchProps {
  usersData: UsersDataState;
}

class ReportContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getUsersData("");
  }

  render() {
    return <Report {...this.props} usersData={this.props.usersData} />;
  }
}

const mapStateToProps = (state: State) => ({
  usersData: state.usersData,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  getUsersData: (name: string) => dispatch(getUsersData(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);
