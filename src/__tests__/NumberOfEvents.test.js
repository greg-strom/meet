import React from "react";
import App from "../App";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = mount(<NumberOfEvents />);
  });
  
  test("textbox is rendered", () => {
    expect(NumberOfEventsWrapper.find(".EventsNumberTextbox")).toHaveLength(1);
  });

  test('change the value of numberOfEvents in the state when new value is entered', async () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 1 }};
    await AppWrapper.find('.EventsNumberTextbox').simulate('change', eventObject);
    expect(AppWrapper.state('numberOfEvents')).toBe(1);
    AppWrapper.unmount();
  });
});