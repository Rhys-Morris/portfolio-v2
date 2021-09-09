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
} from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { colorMode } = useColorMode();
  return (
    <section
      style={{
        color:
          colorMode == "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark,
        padding: "50px 0",
      }}
    >
      <Center>
        <Flex direction="column" maxWidth="700px" width="90vw" zIndex="2">
          <Heading alignSelf="center" mb="20px">
            Get in touch!
          </Heading>
          <form>
            <FormControl mb="30px">
              <FormLabel size="sm">Name</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.tertiaryDark}
                placeholder="Rhys Morris"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fontSize="20px"
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Email</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.tertiaryDark}
                placeholder="Rhys@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb="10px"
                fontSize="20px"
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Message</FormLabel>
              <Input
                variant="flushed"
                borderColor={APP_COLORS.tertiaryDark}
                height="100px"
                type="textarea"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fontSize="20px"
                mb="10px"
              />
            </FormControl>
            <Button>Submit</Button>
          </form>
        </Flex>
      </Center>
    </section>
  );
};

export default Contact;
