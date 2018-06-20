import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SearchResults from './SearchResults';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



import AutoComplete from 'material-ui/AutoComplete';

const cities = [
  'Hyderabad',
  'Mumbai',
  'Pune',
  'Bangalore'
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      destination: '',
      searchResultsPage: [],
      data: [{ source: "Hyderabad", destination: "Mumbai", price: "400USD" },
      { source: "Hyderabad", destination: "Pune", price: "300USD" },
      { source: "Bangalre", destination: "Hyderabad", price: "200USD" }]
    }
  }

  doSearch(event) {
    console.log("values", this.state.source, this.state.destination);
    var self = this;
    var searchResultsPage = [];
    searchResultsPage.push(<SearchResults parentContext={this} />);

    self.props.parentContext.setState({
      searchResultsPage: searchResultsPage
    })

    this.setState({
      data: this.state.data.filter(result =>
        result.source == this.state.source && result.destination == this.state.destination)
    });
  }

  handleSourceUpdateInput(searchText) {
    this.setState({
      source: searchText,
    });
  };

  handleDestinationUpdateInput(searchText) {
    this.setState({
      destination: searchText,
    });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Card>
            <CardTitle title="Search" />
            <CardText>
                <AutoComplete
                  hintText="Enter your Source"
                  onUpdateInput={this.handleSourceUpdateInput.bind(this)}
                  floatingLabelText="Source"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={cities}
                  searchText={this.state.source}
                />
                <br />
                <AutoComplete
                  hintText="Enter your Destination"
                  onUpdateInput={this.handleDestinationUpdateInput.bind(this)}
                  floatingLabelText="Destination"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={cities}
                  searchText={this.state.destination}
                />
                <br />
                <RaisedButton label="Search" primary={true} onClick={(event) => this.doSearch(event)} />
              
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Search;