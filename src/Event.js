import React, { Component } from "react";

class Event extends Component {

  state = {
    display: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ display: !prevState.display }));
  };

  render() {
    let event = this.props.event;

    return( 
      <div className="event">
        <ul>
          <li className="EventSummary">{event.summary}</li>
          <li className="EventLocation">{event.location}</li>
          <li className="EventTime">{event.start.dateTime} - {event.start.timeZone}</li>
          {this.state.display === true && (
            <p className="EventDescription">{event.description}</p>
          )}
          {this.state.display === false && (
            <button className="displayMore" onClick={() => this.handleButton()}>
              Show details
            </button>
          )}
          {this.state.display === true && (
            <button className="displayLess" onClick={() => this.handleButton()}>
              Hide details
            </button>
          )}
        </ul>
      </div>
    )

  }

}

export default Event;