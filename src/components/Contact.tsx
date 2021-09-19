import React from "react";
import {
  Heading,
  Flex,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { validateName } from "../lib/helpers";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [state, handleSubmit] = useForm("xwkwborr");
  const [error, setError] = React.useState(null);

  const { colorMode } = useColorMode();
  return (
    <section
      id="contact"
      style={{
        color:
          colorMode == "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark,
        padding: "50px 0",
        marginBottom: "50px",
      }}
    >
      <Center>
        <Flex direction="column" maxWidth="750px" width="80vw" zIndex="2">
          <Flex align="center" justify="center" mb="20px">
            <FontAwesomeIcon
              icon={faMailBulk}
              size="2x"
              style={{ marginRight: "10px" }}
            />
            <Heading alignSelf="center" size="2xl">
              Get in touch!
            </Heading>
          </Flex>
          <Text textAlign="center" mb="20px">
            I'm always open to work opportunities! Reach out and we can have a
            chat.
          </Text>
          <form
            method="POST"
            onSubmit={(e) => {
              try {
                e.preventDefault();
                validateName(name);
                handleSubmit(e);
              } catch (e) {
                setError(e.message);
              }
            }}
          >
            <FormControl mb="30px">
              <FormLabel size="sm">Name</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.fontHighlight}
                placeholder="Rhys Morris"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setError(null);
                }}
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Email</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.fontHighlight}
                placeholder="Rhys@example.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb="10px"
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Message</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.fontHighlight}
                height="100px"
                type="textarea"
                name="message"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mb="10px"
              />
            </FormControl>
            <Button
              width="100%"
              colorScheme={colorMode === "light" ? "gray" : "blue"}
              bg={colorMode === "dark" ? APP_COLORS.fontHighlight : null}
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
            {error && (
              <Text mt="10px" color="red.300" textAlign="center">
                {error || state.errors}
              </Text>
            )}
          </form>
          <Text textAlign="center" mt="50px" mb="20px">
            I'm also reachable on social media, if that's your preferred method
            of communication:
          </Text>
          <Flex align="center" justify="center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rhys-morris-37ba241b9/"
            >
              <Button m="0 5px">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ marginRight: "10px" }}
                />
                LinkedIn
              </Button>
            </a>
            <a target="_blank" href="https://twitter.com/RhysMorris91">
              <Button m="0 5px">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ marginRight: "10px" }}
                />
                Twitter
              </Button>
            </a>
          </Flex>
        </Flex>
      </Center>
    </section>
  );
};

export default Contact;
