import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Stager, { Stage } from "react-native-stager";
import { ScrollView } from "react-native-gesture-handler";
import { When } from "react-if";

const TestsStager = ({ tests, handleChosenItem }) => {
  return (
    <ScrollView>
      <When condition={!!tests.length}>
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
                      flexWrap: "wrap"
                    }}
                  >
                    {images.map((src, idx) => {
                      return (
                        <TouchableOpacity
                          key={idx}
                          onPress={() => {
                            handleChosenItem({
                              itemId: id - 1,
                              answerId: idx + 1,
                              testsLength: tests.length - 1
                            });
                            context.next();
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
      </When>
    </ScrollView>
  );
};

export default TestsStager;
