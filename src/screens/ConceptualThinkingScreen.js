import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Stager, {
  Stage,
  StageButtons,
  styles,
  StageProgress
} from "react-native-stager";
import { If, Then, Else } from "react-if";
import { Button, View, Text } from "native-base";

import { setCTTestItem, setCTTestItemTime } from "../actions/tests";
import CTItemView from "../components/CTItemView";
import BackHeader from "../components/BackHeader";
import Results from "../components/Results";
import resultStyles from "../styles/Results";
import testsStyles from "../styles/Tests";

class ConceptualThinkingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Conceptual Thinking",
    tabBarVisible: false,
    headerLeft: () => <BackHeader navigate={navigation.navigate} />
  });

  state = {
    data: [],
    id: 1
  };

  onTouch = (idx, dots) => {
    this.setState(({ data, id }) => ({
      data: [...data, dots],
      id: idx || id
    }));
  };

  render() {
    const { tests, finished, handleChosenItem, handleStartTime } = this.props;

    return (
      <ScrollView
        contentContainerStyle={
          finished ? resultStyles.container : testsStyles.container
        }
      >
        <View
          onStartShouldSetResponder={event => {
            this.onTouch(undefined, [
              event.nativeEvent.pageX,
              event.nativeEvent.pageY
            ]);
            return true;
          }}
          style={{ flex: 1 }}
        >
          <If condition={finished}>
            <Then>
              <Results test="ct" />
            </Then>
            <Else>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Stager
                  onChange={() =>
                    this.setState({
                      data: []
                    })
                  }
                >
                  <StageProgress>
                    {({ context }) => (
                      <View
                        style={{
                          marginTop: 15
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center"
                          }}
                        >
                          {context.state.stages.map((stage, index) => (
                            <View
                              key={index}
                              style={[
                                styles.progressIndicator,
                                {
                                  flex: 1 / context.state.stages.length / 2
                                },
                                {
                                  backgroundColor:
                                    context.state.currentStage &&
                                    context.state.stages.indexOf(stage) <=
                                      context.state.stages.indexOf(
                                        context.state.currentStage
                                      )
                                      ? "blue"
                                      : "gray"
                                }
                              ]}
                            />
                          ))}
                        </View>
                        <View style={styles.progressPad} />
                      </View>
                    )}
                  </StageProgress>

                  {Array.from(tests).map(({ id, images }) => (
                    <Stage continue={() => true} key={id}>
                      {({ context }) => (
                        <CTItemView
                          updId={() => this.updId(id)}
                          context={context}
                          id={id}
                          images={images}
                          handleChosenItem={handleChosenItem}
                          handleStartTime={handleStartTime}
                          testsLength={tests.length && tests.length}
                          onTouch={args => this.onTouch(id, args)}
                          data={this.state.data}
                        />
                      )}
                    </Stage>
                  ))}
                  <StageButtons>
                    {({ context }) => (
                      <View style={testsStyles.btnContainer}>
                        <Button onPress={context.prev}>
                          <Text>Previous</Text>
                        </Button>
                        <Button onPress={context.next}>
                          <Text>Next</Text>
                        </Button>
                      </View>
                    )}
                  </StageButtons>
                </Stager>
              </View>
            </Else>
          </If>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    tests: state.conceptualThinking.tests,
    finished: state.conceptualThinking.finished
  };
};

const mapDispatchToProps = dispatch => ({
  handleChosenItem: arg => dispatch(setCTTestItem(arg)),
  handleStartTime: arg => dispatch(setCTTestItemTime(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptualThinkingScreen);
