const projects = [
  {
    id: 1,
    title: 'COVID-19 Dashboard',
    href: 'https://github.com/ethanrmcdowell/covid-watcher',
    img: '/images/coviddash.jpg',
    alt: 'covid dashboard demo image',
    class: 'portfolio-one',
    video: 'https://youtu.be/BWePZkCxAJI',
    description:
      'I created this application for myself - I was getting frustrated with having to search for exactly the data I wanted to see when looking for local and national COVID-19 information. The data was provided by disease.sh API, which is received directly from Johns Hopkins University. I used React to create the application, Bootstrap for the layout, chart.js to display charts for national, local, and vaccination data, and axios for the multiple API calls to disease.sh.',
  },
  {
    id: 2,
    title: 'Camp Slaughter',
    href: 'https://github.com/ethanrmcdowell/choose-adventure',
    img: '/images/chooseadventure.jpg',
    alt: 'choose adventure demo image',
    class: 'portfolio-two',
    video: 'https://youtu.be/lQFMzYWtKWg',
    description:
      'Camp Slaughter is a choose your own adventure game that I contributed to with some friends. The game uses a tree data structure in order to provide a branching narrative. My personal contributions included setting up the backend and hosting through Heroku, creating the initial data structure format, writing the logic for the story transition, and setting up an administrative login and dashboard using Passport.js for authentication.',
  },
  {
    id: 3,
    title: 'Vehicle Dashboard',
    href: 'https://github.com/ethanrmcdowell/vehicle-dashboard',
    img: '/images/vehicledash.jpg',
    alt: 'vehicle dashboard demo image',
    class: 'portfolio-three',
    video: '',
    description:
      'This vehicle dashboard uses the Google Maps API to show the location of multiple vehicles on a map along with relevant data for the user.',
  },
  {
    id: 4,
    title: 'Employee Tracker',
    href: 'https://github.com/ethanrmcdowell/Employee-Tracker',
    img: '/images/employee.jpg',
    alt: 'employee tracker demo image',
    class: 'portfolio-four',
    video: 'https://youtu.be/OPxYsqos3TM',
    description:
      'JavaScript CLI application which allows you to manage employee information, departments, and job roles as well as view labor budgets. Uses SQL database to store user data.',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    href: 'https://github.com/ethanrmcdowell/Workout-Tracker',
    img: '/images/fitness.jpg',
    alt: 'workout tracker demo image',
    class: 'portfolio-five',
    video: '',
    description:
      'This application uses MongoDB to store user data on fitness trends.',
  },
  {
    id: 6,
    title: 'Budget Tracker',
    href: 'https://github.com/ethanrmcdowell/Budget-Tracker',
    img: '/images/budget.jpg',
    alt: 'budget tracker demo image',
    class: 'portfolio-six',
    video: '',
    description:
      'Heroku-deployed application which will track user budget inputs. Will also function offline by storing data locally until the application can connect back to the MongoDB database.',
  },
];

export default projects;
