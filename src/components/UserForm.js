import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

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
          <Item floatingLabel>
            <Label>Age</Label>
            <Input value={birthday} onChangeText={onBirthday} />
          </Item>
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
