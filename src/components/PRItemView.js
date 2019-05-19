import React from "react";
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
class PRItemView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: ""
    };
  }

  componentDidMount() {
    const startTime = new Date();
    const { itemId } = this.state;

    this.setState({
      startTime
    });
    this.props.handleStartTime({ startTime, itemId });
  }

  render() {
    const { startTime } = this.state;
    const { images, onSubmit, testsLength, itemId } = this.props;

    return (
      <View flex={1}>
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
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {images.slice(1).map((src, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={event => {
                  onSubmit({
                    answerId: idx + 1,
                    dots: [event.nativeEvent.pageX, event.nativeEvent.pageY],
                    startTime,
                    testsLength,
                    itemId
                  });
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
    );
  }
}

export default PRItemView;
