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
import APP_COLORS from "../style/colorTheme";
import { motion, AnimatePresence } from "framer-motion";

const MotionFlex = motion(Flex);

const ProjectCard = ({ project }) => {
  const { colorMode } = useColorMode();
  const { title, description, imageUrl, technologies, resourceUrls } = project;
  const [githubLink, liveLink] = resourceUrls;
  return (
    <MotionFlex
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      direction="column"
      width="45%"
      zIndex="0"
      borderRadius="5px"
      p="10px"
      margin="20px 0"
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
          <a href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "5px" }} />
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </Box>
      </Flex>
      <Flex flexWrap="wrap">
        {technologies.map((tech) => (
          <Badge
            m="3px"
            p="4px 8px"
            color={colorMode === "light" ? "black" : "white"}
          >
            {tech}
          </Badge>
        ))}
      </Flex>
      <Text>{description}</Text>
    </MotionFlex>
  );
};

export default ProjectCard;
