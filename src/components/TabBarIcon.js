import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={this.props.size || 26}
        style={this.props.style}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
        onPress={this.props._onPress}
      />
    );
  }
}
