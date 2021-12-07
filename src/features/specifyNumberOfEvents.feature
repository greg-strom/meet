Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the app main page has loaded
When the user does not select any specific number of events to display
Then the app will display 32 events

Scenario: User can change the number of events they want to see
Given the app main page has loaded
When the user has selected a specific number of events to display
Then the app will display that number of events
