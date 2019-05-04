import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";

const PrintResults = ({ tests, resetData }) => {
  return (
    <View>
      <View>
        <Text>Qstn: answer answered delta</Text>
      </View>
      {Array.from(tests).map(({ id, answer, answered, delta }) => (
        <View key={id}>
          <Text>
            {id}: {answer} {answered} {delta}s
          </Text>
        </View>
      ))}
      <Button type="primary" block onPress={resetData}>
        <Text>Reset</Text>
      </Button>
    </View>
  );
};

export default PrintResults;
