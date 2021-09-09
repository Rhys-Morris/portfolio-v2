import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "PcPartsPal",
    description:
      "A marketplace application where user's can buy and sell second hand computer parts.",
    imageUrl: "/hacker-news.png",
    resourceUrls: [
      "https://github.com/Rhys-Morris/pcpartspal",
      "http://pcpartspal.herokuapp.com",
    ],
    technologies: ["Ruby", "Rails", "JavaScript", "SASS"],
  },
];

const Work = () => {
  return (
    <section>
      <Flex direction="column" justify="center" align="center">
        <Flex zIndex="0" marginBottom="50px">
          <FontAwesomeIcon
            icon={faBriefcase}
            size="2x"
            style={{ marginRight: "10px" }}
          />
          <Heading>Work</Heading>
        </Flex>
        <Flex maxWidth="1000px" width="80vw" flexWrap="wrap">
          {projectData.map((proj) => (
            <ProjectCard project={proj} />
          ))}
        </Flex>
      </Flex>
    </section>
  );
};

export default Work;
