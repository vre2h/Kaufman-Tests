import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View
} from "native-base";
import DatePicker from "react-native-datepicker";

const UserForm = ({
  onLname,
  onFname,
  onFatherName,
  onEdit,
  fname,
  lname,
  fatherName,
  email,
  birthday,
  additionalInfo,
  onPhoneNumber,
  onEmail,
  onAdditionalInfo,
  onBirthday,
  phoneNumber
}) => {
  return (
    <Container>
      <Content keyboardShouldPersistTaps="always">
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input value={fname} onChangeText={onFname} />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input value={lname} onChangeText={onLname} />
          </Item>
          <Item floatingLabel>
            <Label>Father Name</Label>
            <Input value={fatherName} onChangeText={onFatherName} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input value={email} onChangeText={onEmail} />
          </Item>
          <Item floatingLabel>
            <Label>Phone Number</Label>
            <Input value={phoneNumber} onChangeText={onPhoneNumber} />
          </Item>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "stretch",
              marginLeft: 15,
              marginTop: 15,
              borderBottomColor: "lightgrey",
              borderBottomWidth: 0.5
            }}
          >
            <Label
              style={{
                color: "grey",
                fontSize: 15
              }}
            >
              Birthday
            </Label>
            <DatePicker
              style={{ width: "auto" }}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              date={birthday}
              onDateChange={onBirthday}
              customStyles={{
                dateInput: {
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0
                }
              }}
            />
          </View>
          <Item floatingLabel>
            <Label>Additional Info</Label>
            <Input
              onChangeText={onAdditionalInfo}
              value={additionalInfo}
              numberOfLines={5}
              multiline={true}
              style={{
                height: 150
              }}
            />
          </Item>
        </Form>
        <Button
          onPress={() => onEdit(false)}
          block
          primary
          style={{ margin: 15, marginTop: 35 }}
        >
          <Text>Save</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default UserForm;
