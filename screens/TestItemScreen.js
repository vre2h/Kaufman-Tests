import React from "react";
import { TouchableOpacity, View, Text, Platform, Image } from "react-native";
import { Icon } from "expo";

import test1 from "../tests/test-1/test-1";
import Colors from "../constants/Colors";
import { red } from "ansi-colors";
import { ScrollView } from "react-native-gesture-handler";

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
          color={Colors.tabIconSelected}
        />
        <Text
          style={{ marginLeft: 7, color: Colors.tabIconSelected, fontSize: 16 }}
        >
          Back
        </Text>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Test 1</Text>
          {test1.map(({ id, description, images }) => (
            <View key={id}>
              <Text>{description}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  borderColor: red
                }}
              >
                {images.map((src, idx) => {
                  return (
                    <Image
                      style={{ width: 150, height: 150 }}
                      source={src}
                      key={idx}
                    />
                  );
                })}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
