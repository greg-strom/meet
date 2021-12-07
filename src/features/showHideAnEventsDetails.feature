Feature: Show and hide an event's features

Scenario: An event element is collapsed by default
Given the app main page has loaded
When the user does not select any events
Then each event element will be collapsed

Scenario: User can expand an event to see its details
Given the app main page has loaded
When the user selects an event
Then the selected event will expand to display more details

Scenario: User can collapse an event to hide its details
Given the app has displayed extra details for a particular event
When the user selects the display less button
Then the selected event will cease to display the event description
