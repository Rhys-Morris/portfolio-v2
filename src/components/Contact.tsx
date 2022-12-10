import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Center, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { validateForm } from "../lib/validation";
import { useForm } from "@formspree/react";
import APP_COLORS from "../style/colorTheme";

type FormError = {
  message?: string;
};

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [state, handleSubmit] = useForm("xwkwborr");
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      validateForm(name, email);
      handleSubmit(e);
      onOpen();
    } catch (e: unknown) {
      const { message: errorMessage } = e as FormError;
      if (errorMessage === "Email is an invalid format") {
        setEmailError(errorMessage);
      }
      if (errorMessage === "Name must not be empty") {
        setNameError(errorMessage);
      }
    }
  };

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
        {/* Modal if successful form submission */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalContent
            p="30px"
            bg={colorMode === "light" ? "gray.100" : APP_COLORS.fontHighlight}
            color="black"
          >
            <ModalCloseButton />
            <ModalBody textAlign="center">
              Form successfully submitted!
            </ModalBody>
          </ModalContent>
        </Modal>

        <Flex direction="column" maxWidth="750px" width="80vw" zIndex="2">
          <Flex align="center" justify="center" mb="20px">
            <FontAwesomeIcon
              size="2x"
              icon={faMailBulk}
              style={{ marginRight: "10px", width: "35px" }}
            />
            <Heading alignSelf="center" size="2xl">
              Get in touch!
            </Heading>
          </Flex>
          <Text textAlign="center" mb="20px">
            I&apos;m always open to work opportunities! Reach out and we can
            have a chat.
          </Text>
          <form method="POST" onSubmit={handleFormSubmit}>
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
                  setNameError("");
                }}
              />
              {nameError && (
                <Text mt="10px" color="red.300">
                  {nameError}
                </Text>
              )}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                mb="10px"
              />
              {emailError && (
                <Text mt="10px" color="red.300">
                  {emailError}
                </Text>
              )}
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
              bg={colorMode === "dark" ? APP_COLORS.fontHighlight : ""}
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
          <Text textAlign="center" mt="50px" mb="20px">
            I&apos;m also reachable on social media, if that&apos;s your
            preferred method of communication:
          </Text>
          <Flex align="center" justify="center">
            <a
              target="_blank"
              rel="noreferrer"
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
            <a
              target="_blank"
              href="https://twitter.com/RhysMorris91"
              rel="noreferrer"
            >
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
