import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    errorText: ''
  }

  handleNumberOfEventsChange = (event) => {
    const value = event.target.value;
    this.props.updateNumberOfEvents(value);
    if (!(value > 0 && value < 65)) {
      this.setState({
        errorText: 'Please enter a number between 1 and 64.',
      });
    } else {
      return this.setState({
        errorText:''
      });
    }
    this.props.updateNumberOfEvents(value)
  };

  render() {
    return (
      <div>
        <div className="numberOfEvents">
          <input
            type="text"
            className="EventsNumberTextbox"
            value={this.props.numberOfEvents}
            onChange={(e) => this.handleNumberOfEventsChange(e)}
          />
        </div>
        <div className="numberOfEventsError">
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }

}

export default NumberOfEvents;
