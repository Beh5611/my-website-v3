export const portfolio = [
  {
    id: 1,
    headline: 'Recipe Social Media App',
    description:
      "A social media for creating, sharing, and interacting with Recipes. Users comment on other people's recipes, like/favorite a recipe, create their own recipes and add a list of recipes and their ingredients to their 'shopping cart'",
    lessons:
      "Displayed proficiency with Gitflow/branching, database design as well as RESTful APIs, token authentication, serialization, and overall Django mastery.",
    img: [require('../Assets/projects/EC1.jpg'), require('../Assets/projects/EC2.jpg'), require('../Assets/projects/EC3.jpg'), require('../Assets/projects/EC4.jpg')],
    github: true,
    githublink: "https://github.com/Beh5611/EasyChef",
    demo: false,
    demolink : ''
  },
  {
    id: 2,
    headline: 'Therapy Match',
    description:
      "Therapy Match is a web application that connects users with therapists based on their unique needs and preferences. Users input their location and describe their situation, TherapyMatch does the rest.",
    lessons:
      "Utilized the OpenAI GPT-3.5 model to analyze user input and identify key points related to their mental health needs. Implemented custom algorithms to match users with therapists based on their specialties and proximity, using OpenStreetMap API.",
    img: [require('../Assets/projects/TM1.jpg'), require('../Assets/projects/TM2.jpg'), require('../Assets/projects/TM3.jpg')],
    github: true,
    githublink: "https://github.com/Beh5611/TherapyMatch",
    demo: true,
    demolink : 'https://drive.google.com/file/d/1PYQu6tWsaNdNtX28vP6peb9GaQ9b-iPM/view'
  },
  {
    id: 3,
    headline: 'Face Recognition API',
    description:
      "A full-stack app made with Node/Express and React.js. Used ClarifAI API to detect a face from the user's input. The backend consists of a list of users and is capable of Registering and Signing in valid users into the web app.",
    lessons:
      "This project was an opportunity for me to combine my front-end and back-end knowledge to create my first full-stack application as well as making use of an API!l",
    img: [require('../Assets/projects/api.jpg')],
    github: true,
    githublink: "https://github.com/Beh5611/Facial-Recognition-frontend",
    demo: false,
    demolink : ''
  },
  {
    id: 4,
    headline: 'Shell Replica in C',
    description:
      "A fully functional mock shell built almost entirely from scratch. Some of the more advanced functionalities of this project include background processing, pipes and network support.",
    lessons:
      "This was a semester-long project that tested my knowledge on many important C/Unix topics such as data structures, file I/O, processing (forking), pipes, signalling, signal handling and sockets.",
    img: [require('../Assets/projects/mysh.PNG')],
    github: false,
    githublink: "",
    demo: false,
    demolink : ''
  },
  {
    id: 5,
    headline: 'Three Musketeers',
    description:
      'This is a board game project that provides the users with a GUI (JavaFX) to play on as well as some additional functionalities such as saving a game and loading a previously saved game.',
    lessons:
      "This project was done in a group, and as such, it was a great introduction to git, GitHub, agile and scrum. The goal of the assignment was to gain experience working with others and display our knowledge and creativity in using well-known design patterns with Java.",
    
    img: [require('../Assets/projects/musketeers.PNG')],
    github: false,
    githublink: "",
    demo: false,
    demolink : ''
  }
]

  