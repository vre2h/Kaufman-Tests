import React from "react";
import { View, TouchableOpacity, Text, Platform, Image } from "react-native";
import { Icon } from "expo";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import Colors from "../constants/Colors";
import TestsStager from "../components/TestsStager";
import { setPRTestItem, dropPR } from "../actions/tests";
import { Button } from "native-base";

class PatternReasoningScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Test 1",
    tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10
        }}
        onPress={() => navigation.navigate("Tests")}
      >
        <Icon.Ionicons
          name={Platform.OS === "ios" ? `ios-arrow-back` : "left"}
          size={35}
          color={Colors.tabIconSelected}
        />
        <Text
          style={{ marginLeft: 7, color: Colors.tabIconSelected, fontSize: 16 }}
        >
          Back
        </Text>
      </TouchableOpacity>
    )
  });

  render() {
    const { tests, finished, handleChosenItem, resetData } = this.props;
    console.log(tests);
    if (finished) {
      return (
        <ScrollView>
          <View>
            <View>
              <Text>Qstn: answer answered</Text>
            </View>
            {Array.from(tests).map(({ id, answer, answered }) => (
              <View key={id}>
                <Text>
                  {id}: {answer} {answered}
                </Text>
              </View>
            ))}
          </View>
          <Button block onPress={resetData}>
            <Text>Reset</Text>
          </Button>
        </ScrollView>
      );
    }

    return <TestsStager tests={tests} handleChosenItem={handleChosenItem} />;
  }
}

const mapStateToProps = state => {
  return {
    tests: state.patternReasoning.tests,
    finished: state.patternReasoning.finished
  };
};

const mapDispatchToProps = dispatch => ({
  handleChosenItem: arg => dispatch(setPRTestItem(arg)),
  resetData: () => dispatch(dropPR())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternReasoningScreen);
