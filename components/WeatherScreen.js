import React from 'react';
import Weather from "./Weather";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class WeatherScreen extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            headerTitle: (<Text style={styles.header}>Weather</Text>),
        }
    }
    render(){
        
        return(
            <Weather zipCode="90110"/>
        );
    }
}
const styles = StyleSheet.create({
    header: { paddingLeft:150 }
});