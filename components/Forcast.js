import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Forcast extends React.Component {

  render() {
    return (
      <View>
          <Text>{this.props.main}</Text>
          <Text>{this.props.description}</Text>
          <Text>{this.props.temp}</Text>
          <Text>ํC</Text>
      </View>
    );
  }
}
