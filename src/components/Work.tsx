import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import Technology from "./Technology";

const projectData = [
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

const Work = () => {
  const [projectCount, setProjectCount] = React.useState(4);
  return (
    <section>
      <Flex direction="column" justify="center" align="center">
        <Flex zIndex="0" marginBottom="50px" align="center">
          <FontAwesomeIcon
            icon={faBriefcase}
            size="2x"
            style={{ marginRight: "10px" }}
          />
          <Heading as="h2" size="2xl">
            Work
          </Heading>
        </Flex>
        <Technology />
        <Heading as="h3" size="lg" mb="20px" zIndex="0" marginTop="50px">
          Projects
        </Heading>
        <Flex
          justify="space-around"
          align="start"
          maxWidth="1000px"
          width="80vw"
          flexWrap="wrap"
        >
          {projectData.slice(0, projectCount).map((proj) => (
            <ProjectCard project={proj} />
          ))}
        </Flex>
        <Flex>
          {projectCount < projectData.length && (
            <Button
              margin="0 10px"
              onClick={() => {
                if (projectCount < projectData.length - 1)
                  setProjectCount(projectCount + 2);
                if (projectCount === projectData.length - 1)
                  setProjectCount(projectCount + 1);
              }}
            >
              Show More{" "}
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faChevronDown}
              />
            </Button>
          )}
          {projectCount > 4 && (
            <Button
              margin="0 10px"
              onClick={() => {
                if (projectCount % 2 === 0) setProjectCount(projectCount - 2);
                else {
                  setProjectCount(projectCount - 1);
                }
              }}
            >
              Show Less{" "}
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faChevronUp}
              />
            </Button>
          )}
        </Flex>
      </Flex>
    </section>
  );
};

export default Work;
