import React from 'react';
import ActivityDetail from './ActivityDetail';
import { StyleSheet, Text, Image, View } from 'react-native';

const data =
      { "latitude": 40.7497687,
        "longitude": -74.1127482,
        "title": "Athleta",
        "type": [" trendy sportswear ", " offering gear "],
        "minPrice": 15.00,
        "avgPrice": 20.00,
        "timeNeededMinutes": "60 mins",
        "mood": ["Energitic", "Casual" ,"Happy","Winning"],
        "image": "http://learn2playsports.com/wp-content/uploads/2013/04/TheTeam-1060x500.png",
        "description": " athletic activity or skill and involves a degree of competition, such as tennis or basketball. Some games and many kinds of racing are called sports. A professional at a sport is called an athlete. ",
        "userRatings":"This GAMES can be played by anyone friends,collegues"
            }


export default class MilestonetwoApp extends React.Component {
  render() {
    console.log(data.title);
    const {params} = this.props.navigation.state





    return (
        <View style={styles.container}>
        <ActivityDetail data={params}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
