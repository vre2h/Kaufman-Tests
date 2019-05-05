import React from "react";
import { If, Then, Else } from "react-if";

import { connect } from "react-redux";

import UserForm from "../components/UserForm";
import UserInfo from "../components/UserInfo";
import {
  setFname,
  setFathername,
  setLname,
  setEmail,
  setBirthday,
  setPhoneNumber,
  setAdditionalInfo
} from "../actions/user-info";

class UserInfoScreen extends React.Component {
  static navigationOptions = {
    title: "User Info"
  };

  state = {
    isEdit: false
  };

  render() {
    const { isEdit } = this.state;
    const {
      fatherName,
      lname,
      fname,
      email,
      additionalInfo,
      birthday,
      phoneNumber
    } = this.props;

    return (
      <If condition={isEdit}>
        <Then>
          <UserForm
            fname={fname}
            lname={lname}
            fatherName={fatherName}
            phoneNumber={phoneNumber}
            email={email}
            additionalInfo={additionalInfo}
            birthday={birthday}
            onFatherName={this.onFatherName}
            onFname={this.onFname}
            onLname={this.onLname}
            onEmail={this.onEmail}
            onAdditionalInfo={this.onAdditionalInfo}
            onBirthday={this.onBirthday}
            onPhoneNumber={this.onPhoneNumber}
            onEdit={this.onEdit}
          />
        </Then>
        <Else>
          <UserInfo
            fname={fname}
            lname={lname}
            fatherName={fatherName}
            email={email}
            additionalInfo={additionalInfo}
            phoneNumber={phoneNumber}
            birthday={birthday}
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

  onEmail = email => this.props.setEmail(email);

  onAdditionalInfo = additionalInfo =>
    this.props.setAdditionalInfo(additionalInfo);

  onBirthday = bday => this.props.setBirthday(bday);

  onPhoneNumber = phoneNumber => this.props.setPhoneNumber(phoneNumber);
}

const mapStateToProps = state => ({
  fname: state.userInfo.fname,
  lname: state.userInfo.lname,
  fatherName: state.userInfo.fatherName,
  email: state.userInfo.email,
  birthday: state.userInfo.birthday,
  additionalInfo: state.userInfo.additionalInfo,
  phoneNumber: state.userInfo.phoneNumber
});

const mapDispatchToProps = dispatch => ({
  setLname: lname => dispatch(setLname(lname)),
  setFname: fname => dispatch(setFname(fname)),
  setFatherName: fatherName => dispatch(setFathername(fatherName)),
  setEmail: email => dispatch(setEmail(email)),
  setBirthday: bday => dispatch(setBirthday(bday)),
  setAdditionalInfo: additionalInfo =>
    dispatch(setAdditionalInfo(additionalInfo)),
  setPhoneNumber: phoneNumber => dispatch(setPhoneNumber(phoneNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoScreen);
