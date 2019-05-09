import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

const PrintResults = ({ sendData, resetData }) => {
  return (
    <View>
      <Button
        style={{ color: "white", marginBottom: 15 }}
        type="primary"
        block
        onPress={sendData}
      >
        <Text>Send Results</Text>
      </Button>
      <Button
        style={{ color: "white" }}
        type="primary"
        block
        onPress={resetData}
      >
        <Text>Reset</Text>
      </Button>
    </View>
  );
};

export default PrintResults;
