import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

const CTView = ({ context, images, id, handleChosenItem, testsLength }) => {
  return (
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
                  testsLength: testsLength - 1
                });
                context.next();
              }}
            >
              <Image style={{ width: 150, height: 150 }} source={src} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CTView;
