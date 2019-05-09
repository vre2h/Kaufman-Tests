import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Stager, { Stage } from "react-native-stager";
import { If, Then, Else } from "react-if";
import resultStyles from "../styles/Results";

import { setPRTestItem, setPRTestItemTime } from "../actions/tests";
import PRItemView from "../components/PRItemView";
import BackHeader from "../components/BackHeader";
import Results from "../containers/Results";

class PatternReasoningScreen extends React.Component {
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
            <Results test="pr" />
          </Then>
          <Else>
            <Stager>
              {Array.from(tests).map(({ id, images }) => (
                <Stage continue={() => true} key={id}>
                  {({ context }) => (
                    <PRItemView
                      context={context}
                      id={id}
                      images={images}
                      handleChosenItem={handleChosenItem}
                      testsLength={tests.length && tests.length}
                      handleStartTime={handleStartTime}
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
    tests: state.pr.tests,
    finished: state.pr.finished
  };
};

const mapDispatchToProps = dispatch => ({
  handleChosenItem: arg => dispatch(setPRTestItem(arg)),
  handleStartTime: arg => dispatch(setPRTestItemTime(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternReasoningScreen);
