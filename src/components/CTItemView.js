import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

class CTView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: "",
      itemId: this.props.id - 1,
      testsLength: this.props.testsLength - 1,
      data: []
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

  onTouch = dots => {
    this.setState(({ data }) => ({
      data: [...data, dots]
    }));
  };

  onSubmit = async ({ dots, answerId }) => {
    await this.onTouch(dots);

    const { itemId, testsLength, startTime, data } = this.state;
    const { handleChosenItem, context } = this.props;
    console.log(data);
    handleChosenItem({
      itemId,
      answerId,
      testsLength,
      endTime: new Date(),
      startTime,
      data
    });
    context.next();
  };

  render() {
    const { images } = this.props;

    return (
      <View
        onStartShouldSetResponder={event => {
          this.onTouch([event.nativeEvent.pageX, event.nativeEvent.pageY]);
          return true;
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {images.map((src, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={event => {
                this.onSubmit({
                  answerId: idx + 1,
                  dots: [event.nativeEvent.pageX, event.nativeEvent.pageY]
                });
              }}
            >
              <Image style={{ width: 150, height: 150 }} source={src} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default CTView;
