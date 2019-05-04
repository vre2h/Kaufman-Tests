import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import { Icon } from "expo";

import Colors from "../constants/Colors";

const BackHeader = ({ navigate }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
      }}
      onPress={() => navigate("Tests")}
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
  );
};

export default BackHeader;
