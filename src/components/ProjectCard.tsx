import React from "react";
import { Flex, Heading, Box, Text, Badge } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { motion } from "framer-motion";
import { Project } from "../types/project";

const MotionFlex = motion(Flex);

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { colorMode } = useColorMode();
  const { title, description, imageUrl, technologies, resourceUrls } = project;
  const [githubLink, liveLink] = resourceUrls;

  return (
    <MotionFlex
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      direction="column"
      maxWidth="500px"
      width="100%"
      zIndex="0"
      borderRadius="5px"
      p="10px"
      margin="20px"
    >
      <Box
        h="180px"
        w="100%"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        marginBottom="10px"
        bgImage={`linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(8, 32, 50, .1)), url('${imageUrl}')`}
        bgPosition="top"
        bgSize="cover"
      ></Box>
      <Flex justify="space-between" align="center">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Box>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ marginRight: "5px", width: "20px" }}
            />
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ width: "20px" }}
                size="2x"
              />
            </a>
          )}
        </Box>
      </Flex>
      <Flex flexWrap="wrap" margin="8px 0">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            m="3px"
            p="4px 8px"
            color={colorMode === "light" ? "black" : "white"}
          >
            {tech}
          </Badge>
        ))}
      </Flex>
      <Text textAlign="justify">{description}</Text>
    </MotionFlex>
  );
};

export default ProjectCard;
