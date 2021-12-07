import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the app main page has loaded', () => {

        });

        when('the user does not select any specific number of events to display', () => {

        });

        then('the app will display 32 events', () => {

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {      
        given('the app main page has loaded', () => {

        });

        when('the user has selected a specific number of events to display', () => {

        });

        then('the app will display that number of events', () => {

        });
    });
});