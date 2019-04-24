import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import TestItemScreen from "../screens/TestItemScreen";

import MainTabNavigator from "./MainTabNavigator";

const TestItemStack = createStackNavigator({
  Test: TestItemScreen
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Test: TestItemStack
  })
);
