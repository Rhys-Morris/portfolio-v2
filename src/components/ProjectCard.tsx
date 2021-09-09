import React from "react";
import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Badge,
  useColorMode,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  const { colorMode } = useColorMode();
  const { title, description, imageUrl, technologies, resourceUrls } = project;
  const [githubLink, liveLink] = resourceUrls;
  return (
    <Flex direction="column" width="45%" zIndex="0" borderRadius="5px" p="10px">
      <Image
        alt="project-img"
        src={imageUrl}
        h="180px"
        w="100%"
        borderRadius="10px"
        marginBottom="10px"
      />
      <Flex justify="space-between" align="center">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Box>
          <a href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "5px" }} />
          </a>
          <a href={liveLink} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </Box>
      </Flex>
      <Flex>
        {technologies.map((tech) => (
          <Badge
            mr="5px"
            p="4px 8px"
            color={colorMode === "light" ? "black" : "white"}
          >
            {tech}
          </Badge>
        ))}
      </Flex>
      <Text>{description}</Text>
    </Flex>
  );
};

export default ProjectCard;
