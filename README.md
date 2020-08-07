### Flatiron School: Seattle 0420 Cohort
# Performance Mapper: Final Project

### Description: 
This project was designed to enable strength and conditioning coaches to to record, monitor, and track their teams'/athletes' performance statistics and injuries. As well as visualizing key trends in data across their teams and athletes. Key features are as follows:


The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON formate. The interactive frontend is build on ReactJS, HTML, and CSS.


### Dependencies:
* Node Package Manager (NPM)
* ReactJS
* React Router
* React ChartJS 2
* React Bootstrap
* Material UI
* Developed on Google Chrome (80.0.3987.149)

### Server Dependencies
Refer to the backend repo at https://github.com/ckaiser258/Final_Project_Backend for instructions to set up the backend server and PostGreSQL.

### Installation:

Download this entire git repository to your computer and place in your desired install directory. 

If you don't have the above dependencies:

First, if you do not currently have Node Package Manager (NPM), follow their guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

Next, to install ReactJS, React Bootstrap, and React Router, in a terminal navigate to the directory in which you installed this repo, then execute `npm install react react-dom --save`. Then, run `npm install webpack webpack-dev-server webpack-cli --save`, `npm install react-bootstrap bootstrap`, and `npm install --save react-router-dom`

Finally, execute ```npm install``` to install all other required node packages.


### Running:
This project was designed as a proof of concept so it requires hosting locally. To start hosting the local server navigate to the directory in which this repo was installed. Then, via a terminal interface execute ```npm start```. If you started your rails server before this you will be prompted to enter Y/N to use an unoccupied port. Enter `y` and after a moment your browser should automatically load the application. At this point the application will load and all functionality should be available.

### License
Copyright 2020 Colton Kaiser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
