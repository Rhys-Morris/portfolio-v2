import React from "react";
import {
  Heading,
  Flex,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Center,
  Text,
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
        <Flex direction="column" maxWidth="700px" width="90vw">
          <Heading alignSelf="center" mb="20px">
            Get in touch!
          </Heading>
          <form>
            <FormControl mb="30px">
              <FormLabel size="sm">Name</FormLabel>
              <Input
                borderColor={APP_COLORS.tertiaryDark}
                borderWidth="2px"
                borderRadius="3px"
                placeholder="Rhys Morris"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fontSize="20px"
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Email</FormLabel>
              <Input
                borderWidth="2px"
                borderColor={APP_COLORS.tertiaryDark}
                borderRadius="3px"
                placeholder="Let me know where I can reach you"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb="10px"
                fontSize="20px"
              />
            </FormControl>
            <FormControl mb="30px">
              <FormLabel size="sm">Message</FormLabel>
              <Input
                borderColor={APP_COLORS.tertiaryDark}
                borderWidth="2px"
                height="100px"
                borderRadius="3px"
                type="textarea"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fontSize="20px"
                mb="10px"
              />
              <Text size="sm">Let me know what I can do for you</Text>
            </FormControl>
          </form>
        </Flex>
      </Center>
    </section>
  );
};

export default Contact;
