const projectData: {
  title: string;
  description: string;
  imageUrl: string;
  resourceUrls: [string, string | false];
  technologies: string[];
}[] = [
  {
    title: "PcPartsPal",
    description:
      "A marketplace application where user's can buy and sell second hand computer parts.",
    imageUrl: "/pcpartspal.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/pcpartspal",
      "http://pcpartspal.herokuapp.com",
    ],
    technologies: [
      "Ruby on Rails",
      "JavaScript",
      "SASS",
      "AWS: S3",
      "PostgreSQL",
      "Stripe",
      "RSpec",
    ],
  },
  {
    title: "ClockOn",
    description:
      "A full stack application for freelance workers to manage their projects, billable hours and invoicing.",
    imageUrl: "/clockon.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/clockon-client",
      "http://clockon.netlify.app",
    ],
    technologies: [
      "Rails API",
      "React",
      "Chakra UI",
      "Chart.JS",
      "PostgreSQL",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "HackerNews",
    description:
      "Hacker News clone with modern UI including light and dark modes.",
    imageUrl: "/hacker-news.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/hacker-news-clone",
      "http://hacknews-clone.netlify.app",
    ],
    technologies: ["React", "Hacker News API"],
  },
  {
    title: "Draughts",
    description:
      "A command line application to play the popular board game draughts with two players. Features file based leaderboard storage.",
    imageUrl: "/draughts.png",
    resourceUrls: ["https://github.com/Rhys-Morris/terminal-draughts", false],
    technologies: ["Ruby"],
  },
  {
    title: "Weatherly",
    description:
      "An application to look up local weather forecasts in cities around the world",
    imageUrl: "/weatherly.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/weatherly",
      "https://weatherlyapplication.netlify.app/",
    ],
    technologies: ["JavaScript", "OpenWeather API"],
  },
  {
    title: "PokeMemory",
    description:
      "A memory card game built with the Poke API featuring a classic Pokemon colour scheme",
    imageUrl: "/pokememory.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/memory-cards",
      "https://pokememory-cards.netlify.app/",
    ],
    technologies: ["React", "Poke API"],
  },
];

export { projectData };
