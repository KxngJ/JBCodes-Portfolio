import portfoliov1 from "../../Assets/Images/projects/portfolio-v1.png";
import colorGenerator from "../../Assets/Images/projects/color-generator.png";
import weather from "../../Assets/Images/projects/weather-forecast.png";
import form from "../../Assets/Images/projects/form-validation.png";
import google from "../../Assets/Images/projects/google-clone.png";
import slider from "../../Assets/Images/projects/react-slider.png";
import todo from "../../Assets/Images/projects/todo-list.png";
import cryptoverse from "../../Assets/Images/projects/cryptoverse.png";
import gpt3 from "../../Assets/Images/projects/gpt3-website.png";
import proNFtLanding from "../../Assets/Images/projects/proNft-landing.PNG";
import PRONftMobile from "../../Assets/Images/projects/NFTPro-Mobile.png";

const projects = [
  {
    id: 10,
    name: "ProNft Mobile App",
    img: `${PRONftMobile}`,
    description:
      "A  React Native Mobile application marketplace to buy, store and collect NFTS.",
    technologies: ["React Native"],
    links: {
      code: "https://github.com/KxngJ/NFT-Mobile-App",
      live: "https://expo.dev/@kxng/ProNft?serviceType=classic&distribution=expo-go",
    },
  },
  {
    id: 9,
    name: "ProNft Landing Page",
    img: `${proNFtLanding}`,
    description:
      "The landing page for my latest mobile project built with React Native.",
    technologies: ["React", "Tailwind"],
    links: {
      live: "https://pro-nft.netlify.app/",
      code: "https://github.com/KxngJ/ProNFT-Landing-Page",
    },
  },
  {
    id: 0,
    name: "Gpt3 Website",
    img: `${gpt3}`,
    description:
      "GPT3 is a modern website Built with ReactJs and Styled components, with the main focus on responsive design with flex and grid systems.",
    technologies: ["React.js", "Styled-Components"],
    links: {
      live: "https://endearing-tiramisu-80cf9c.netlify.app/",
      code: "https://github.com/KxngJ/GPT-3",
    },
  },
  {
    id: 1,
    name: "Crytoverse",
    img: `${cryptoverse}`,
    description:
      "Cryptoverse is a web app for all updates and news on cryptocurrency and its happenings. Built using Rapid API ( coin ranking, bing news ) Api's to fetch data with redux queries.",
    technologies: ["React.js", "Redux", "Ant design"],
    links: {
      live: "https://cryptokxng.netlify.app/",
      code: "https://github.com/KxngJ/cryptoapp",
    },
  },
  {
    id: 2,
    name: "Portfolio Website V1",
    img: `${portfoliov1}`,
    description:
      "This is the first version of my portfolio website. With this version, I wanted to learn a new technology (React.js) to build an interactive website with animations and transitions with the use of Lottiefiles. Some of the technologies used are listed below.",
    technologies: ["React.js", "Javascript", "Styled-Components"],
    links: {
      live: "https://jaheim-brown-portfolio.hostman.site/",
      code: "https://github.com/KxngJ/Jaheim-Brown-Portfolio",
    },
  },
  {
    id: 3,
    name: "Colour Generator",
    img: `${colorGenerator}`,
    description:
      "This is a react colour generator project where you enter any given hex colour and the application gives you shades and tints of the entered colour. The technologies used are listed below.",
    technologies: ["React.js", "CSS"],
    links: {
      live: "https://laughing-leavitt-dcf120.netlify.app/",
      code: "https://github.com/KxngJ/Color-Generator-React",
    },
  },
  {
    id: 4,
    name: "Weather Forecast",
    img: `${weather}`,
    description:
      "A weather forecast application built with react with the main focus of understanding how to work with asynchronous tasks and handling of data. Some of the technologies used are listed below.",
    technologies: ["React.js", "CSS"],
    links: {
      live: "https://weather-web-app.hostman.site/",
      code: "https://github.com/KxngJ/Weather-Web-App",
    },
  },
  {
    id: 5,
    name: "Google Homepage Clone",
    img: `${google}`,
    description:
      "A project using mainly HTML and CSS to create a clone of the google chrome home page. Some of the technologies used are listed below.",
    technologies: ["HTML", "CSS"],
    links: {
      live: "https://kxngj.github.io/Google-Homepage-Clone/",
      code: "https://github.com/KxngJ/Google-Homepage-Clone",
    },
  },
  {
    id: 6,
    name: "Form Validation",
    img: `${form}`,
    description:
      "A project using javascript to validate form fields and returns to the user error and success messages depending on there actions. The technologies used are listed below.",
    technologies: ["HTML", "CSS", "Javascript"],
    links: {
      live: "https://kxngj.github.io/form-validaiton-js/",
      code: "https://github.com/KxngJ/form-validaiton-js",
    },
  },
  {
    id: 7,
    name: "React Slider",
    img: `${slider}`,
    description:
      "This is a project I built when learning to use React js to get a better understanding of how to use different hooks and to handle state changes. Some of the technologies used are listed below.",
    technologies: ["REACT", "CSS"],
    links: {
      live: "https://elated-tesla-f72471.netlify.app/",
      code: "https://github.com/KxngJ/slider",
    },
  },
  {
    id: 8,
    name: "Todo List",
    img: `${todo}`,
    description:
      "Todo list web application built with Javascript HTML and CSS to get a better understanding of dom manipulation. Some of the technologies used are listed below.",
    technologies: ["HTML", "CSS", "Javascript"],
    links: {
      live: "https://kxngj.github.io/Todo-List/",
      code: "https://github.com/KxngJ/Todo-List",
    },
  },
];

export default projects;
