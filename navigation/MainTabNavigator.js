import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import TestsScreen from "../screens/TestsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
      style={{ marginBottom: -3 }}
    />
  )
};

const UserInfoStack = createStackNavigator({
  UserInfo: UserInfoScreen
});

UserInfoStack.navigationOptions = {
  tabBarLabel: "User Info",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
      style={{ marginBottom: -3 }}
    />
  )
};

const TestsStack = createStackNavigator({
  Tests: TestsScreen
});

TestsStack.navigationOptions = {
  tabBarLabel: "Tests",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
      style={{ marginBottom: -3 }}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  UserInfoStack,
  TestsStack
});
