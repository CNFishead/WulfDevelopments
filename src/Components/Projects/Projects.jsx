import emoji from '../../assets/Images/emojiPedia.png'
import keeper from '../../assets/Images/Keeper.png'
import auth from '../../assets/Images/microsoftauthenticator.jpg'

const Projects = [
  {
    project_name: "Authenticator",
    project_image: auth,
    project_URL: "https://github.com/CNFishead/authentication",
    languages: "HTML, JavaScript, CSS",
    description:
      "A brief introduction to tracking a user-login, and authenticating with google sign in.",
    technology: "Node.JS, Mongoose, EJS",
  },
  {
    project_name: "Emojipedia",
    project_image: emoji,
    project_URL: "https://github.com/CNFishead/emjoipedia",
    languages: "JavaScript, CSS, HTML",
    description:
      "A React single page web-app that displays an encylcopedia of emjoi's," +
      " It can be updated to hold more emoji's and will display them all in a card formation",
    technology: "React, CodeSandbox.io",
  },
  {
    project_name: "Keeper-App",
    project_image: keeper,
    project_URL: "https://github.com/CNFishead/Keeper-App",
    languages: "JavaScript, CSS, HTML",
    description: "A To-do list made with React Components which keeps track of state for the items.",
    technology: "React, CodeSandbox.io",
  },
  {
    project_name: "",
    project_image: "",
    project_URL: "",
    languages: "",
    description: "",
    technology: "",
  },
];

export default Projects;
