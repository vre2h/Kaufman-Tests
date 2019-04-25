import React from "react";
import { View, TouchableOpacity, Text, Platform, Image } from "react-native";
import { Icon } from "expo";
import Stager, { Stage } from "react-native-stager";

import test1 from "../tests/test-1/test-1";
import Colors from "../constants/Colors";
import { red } from "ansi-colors";
import { ScrollView } from "react-native-gesture-handler";

export default class ConceptualThinkingScreen extends React.Component {
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

  state = {
    tests: test1,
    finished: false
  };

  render() {
    const { tests, finished } = this.state;
    if (finished) {
      return (
        <ScrollView>
          <View>
            <View>
              <Text>Qstn: answer answered</Text>
            </View>
            {Array.from(tests).map(({ id, answer, answered }) => (
              <View key={id}>
                <Text>
                  {id}: {answer} {answered}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      );
    }

    return (
      <ScrollView>
        <Stager>
          {Array.from(tests).map(({ id, description, images }) => (
            <Stage continue={() => true} key={id}>
              {({ context }) => (
                <View>
                  <Text>{id}</Text>
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
                        <TouchableOpacity
                          key={idx}
                          onPress={() => {
                            this.setState(
                              ({ tests }) => ({
                                tests: {
                                  ...tests,
                                  [id - 1]: {
                                    ...tests[id - 1],
                                    answered: idx + 1
                                  }
                                },
                                finished: id === tests.length
                              }),
                              context.next
                            );
                          }}
                        >
                          <Image
                            style={{ width: 150, height: 150 }}
                            source={src}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              )}
            </Stage>
          ))}
        </Stager>
      </ScrollView>
    );
  }
}
