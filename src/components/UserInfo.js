import React from "react";
import {
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Body,
  Icon,
  View
} from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userInfo: {
    marginTop: 15,
    marginBottom: 20
  },
  userDesc: {
    fontWeight: "bold"
  },
  editBtnContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  editBtn: {
    marginTop: 20
  }
});

const UserInfo = ({ fname, lname, fatherName, onEdit }) => {
  return (
    <Container>
      <Content keyboardShouldPersistTaps="always" padder>
        <Card>
          <CardItem header bordered>
            <Text>User Profile</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <View style={styles.userInfo}>
                <Text style={styles.userDesc}>First Name:</Text>
                <Text>{fname || "-"}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userDesc}>Last Name:</Text>
                <Text>{lname || "-"}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userDesc}>Father Name:</Text>
                <Text>{fatherName || "-"}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
        <View style={styles.editBtnContainer}>
          <Button
            iconLeft
            block
            style={styles.editBtn}
            onPress={() => onEdit(true)}
          >
            <Icon name="md-create" />
            <Text>Edit</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default UserInfo;
