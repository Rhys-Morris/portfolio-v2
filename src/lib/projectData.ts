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
      "A marketplace application where users can buy and sell second hand computer parts.",
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
    description: "Hacker News clone with modern UI.",
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
      "Command line application to play the popular board game draughts between two players. File based leaderboard storage.",
    imageUrl: "/draughts.png",
    resourceUrls: ["https://github.com/Rhys-Morris/terminal-draughts", false],
    technologies: ["Ruby"],
  },
  {
    title: "Weatherly",
    description: "Look up local weather forecasts in cities around the world.",
    imageUrl: "/weatherly.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/weatherly",
      "https://weatherlyapplication.netlify.app/",
    ],
    technologies: ["JavaScript", "SASS"],
  },
  {
    title: "PokeMemory",
    description: "A memory card game built with the Pokemon API.",
    imageUrl: "/pokememory.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/memory-cards",
      "https://pokememory-cards.netlify.app/",
    ],
    technologies: ["React"],
  },
  {
    title: "Portfolio & Blog",
    description:
      "The site you're on currently, my little corner of the internet.",
    imageUrl: "/portfolio.png",
    resourceUrls: ["https://github.com/Rhys-Morris/portfolio-v2", false],
    technologies: ["NextJS", "React", "TypeScript", "Strapi", "ChakraUI"],
  },
  {
    title: "Old Portfolio",
    description:
      "My first portfolio site. Built with vanilla JavaScript, HTML and SASS.",
    imageUrl: "/old-portfolio.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/portfolio-single-page",
      "https://rhysmorrisdeveloper.netlify.app/",
    ],
    technologies: ["JavaScript", "SASS"],
  },
];

export { projectData };
