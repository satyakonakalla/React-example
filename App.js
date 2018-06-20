import React from 'react';

import SearchScreen from './MilestoneThreeApp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchScreen: []
    }
  }
  componentWillMount() {
    var searchScreen = [];
    searchScreen.push(<MultiScreenApp appContext={this} />);
    this.setState({
      searchScreen: searchScreen
    })
  }
  render() {
    return (
      <div >
        {this.state.searchScreen}
      </div>
    );
  }
}

export default App;