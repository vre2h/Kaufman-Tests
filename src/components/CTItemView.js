import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

class CTView extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    startTime: ""
  };

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {images.map((src, idx) => (
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
            <Image style={{ width: 150, height: 150 }} source={src} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default CTView;
