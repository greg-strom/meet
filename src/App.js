import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { getAllByAltText } from '@testing-library/dom';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ? 
        events :
        events.filter((event) => event.location === location);
      locationEvents = locationEvents.slice(0, eventCount);
      console.log(locationEvents);
      this.setState({
        events: locationEvents
      });
    });
  }

  updateNumberOfEvents = (usersPreferredNumber) => {
    this.setState({
      numberOfEvents: usersPreferredNumber
    });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, usersPreferredNumber);
  }

  render() {
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
    </div>
  );
  }
}

export default App;
