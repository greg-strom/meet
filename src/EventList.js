import React, { Component } from 'react';
import Event from './Event';
import { OfflineAlert } from './Alert';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {!navigator.onLine ? (
          <OfflineAlert text="You are offline! You're looking at cached data." />
        ) : (
          ""
        )}
        <ul className="EventList">
          {events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default EventList;