import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the app main page has loaded', () => {

        });

        when('the user does not select any events', () => {

        });

        then('each event element will be collapsed', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the app main page has loaded', () => {

        });

        when('the user selects an event', () => {

        });

        then('the selected event will expand to display more details', () => {

        });
    });
    
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the app has displayed extra details for a particular event', () => {

        });

        when('the user navigates back to the app main page', () => {

        });

        then('the selected event will collapse to display the main page', () => {

        });
    });
});