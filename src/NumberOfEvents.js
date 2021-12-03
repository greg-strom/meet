import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  // handleNumberOfEventsChange = (event) => {
  //   const value = event.target.value;
  //   this.setState({ numberOfEvents: value });
  //   this.props.updateNumberOfEvents(event.target.value);
  // };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="text"
          className="EventsNumberTextbox"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }

}

export default NumberOfEvents;
