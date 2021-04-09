import emoji from "../../assets/Images/emojiPedia.png";
import keeper from "../../assets/Images/Keeper.png";
import auth from "../../assets/Images/microsoftauthenticator.jpg";
import Dice from "../../assets/Images/diceGameImage.png";
import Drum from "../../assets/Images/DrumKit.png";
import Simon from "../../assets/Images/SimonSays.png";
import TinDog from "../../assets/Images/TinDogPic.png";
import TipCalculator from "../../assets/Images/TipCalculator.png";
import Wulf from "../../assets/Images/wulfbrandinglogoblue.png";

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
    description:
      "A To-do list made with React Components which keeps track of state for the items.",
    technology: "React, CodeSandbox.io",
  },
  {
    project_name: "Dice Game",
    project_image: Dice,
    project_URL: "https://github.com/CNFishead/DiceGame",
    languages: "JavaScript, HTML, CSS",
    description: "A two player dice game, who will win at random chance?",
    technology: "Atom",
  },
  {
    project_name: "Simon Says",
    project_image: Simon,
    project_URL: "https://github.com/CNFishead/SimonSays",
    languages: "JavaScript, HTML, CSS",
    description:
      "The classic game of simon says, Test your memory and see how long you can last against simon.",
    technology: "Atom",
  },
  {
    project_name: "Drum Kit",
    project_image: Drum,
    project_URL: "https://github.com/CNFishead/DrumKit",
    languages: "JavaScript, HTML, CSS",
    description:
      "A single page application that teaches the fundamentals of event listeners.",
    technology: "Atom",
  },
  {
    project_name: "TinDog",
    project_image: TinDog,
    project_URL: "https://github.com/CNFishead/TinDog",
    languages: "HTML, CSS",
    description: "A Mock single-page spoof of Tinder",
    technology: "Atom",
  },
  {
    project_name: "Tip Calculator",
    project_image: TipCalculator,
    project_URL: "https://github.com/CNFishead/TipCalculator",
    languages: "Python",
    description:
      "A simple Tip calculator app, it takes the amount of the bill, and the amount of people splitting the bill, applies a 15% tip, and evenly distributes it amongst the payers.",
    technology: "Python3.5, TKinter",
  },
];

export default Projects;
