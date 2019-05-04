import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Stager, { Stage } from "react-native-stager";
import { If, Then, Else } from "react-if";

import { setCTTestItem, dropCT } from "../actions/tests";
import PrintResults from "../components/Results";
import CTItemView from "../components/CTItemView";
import BackHeader from "../components/BackHeader";

class ConceptualThinkingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Test 1",
    tabBarVisible: false,
    headerLeft: () => <BackHeader navigate={navigation.navigate} />
  });

  render() {
    const { tests, finished, handleChosenItem, resetData } = this.props;

    return (
      <ScrollView>
        <If condition={finished}>
          <Then>
            <PrintResults resetData={resetData} tests={tests} />
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
  resetData: () => dispatch(dropCT())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptualThinkingScreen);
