import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { white } from 'ansi-colors';

export default class Forcast extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.main}>{this.props.main}</Text>
          <Text style={styles.des}>{this.props.description}</Text>
          <Text style={styles.temp}>{this.props.temp} ํC</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: { 
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    main:{
        fontSize: 25 ,
        paddingTop: 15,
        color : 'white',
    },
    des:{
      fontSize: 15 ,
      paddingTop: 25,
      color : 'white',
    },
    temp:{
      fontSize: 25 ,
      paddingTop: 30,
      paddingBottom:25,
      color : 'white',
    },
});