import React from "react";
import { FlatList, Platform } from "react-native";
import { ListItem } from "react-native-elements";
import TabBarIcon from "../components/TabBarIcon";

const list = [
  {
    idx: 1,
    name: "Test 1"
  },
  {
    idx: 2,
    name: "Test 2"
  }
];

export default class TestsScreen extends React.Component {
  static navigationOptions = {
    title: "Tests"
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    return (
      <ListItem
        rightIcon={() => (
          <TabBarIcon
            name={Platform.OS === "ios" ? `ios-arrow-forward` : "right"}
            _onPress={() => navigation.navigate("Tests")}
          />
        )}
        key={item.idx}
        title={item.name}
        onPress={() => navigate("Test")}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    );
  }
}
