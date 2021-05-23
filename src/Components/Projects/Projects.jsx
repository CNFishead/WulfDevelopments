import emoji from "../../assets/Images/emojiPedia.png";
import keeper from "../../assets/Images/Keeper.png";
import ecomm from "../../assets/Images/ecommerce.png";
import Dice from "../../assets/Images/diceGameImage.png";
import Drum from "../../assets/Images/DrumKit.png";
import Simon from "../../assets/Images/SimonSays.png";
import TinDog from "../../assets/Images/TinDogPic.png";
import TipCalculator from "../../assets/Images/TipCalculator.png";
import Wulf from "../../assets/Images/wulfbrandinglogoblue.png";

const Projects = [
  {
    project_name: "E-Commerce Page",
    project_image: ecomm,
    project_URL: "https://github.com/CNFishead/eCommerce-Page",
    languages: "MERN Stack",
    description: `A simple E-Commerce page built on the MERN stack, meant to be scalable.`,
    technology: "Node.JS, Mongoose, React, Redux, Express",
    liveProject: "https://e-commerce-page.herokuapp.com/",
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
    liveProject: "",
  },
  {
    project_name: "Keeper-App",
    project_image: keeper,
    project_URL: "https://github.com/CNFishead/Keeper-App",
    languages: "JavaScript, CSS, HTML",
    description:
      "A To-do list made with React Components which keeps track of state for the items.",
    technology: "React, CodeSandbox.io",
    liveProject: "",
  },
  {
    project_name: "Dice Game",
    project_image: Dice,
    project_URL: "https://github.com/CNFishead/DiceGame",
    languages: "JavaScript, HTML, CSS",
    description: "A two player dice game, who will win at random chance?",
    technology: "Atom",
    liveProject: "",
  },
  {
    project_name: "Simon Says",
    project_image: Simon,
    project_URL: "https://github.com/CNFishead/SimonSays",
    languages: "JavaScript, HTML, CSS",
    description:
      "The classic game of simon says, Test your memory and see how long you can last against simon.",
    technology: "Atom",
    liveProject: "",
  },
  {
    project_name: "Drum Kit",
    project_image: Drum,
    project_URL: "https://github.com/CNFishead/DrumKit",
    languages: "JavaScript, HTML, CSS",
    description:
      "A single page application that teaches the fundamentals of event listeners.",
    technology: "Atom",
    liveProject: "",
  },
  {
    project_name: "TinDog",
    project_image: TinDog,
    project_URL: "https://github.com/CNFishead/TinDog",
    languages: "HTML, CSS",
    description: "A Mock single-page spoof of Tinder",
    technology: "Atom",
    liveProject: "",
  },
  {
    project_name: "Tip Calculator",
    project_image: TipCalculator,
    project_URL: "https://github.com/CNFishead/TipCalculatorReact",
    languages: "React",
    description: `A simple Tip calculator app, it takes the amount of the bill, and the amount of people splitting the bill, applies a 15% tip, and evenly distributes it amongst the payers.`,
    technology: "React",
    liveProject: "https://tip-calculator-zeta.vercel.app/",
  },
];

export default Projects;
