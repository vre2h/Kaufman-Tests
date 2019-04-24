import React from "react";
import { If, Then, Else } from "react-if";
import UserForm from "../components/UserForm";
import UserInfo from "../components/UserInfo";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "User Info"
  };

  state = {
    fname: "",
    lname: "",
    fatherName: "",
    age: "",
    description: "",
    isEdit: false
  };

  render() {
    const { isEdit, fatherName, lname, fname } = this.state;

    return (
      <If condition={isEdit}>
        <Then>
          <UserForm
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

  onFname = fname =>
    this.setState({
      fname
    });

  onLname = lname =>
    this.setState({
      lname
    });

  onFatherName = fatherName =>
    this.setState({
      fatherName
    });
}
