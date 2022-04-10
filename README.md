# Work-day-scheduler

About the Project

For this homework assignment, we were given starter code to debug plus add code to create a work day scheduler that saves to user information into local storage and color coats each time block based on the current time.

How to Use

A user in able to enter notes into the text field for each hour during regular business hours. (9am-5pm).  This information is stored in local storage and will remain on the page if a user decides to refresh to the page.

Each time slot is color coated based on the current time. Grey = in the past, Red = the present time, and Green = in the future. This helps the user know the exact time of day without having to look.

Creation Process

1) Starter code was provided for us, so the first step was to undestand what this code was trying to do for us
2) CSS styles were also provided, allowing us to color coat each time block
3) HTML div's were created to store a time slot from 9am to 5pm, each with a text field for a user to enter notes and a save button
4) Current date was added using moment.js in the header of the document
5) Variables were added for each time slot but then removed as they were not needed in the end
6) Functionality was added to the Save Button to store user information
7) Local storage getItem added to allow user information to remain on screen even when page is refreshed
8) Function created to color coat each time slot based on the current time. Current time is based on moment.js hours which run by military time
9) ID's for all time blocks changed to reflect military time to allow for functions to work correctly
10) Notes added to HTML, CSS, and JS

Challenges faced

The biggest challenge for this homework assignment was understanding how to use Jquery as this is not a feature that we are going to use highly in a real job environment.

Creating a function that took in the values of each time block, using the console.log to find out that moment.js hours to running of military time, and changing a lot of HTML elemets and JS selectors to reflect military time.

Links

Link to GitHub Repository (https://github.com/TR742/Work-day-scheduler)

Link to deployed url (https://tr742.github.io/Work-day-scheduler/)