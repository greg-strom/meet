meet

Meet is a serverless, progressive web application (PWA) created using test-driven development (TDD). Meet will use the Google Calendar API to fetch upcoming events.

KEY FEATURES

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.


TECHNICAL REQUIREMENTS

●The app ​must​be a React application0.
●The app ​must​be built using the TDD technique.
●The app ​must​ use the Google Calendar API and OAuth2 authentication flow.
●The app ​must​use serverless functions (AWS lambda is preferred) for the authorizationserver instead of using a traditional server.
●The app’s code ​must​be hosted in a Git repository on GitHub.
●The app ​must​work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,as well as on IE11.
●The app ​must​display well on all screen sizes (including mobile and tablet) widths of1920px and 320px.
●The app ​must​ pass ​Lighthouse​’s PWA checklist.
●The app ​must​ work offline or in slow network conditions with the help of a serviceworker.
●Users ​may​ be able to install the app on desktop and add the app to their home screenon mobile.
●The app ​must​ be deployed on GitHub Pages.
●The API call ​must​ use React axios and async/await.●The app ​must​ implement an alert system using an OOP approach to show information tothe user.
●The app ​must​ make use of data visualization (recharts preferred).
●The app ​must​ be covered by tests with a coverage rate >= 90%.●The app ​must​ be monitored using an online monitoring tool.



USER STORIES

FEATURE 1: FILTER EVENTS BY CITY

As a user,
I should be able to filter events by city
So that I can see the list of events that take place in that city.

•	SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

•	SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

•	SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

Given the user was typing "Sydney" in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., "Sydney, Australia") from the list
Then their city should be changed to that city (i.e., "Sydney, Australia") and the user should receive a list of upcoming events in that city


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user,
I should be able to show or hide an event’s details
So that I can find out more about displayed events

•	Scenario 1: An event element is collapsed by default

Given the app main page has loaded
When the user does not select any events
Then each event element will be collapsed

•	Scenario 2: User can expand an event to see its details

Given the app main page has loaded
When the user selects an event
Then the selected event will expand to display more details

•	Scenario 3: User can collapse an event to hide its details

Given the app has displayed extra details for a particular event
When the user navigates back to the app main page
Then the selected event will collapse to display the main page


FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user,
I should be able to specify the number of events displayed
So that I can control how often it is necessary to load more events

•	Scenario 1: When user hasn’t specified a number, 32 is the default number

Given the app main page has loaded
When the user does not select any specific number of events to display
Then the app will display 32 events

•	Scenario 2: User can change the number of events they want to see

Given the app main page has loaded
When the user has selected a specific number of events to display
Then the app will display that number of events


FEATURE 4: USE THE APP WHEN OFFLINE

As a user,
I should be able to display information about events when offline
So that I can check on event data when I have no internet connection

•	Scenario 1: Show cached data when there’s no internet connection

Given the user has disconnected from the internet
	When the user launches the app
	Then cached event data from the user’s last session will display on the app main page

•	Scenario 2: Show error when user changes the settings (city, time range)

Given the user has disconnected from the internet
When the user attempts to change settings like city, time range etc.
Then the app will report a “no internet connection” error


FEATURE 5: DATA VISUALIZATION

As a user,
I should be able to display data about upcoming events in each city
So that I can understand data about upcoming events more easily

•	Scenario 1: Show a chart with the number of upcoming events in each city

Given the user has launched the app
When the user clicks on a city
Then the app will display a chart showing upcoming events in that city

