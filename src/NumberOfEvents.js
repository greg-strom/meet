import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleNumberOfEventsChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="text"
          className="EventsNumberTextbox"
          value={this.state.numberOfEvents}
          onChange={this.handleNumberOfEventsChange} 
        />
      </div>
    );
  }

}

export default NumberOfEvents;
