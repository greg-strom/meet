import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleNumberOfEventsChange = (event) => {
    const value = event.target.value;
    this.props.updateNumberOfEvents(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="text"
          className="EventsNumberTextbox"
          value={this.props.numberOfEvents}
          onChange={(e) => this.handleNumberOfEventsChange(e)}
        />
      </div>
    );
  }

}

export default NumberOfEvents;
