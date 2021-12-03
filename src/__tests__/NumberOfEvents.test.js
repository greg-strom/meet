import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  
  test("textbox is rendered", () => {
    expect(NumberOfEventsWrapper.find(".EventsNumberTextbox")).toHaveLength(1);
  });

  test('initial number of events is 32', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });

  test('change the value of numberOfEvents in the state when new value is entered', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 50 }};
    NumberOfEventsWrapper.find('.EventsNumberTextbox').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(50);
  });


});