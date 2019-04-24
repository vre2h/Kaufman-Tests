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
  fatherName
}) => {
  return (
    <Container>
      <Content>
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
