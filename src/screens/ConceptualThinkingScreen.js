import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Stager, { Stage } from "react-native-stager";
import { If, Then, Else } from "react-if";

import { setCTTestItem, setCTTestItemTime } from "../actions/tests";
import CTItemView from "../components/CTItemView";
import BackHeader from "../components/BackHeader";
import Results from "../containers/Results";
import resultStyles from "../styles/Results";

class ConceptualThinkingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Test 1",
    tabBarVisible: false,
    headerLeft: () => <BackHeader navigate={navigation.navigate} />
  });

  render() {
    const { tests, finished, handleChosenItem, handleStartTime } = this.props;

    return (
      <ScrollView
        contentContainerStyle={finished ? resultStyles.container : {}}
      >
        <If condition={finished}>
          <Then>
            <Results test="ct" />
          </Then>
          <Else>
            <Stager>
              {Array.from(tests).map(({ id, images }) => (
                <Stage continue={() => true} key={id}>
                  {({ context }) => (
                    <CTItemView
                      context={context}
                      id={id}
                      images={images}
                      handleChosenItem={handleChosenItem}
                      handleStartTime={handleStartTime}
                      testsLength={tests.length && tests.length}
                    />
                  )}
                </Stage>
              ))}
            </Stager>
          </Else>
        </If>
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
