import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the app main page has loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user does not select any events', () => {

        });

        then('each event element will be collapsed', async () => {
            const eventDescription = await AppWrapper.find('.event .EventDescription');
            expect(eventDescription).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the app main page has loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user selects an event', async () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.displayMore').at(0).simulate('click');
        });

        then('the selected event will expand to display more details', () => {
            const EventDescription =  AppWrapper.find('.event .EventDescription');
            expect(EventDescription).toHaveLength(1);
        });
    });
    
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper; 
        AppWrapper = mount(<App />);

        given('the app has displayed extra details for a particular event', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.displayMore').at(0).simulate('click');
        });

        when('the user selects the display less button', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.displayLess').at(0).simulate('click');
        });

        then('the selected event will cease to display the event description', () => {
            const EventDescription =  AppWrapper.find('.event .EventDescription');
            expect(EventDescription).toHaveLength(0);
        });
    });
});