import React from "react";
import { Flex, Heading, Button, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronDown,
  faChevronUp,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import Technology from "./Technology";
import { projectData } from "../lib/projectData";
import UnderlineText from "./styled/UnderlineText";

const Work = () => {
  const [projectCount, setProjectCount] = React.useState(4);

  return (
    <section style={{ margin: "50px", padding: "100px 0" }} id="work">
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
          width="90vw"
          flexWrap="wrap"
        >
          {projectData.slice(0, projectCount).map((proj, i) => (
            <ProjectCard key={i} project={proj} />
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
        <Text zIndex="1" mt="30px" mb="20px">
          Want to know more? Download my{" "}
          <Link
            target="_blank"
            href="/resume"
            _hover={{ textDecoration: "none" }}
          >
            <UnderlineText>resume</UnderlineText>.
          </Link>
        </Text>
      </Flex>
    </section>
  );
};

export default Work;
