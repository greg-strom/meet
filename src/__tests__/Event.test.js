import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("Summary is displayed", () => {
    expect(EventWrapper.find(".EventSummary")).toHaveLength(1);
  });

  test("Location is displayed", () => {
    expect(EventWrapper.find(".EventLocation")).toHaveLength(1);
  });

  test("Time and timezone are displayed", () => {
    expect(EventWrapper.find(".EventTime")).toHaveLength(1);
  });

  test("Display more button is rendered", () => {
    expect(EventWrapper.find(".displayMore")).toHaveLength(1);
  });

  test("change display state on click", () => {
    EventWrapper.setState({
      display: false,
    });
    EventWrapper.find(".displayMore").simulate("click");
    expect(EventWrapper.state("display")).toEqual(true);
  });

});