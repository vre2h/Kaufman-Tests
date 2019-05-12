import React from "react";
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
class PRItemView extends React.Component {
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
              flexWrap: "wrap"
            }}
          >
            {images.slice(1).map((src, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={event => {
                    this.onSubmit({
                      answerId: idx + 1,
                      dots: [event.nativeEvent.pageX, event.nativeEvent.pageY]
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
      </View>
    );
  }
}

export default PRItemView;
