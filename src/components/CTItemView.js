import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

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

  // onTouch = dots => {
  //   this.setState(({ data }) => ({
  //     data: [...data, dots]
  //   }));
  // };

  onSubmit = async ({ dots, answerId }) => {
    const { itemId, testsLength, startTime } = this.state;
    const { handleChosenItem, context, data } = this.props;
    handleChosenItem({
      itemId,
      answerId,
      testsLength,
      endTime: new Date(),
      startTime,
      data: [...data, dots]
    });
    await context.next();
  };

  render() {
    const { images } = this.props;

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
    );
  }
}

export default CTView;
