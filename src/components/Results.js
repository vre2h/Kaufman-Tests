import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";

const PrintResults = ({ tests, resetData }) => {
  return (
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
      <Button type="primary" block onPress={resetData}>
        <Text>Reset</Text>
      </Button>
    </View>
  );
};

export default PrintResults;
