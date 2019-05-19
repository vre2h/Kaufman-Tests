import React from "react";
import { connect } from "react-redux";
import { Button, Text, View } from "native-base";

import { dropCT, sendRes, dropPR } from "../actions/tests";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: this.props.test
    };
  }

  sendData = () => {
    const tests =
      this.props.test === "ct"
        ? { CTTests: this.props.ct }
        : { PRTests: this.props.pr };

    this.props.sendData({
      ...tests,
      userInfo: this.props.userInfo
    });
  };

  resetData = () => {
    const { test, resetCTData, resetPRData } = this.props;
    const resetFn = test === "ct" ? resetCTData : resetPRData;

    resetFn();
  };

  render() {
    return (
      <View>
        <Button
          style={{ color: "white", marginBottom: 15 }}
          type="primary"
          block
          onPress={this.sendData}
        >
          <Text>Send Results</Text>
        </Button>
        <Button
          style={{ color: "white" }}
          type="primary"
          block
          onPress={this.resetData}
        >
          <Text>Reset</Text>
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendData: arg => dispatch(sendRes(arg)),
  resetCTData: () => dispatch(dropCT()),
  resetPRData: () => dispatch(dropPR())
});

const mapStateToProps = state => ({
  ct: {
    ...state.conceptualThinking.tests,
    finished: state.conceptualThinking.finished
  },
  pr: { ...state.pr.tests, finished: state.pr.finished },
  userInfo: state.userInfo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
