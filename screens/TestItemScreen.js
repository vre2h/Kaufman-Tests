import React from "react";
import { TouchableOpacity, View, Text, Platform, Image } from "react-native";
import { Icon } from "expo";

import test1 from "../tests/test-1/test-1";
import Colors from "../constants/Colors";

export default class TestItem extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Test 1",
    tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10
        }}
        onPress={() => navigation.navigate("Tests")}
      >
        <Icon.Ionicons
          name={Platform.OS === "ios" ? `ios-arrow-back` : "left"}
          size={35}
          color={Colors.tabIconDefault}
        />
        <Text
          style={{ marginLeft: 7, color: Colors.tabIconDefault, fontSize: 16 }}
        >
          Back
        </Text>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View>
        <Text>Test 1</Text>
        {test1.map(({ description, img, answer }) => (
          <View>
            <Text>{description}</Text>
            {img.map(e => <Image source=""></Image>)}
          </View>
        ))}
      </View>
    );
  }
}
