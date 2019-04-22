import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Textarea,
  Card,
  CardItem,
  Body
} from "native-base";

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

    if (isEdit) {
      return (
        <Container>
          <Content>
            <Form>
              <Item disabled={!isEdit} floatingLabel>
                <Label>Name</Label>
                <Input
                  value={fname}
                  onChangeText={fname =>
                    this.setState({
                      fname
                    })
                  }
                />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input
                  value={lname}
                  onChangeText={lname =>
                    this.setState({
                      lname
                    })
                  }
                />
              </Item>
              <Item floatingLabel>
                <Label>Father Name</Label>
                <Input
                  value={fatherName}
                  onChangeText={fatherName =>
                    this.setState({
                      fatherName
                    })
                  }
                />
              </Item>
            </Form>
            <Button
              onPress={() =>
                this.setState({
                  isEdit: false
                })
              }
              block
              info
              style={{ margin: 15, marginTop: 35 }}
            >
              <Text>Save</Text>
            </Button>
          </Content>
        </Container>
      );
    }

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>User Profile</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>First Name: {fname}</Text>
                <Text>Last Name: {lname}</Text>
                <Text>Father Name: {fatherName}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button
                onPress={() =>
                  this.setState({
                    isEdit: true
                  })
                }
              >
                <Text>Edit</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
