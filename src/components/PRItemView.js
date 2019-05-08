import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

const PRItemView = ({
  context,
  images,
  id,
  handleChosenItem,
  testsLength,
  handleStartTime
}) => {
  const startTime = new Date();
  handleStartTime({ startTime, itemId: id - 1 });
  const data = [];

  return (
    <TouchableWithoutFeedback
      onPress={e =>
        data.push([
          e.nativeEvent.pageX.toFixed(0),
          e.nativeEvent.pageY.toFixed(0)
        ])
      }
    >
      <View flex={1}>
        <Text>{id}</Text>
        <View
          flex={1}
          style={{
            marginTop: 20,
            marginBottom: 15
          }}
        >
          <Image
            style={{
              height: 100,
              width: Dimensions.get("window").width
            }}
            source={images[0]}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {images.slice(1).map((src, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  handleChosenItem({
                    itemId: id - 1,
                    answerId: idx + 1,
                    testsLength: testsLength - 1,
                    endTime: new Date(),
                    startTime,
                    data
                  });
                  context.next();
                }}
              >
                <Image
                  style={{ width: 150, height: 150, margin: 5 }}
                  source={src}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PRItemView;
