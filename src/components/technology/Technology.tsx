import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Select } from "@chakra-ui/select";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faToolbox } from "@fortawesome/free-solid-svg-icons/faToolbox";
import { TechnologyCategory } from "../../types/technologyCategory";
import {
  getButtonBackgroundStyle,
  getButtonHoverStyle,
  renderActiveTechnologies,
} from "../../lib/helpers/technology";

const Technology = () => {
  const [active, setActive] = React.useState<TechnologyCategory>(
    TechnologyCategory.FRONT_END
  );
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
          <Select
            onChange={(e) => setActive(e.target.value as TechnologyCategory)}
            w="90vw"
          >
            <option value={TechnologyCategory.FRONT_END}>Front End</option>
            <option value={TechnologyCategory.BACK_END}>Back End</option>
            <option value={TechnologyCategory.TOOLS_AND_DEPLOYMENT}>
              Tools & Deployment
            </option>
          </Select>
        </div>
      )}

      {!breakpoint550 && (
        <Flex>
          <Button
            _hover={getButtonHoverStyle(
              active === TechnologyCategory.FRONT_END,
              colorMode
            )}
            margin="0 10px"
            onClick={() => setActive(TechnologyCategory.FRONT_END)}
            bg={getButtonBackgroundStyle(
              active === TechnologyCategory.FRONT_END
            )}
          >
            <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "10px" }} />
            Front End
          </Button>
          <Button
            _hover={getButtonHoverStyle(
              active === TechnologyCategory.BACK_END,
              colorMode
            )}
            margin="0 10px"
            onClick={() => setActive(TechnologyCategory.BACK_END)}
            bg={getButtonBackgroundStyle(
              active === TechnologyCategory.BACK_END
            )}
          >
            <FontAwesomeIcon icon={faServer} style={{ marginRight: "10px" }} />
            Back End
          </Button>
          <Button
            _hover={getButtonHoverStyle(
              active === TechnologyCategory.TOOLS_AND_DEPLOYMENT,
              colorMode
            )}
            margin="0 10px"
            onClick={() => setActive(TechnologyCategory.TOOLS_AND_DEPLOYMENT)}
            bg={getButtonBackgroundStyle(
              active === TechnologyCategory.TOOLS_AND_DEPLOYMENT
            )}
          >
            <FontAwesomeIcon icon={faToolbox} style={{ marginRight: "10px" }} />
            Tools & Deployment
          </Button>
        </Flex>
      )}

      {renderActiveTechnologies(active)}
    </Flex>
  );
};

export default Technology;
