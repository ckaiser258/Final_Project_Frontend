### Flatiron School: Seattle 0420 Cohort
# Performance Mapper: Final Project

### Description: 
This project was designed to enable strength and conditioning coaches to to record, monitor, and track their teams'/athletes' performance statistics and injuries, as well as visualize key trends in data across their teams and athletes. Key features are as follows:



* User Login and Homepage with horizontal bar chart of cumulative injuries across teams.

![Login and Home Page](README_assets/login_and_home_page.gif)

* User can view and add/delete their teams. Broken images get fixed with an automatic default image.

![View and Add Teams](README_assets/view_and_add_teams_with_default_image.gif)

* View average stats and trends of performance measures across a team, sorted by date and separated by test in individual tabs.

![Team Performance Stats](README_assets/view_team_performance_stats.gif)

* View injuries across the team, data presented by site of each injury. Can click for a more detailed view of injuries (dates, descriptions, severities, etc.).

![Team Injuries](README_assets/view_team_injuries.gif)

* View athletes across the team, and add/delete athletes. Broken images get fixed with an automatic default image.

![View and Add Athletes on a Team](README_assets/view_and_add_team_athletes.gif)

* View performance statistics and trends for a specific athlete, sorted by date. Tabs for tests are dynamically added as the user adds new tests.

![View Athlete Stats](README_assets/view_athlete_stats.gif)

* View injuries for a specific athlete. Data presented by site of each injury. Can click for a more detailed view of injuries (dates, descriptions, severities, etc.). 

![View Athlete Injuries](README_assets/view_athlete_injuries.gif)

* Add and delete performance statistics. Graph will dynamically update as stats are added/deleted. Each stat/test is automatically added or removed from the team averages.

![Add and Delete Stats](README_assets/add_and_delete_stats.gif)


* Add and delete injuries. Graph will dynamically update as injuries are added/deleted. Each injury is automatically added or removed from the team and home charts.

![Add and Delete Injuries](README_assets/add_and_delete_injuries.gif)



The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON formate. The interactive frontend is build on ReactJS, HTML, and CSS.


### Dependencies:
* Node Package Manager (NPM)
* ReactJS
* React Router
* React ChartJS 2
* React Bootstrap
* Material UI
* Developed on Google Chrome (80.0.3987.149)

Live demo located here: https://performancemapper.netlify.app/

### Server Dependencies
The backend (and frontend) of this app is hosted, so, like this repo, the backend repo is not necessary for use. However, if you'd like to run the server locally, refer to the backend repo at https://github.com/ckaiser258/Final_Project_Backend for instructions to set up the backend server and PostGreSQL.

### Installation:

1. Download this entire git repository to your computer and place in your desired install directory. 

2. If you don't have the above dependencies:

   * If you do not currently have Node Package Manager (NPM), follow their guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

   * To install ReactJS, React Bootstrap, and React Router, in a terminal navigate to the directory in which you installed this repo, then execute `npm install react react-dom --save`. After this, run `npm install webpack webpack-dev-server webpack-cli --save`, `npm install react-bootstrap bootstrap`, and `npm install --save react-router-dom`

3. Execute ```npm install``` to install all other required node packages.


### Running:

This app is hosted at https://performancemapper.netlify.app/. However, if you'd like to run the app locally, you can follow the instructions below (given you've installed and started the backend repo as noted above.):

1. Navigate to the directory in which this repo was installed. 

2. Via a terminal interface, execute ```npm run dev```. If you started your rails server before this you will be prompted to enter Y/N to use an unoccupied port. Enter `y` and after a moment your browser should automatically load the application. At this point the application will load and all functionality should be available.

### License
Copyright 2020 Colton Kaiser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
