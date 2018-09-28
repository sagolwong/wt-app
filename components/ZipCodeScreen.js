import React from 'react';
import { StyleSheet, FlatList, View, Text,TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
const ZipItem = ({place, code, navigate}) => (
    <View style={styles.zipItem}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>
)
const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
     return {
          headerTitle: (<Text style={styles.header}>Choose a zip code</Text>),
     }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                  data={availableZipItems}
                  keyExtractor={_keyExtractor}
                  renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    zipItem: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    zipPlace: {
        textAlign:'left', 
        color:'blue', 
        fontSize: 20 ,
        paddingLeft: 20,  
    },
    zipCode: {
        textAlign:'right', 
        color:'green', 
        fontSize: 20 ,
        paddingRight: 20 ,
    },
    header:{ paddingLeft: 115 }
});