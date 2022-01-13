import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We cannot find the city you are looking for. Please try another city.',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion, 32);
  }

  render() {
    return (
      <div>
        <div className="CitySearch">
          <label>
            <span>City:</span>
            <input
              type="text"
              className="city"
              value={this.state.query}
              onChange={this.handleInputChanged}
              onFocus={() => { this.setState({ showSuggestions: true }) }}
            />
          </label>
          <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
            <b>See all the cities</b>
          </li>
          </ul>
        </div>
        <div className="citySearchAlert">
          <InfoAlert text={this.state.infoText} />
        </div>
      </div>

    );
  }
}

export default CitySearch;