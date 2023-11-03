import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Report from "./Report";
import { updateUsersData } from "../../redux/users-reducer";
import { State } from "../../redux/redux-store";
import { UsersList } from "../../redux/users-reducer";

interface DispatchProps {
  updateUsersData: (name: string) => Promise<void>;
}

export interface Props extends DispatchProps {
  usersData: UsersList;
}

class ReportContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.updateUsersData("");
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
  updateUsersData: (name: string) => dispatch(updateUsersData(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);
