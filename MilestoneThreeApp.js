import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import sampleArray from './milestonethree.js';
import MilestonetwoApp from './MilestoneTwoApp.js';
import {
    StackNavigator
} from 'react-navigation';
// import Dropdown, {
//     DropdownToggle,
//     DropdownMenu,
//     DropdownMenuWrapper,
//     MenuItem,
//     DropdownButton
// } from '@trendmicro/react-dropdown';
// import '@trendmicro/react-bttons/dist/react-buttons.css';
// import '@trendmicro/react-dropdown/dist/react-dropdown.css';




class HomeScreen extends React.Component {
    

    

    constructor(props) {
        super(props);
        this.state = {
            result1: [],
            result2: [],
            result3: []

        }
        //  this.fetchData();

    }

    componentDidMount() {
        let _this = this;
        let arr = [];

        sampleArray.forEach(function(item, index) {
           arr.push(item.author);
        });


        this.setState(previousState => {
            return {
                result1: arr,
                result2: arr,
                result3: arr
            };
        })

    }

   navigateToProfile(e){
     console.log(e);
      this.props.navigation.navigate('Profile',sampleArray[e]);
      return false;
   }

    render() {

        return (
           <View>
           <Image source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipMsJAiTlGC4xdtWIUn1Dx1ChuF1XwFCI0k7oM_1=w408-h271-k-no'}}
                  style={{width:'100%', height:300, marginTop: 30, marginBottom: 10}}/>
            <ModalDropdown style={styles.container} options = {this.state.result1} defaultValue = 'Result1'
             onSelect = {(e)=> this.props.navigation.navigate('Profile',sampleArray[e])} />
            </View>
        )
        /*{
          const { navigate } = this.props.navigation;
          return (
            <View style={styles.container}>
              <Button title="Go to Sam's   profile"
                      onPress={() =>
                navigate('Profile', {name: 'Sam'})}/>
              <Button title="Go to Shivani's profile"
                      onPress={() =>
                navigate('Profile', {name: 'shivani'})}/>
              <Text>Changes you make will automatically reload.</Text>
            </View>
          );
        } */

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// class ProfileScreen extends React.Component {
//     static navigationOptions = ({
//         navigation
//     }) => ({
//         title: navigation.state.params.name + "'s Profile"
//     })
//     constructor(props) {
//         super(props)
//         console.log('Opening ProfileScreen', this.props)
//     }
//     render() {
//         const name = this.props.navigation.state.params.name;
//         return (
//           <View style = {
//                 styles.container
//             } >
//             <Text > Welcome to Shivani profile, {name} < /Text>
//             <Text > Changes you make will automatically reload. < /Text>
//           </View>
//         );
//     }
// }
//

export default MultiScreenApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: MilestonetwoApp
    }
});
