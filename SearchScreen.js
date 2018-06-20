import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Search from './Search';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPage: [],
      searchResultsPage: []
    }
  }
  componentWillMount() {
    var searchPage = [];
    searchPage.push(<Search parentContext={this} appContext={this.props.appContext} />);
    this.setState({
      searchPage: searchPage
    })
  }
  
  render() {
    return (
      <div style={{width: '700px'}}>
        {this.state.searchPage}
        {this.state.searchResultsPage}
      </div>
    );
  }
}


export default SearchScreen;