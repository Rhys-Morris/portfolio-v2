import React from "react";
import {
  Flex,
  Heading,
  Button,
  Text,
  useColorMode,
  useMediaQuery,
  Select,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import APP_COLORS from "../style/colorTheme";
import {
  DiJsBadge,
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiRuby,
  DiPostgresql,
  DiNpm,
  DiGit,
} from "react-icons/di";
import {
  SiRails,
  SiAmazonaws,
  SiNextDotJs,
  SiNetlify,
  SiHeroku,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const Technology = () => {
  const [active, setActive] = React.useState("front");
  const { colorMode } = useColorMode();
  const [breakpoint550] = useMediaQuery("(max-width: 550px)");

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      zIndex="0"
      maxWidth="100%"
    >
      <Heading as="h3" size="lg" mb="20px">
        Technologies
      </Heading>
      {breakpoint550 && (
        <div>
          <Select onChange={(e) => setActive(e.target.value)} w="90vw">
            <option value="front">Front End</option>
            <option value="back">Back End</option>
            <option value="tools">Tools & Deployment</option>
          </Select>
        </div>
      )}
      {!breakpoint550 && (
        <Flex>
          <Button
            _hover={{
              bg:
                active === "front"
                  ? null
                  : colorMode === "dark"
                  ? "rgba(255, 255, 255, 0.16)"
                  : "#E2E8F0",
            }}
            margin="0 10px"
            onClick={() => setActive("front")}
            bg={active === "front" ? APP_COLORS.fontHighlight : null}
          >
            <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "10px" }} />
            Front End
          </Button>
          <Button
            _hover={{
              bg:
                active === "back"
                  ? null
                  : colorMode === "dark"
                  ? "rgba(255, 255, 255, 0.16)"
                  : "#E2E8F0",
            }}
            margin="0 10px"
            onClick={() => setActive("back")}
            bg={active === "back" ? APP_COLORS.fontHighlight : null}
          >
            <FontAwesomeIcon icon={faServer} style={{ marginRight: "10px" }} />
            Back End
          </Button>
          <Button
            _hover={{
              bg:
                active === "tools"
                  ? null
                  : colorMode === "dark"
                  ? "rgba(255, 255, 255, 0.16)"
                  : "#E2E8F0",
            }}
            margin="0 10px"
            onClick={() => setActive("tools")}
            bg={active === "tools" ? APP_COLORS.fontHighlight : null}
          >
            <FontAwesomeIcon icon={faToolbox} style={{ marginRight: "10px" }} />
            Tools & Deployment
          </Button>
        </Flex>
      )}
      {active === "front" && (
        <MotionFlex
          marginTop="40px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <Flex direction="column" m="5px 10px" align="center">
            <DiJsBadge size="40px" />
            <Text>JavaScript</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiTypescript size="40px" />
            <Text>TypeScript</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiReact size="40px" />
            <Text>React</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiHtml5 size="40px" />
            <Text>HTML 5</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiCss3 size="40px" />
            <Text>CSS 3</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiSass size="40px" />
            <Text>Sass</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiNextDotJs size="40px" />
            <Text>Next.JS</Text>
          </Flex>
        </MotionFlex>
      )}
      {active === "back" && (
        <MotionFlex
          marginTop="40px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <Flex direction="column" m="5px 10px" align="center">
            <DiRuby size="40px" />
            <Text>Ruby</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiRails size="40px" />
            <Text>Rails</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiPostgresql size="40px" />
            <Text>PostgreSQL</Text>
          </Flex>
        </MotionFlex>
      )}
      {active === "tools" && (
        <MotionFlex
          marginTop="40px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <Flex direction="column" m="5px 10px" align="center">
            <DiNpm size="40px" />
            <Text>NPM</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <DiGit size="40px" />
            <Text>Git</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiAmazonaws size="40px" />
            <Text>AWS</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiNetlify size="40px" />
            <Text>Netlify</Text>
          </Flex>
          <Flex direction="column" m="5px 10px" align="center">
            <SiHeroku size="40px" />
            <Text>Heroku</Text>
          </Flex>
        </MotionFlex>
      )}
    </Flex>
  );
};

export default Technology;
