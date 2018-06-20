import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={{backgroundColor: '#fff', flex:1, width:'100%'}}>
        <Image source={{uri: this.props.data.image}}
               style={{width:'100%', height:300, marginTop: 30, marginBottom: 10}}/>
        <Text>Title : {this.props.data.title}</Text>
        <Text>Latitude : {this.props.data.latitude}</Text>
        <Text>Longitude : {this.props.data.longitude}</Text>
        <Text>Place is known for : {this.props.data.type}</Text>
        <Text>MinPrice : ${this.props.data.minPrice.toFixed(2)}</Text>
        <Text>AvgPrice : ${this.props.data.avgPrice.toFixed(2)}</Text>
        <Text>TimeNeededMinutes: {this.props.data.timeNeededMinutes}</Text>
        <Text>Different kinds of mood : {this.props.data.mood}</Text>
        <Text>Description: {this.props.data.description}</Text>
        <Text>userRatings:{this.props.data.userRatings}</Text>
        </View>
    );
  }
}
