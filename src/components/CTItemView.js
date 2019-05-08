import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";

const CTView = ({
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
      <View onPress={e => console.log(e)}>
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
                    testsLength: testsLength - 1,
                    endTime: new Date(),
                    startTime,
                    data
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
    </TouchableWithoutFeedback>
  );
};

export default CTView;
