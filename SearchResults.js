import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data : ''   
    }

  }

  render() {
    return (
      <div><br/>
        <MuiThemeProvider>
          <Card>
            <CardTitle title="Search Results" />
            <CardText>
                <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Source</TableHeaderColumn>
                  <TableHeaderColumn>Destination</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
              >
                {this.props.parentContext.state.data.map((result, i) =>
                  <TableRow key={i} value={result}>
                    <TableRowColumn>{result.source}</TableRowColumn>
                    <TableRowColumn>{result.destination}</TableRowColumn>
                    <TableRowColumn>{result.price}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>              
            </CardText>
          </Card>          
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SearchResults;