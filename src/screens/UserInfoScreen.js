import React from "react";
import { If, Then, Else } from "react-if";

import { connect } from "react-redux";

import UserForm from "../components/UserForm";
import UserInfo from "../components/UserInfo";
import { setFname, setFathername, setLname } from "../actions/user-info";

class UserInfoScreen extends React.Component {
  static navigationOptions = {
    title: "User Info"
  };

  state = {
    isEdit: false
  };

  render() {
    const { isEdit } = this.state;
    const { fatherName, lname, fname } = this.props;

    return (
      <If condition={isEdit}>
        <Then>
          <UserForm
            fname={fname}
            lname={lname}
            fatherName={fatherName}
            onFatherName={this.onFatherName}
            onFname={this.onFname}
            onLname={this.onLname}
            onEdit={this.onEdit}
          />
        </Then>
        <Else>
          <UserInfo
            fname={fname}
            lname={lname}
            fatherName={fatherName}
            onEdit={this.onEdit}
          />
        </Else>
      </If>
    );
  }

  onEdit = isEdit => this.setState({ isEdit });

  onFname = fname => this.props.setFname(fname);

  onLname = lname => this.props.setLname(lname);

  onFatherName = fatherName => this.props.setFatherName(fatherName);
}

const mapStateToProps = state => ({
  fname: state.userInfo.fname,
  lname: state.userInfo.lname,
  fatherName: state.userInfo.fatherName
});

const mapDispatchToProps = dispatch => ({
  setLname: lname => dispatch(setLname(lname)),
  setFname: fname => dispatch(setFname(fname)),
  setFatherName: fatherName => dispatch(setFathername(fatherName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoScreen);
