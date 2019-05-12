import React from "react";
import { connect } from "react-redux";

import ResultsView from "../components/Results";
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
    return <ResultsView resetData={this.resetData} sendData={this.sendData} />;
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
