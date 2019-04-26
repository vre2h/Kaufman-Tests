import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import ConceptualThinkingScreen from "../screens/ConceptualThinkingScreen";

import MainTabNavigator from "./MainTabNavigator";
import PaternReasoningScrenn from "../screens/PaternReasoningScreen";

const SecondaryStack = createStackNavigator({
  CT: ConceptualThinkingScreen,
  PR: PaternReasoningScrenn
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Secondary: SecondaryStack
  })
);
