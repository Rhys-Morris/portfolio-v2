import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/media-query";
import UnderlineText from "./styled/UnderlineText";

const About = () => {
  const [breakpoint1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <section style={{ display: "flex", marginBottom: "100px" }}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxWidth="1000px"
        width="80vw"
        margin="0 auto"
      >
        <Heading as="h2" size="2xl" zIndex="0" mb="30px">
          About
        </Heading>
        <div style={{ zIndex: 0 }}>
          <Image
            src="/photo.png"
            height="200px"
            width="auto"
            zIndex="0"
            borderRadius="100%"
            alt="photo"
            float={breakpoint1000 ? "none" : "left"}
            margin={breakpoint1000 ? "20px auto" : "10px 30px 0 0"}
            style={{ shapeOutside: "circle(50%)" }}
          />
          <Text
            zIndex="0"
            textAlign="justify"
            maxWidth={breakpoint1000 ? "500px" : "100%"}
          >
            G&apos;day! I&apos;m Rhys, a software developer based in Melbourne,
            Australia. I&apos;ve recently attained my first role as a software
            developer following graduation from Coder Academy&apos;s flex track
            coding bootcamp. I discovered a passion for programming whilst
            employed in my first career as a small animal veterinarian, and
            decided that I wanted to pursue a role in the industry full time. I
            love to problem solve, and really enjoy the challenges of software
            development, as well as the creative outlet that comes with
            designing and building applications for the web. In my spare time I
            restore mid century furniture - you can find my instagram with some
            of my work{" "}
            <Link
              href="https://www.instagram.com/morrismodern/?hl=en"
              target="_blank"
              rel="noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <UnderlineText>here</UnderlineText>
            </Link>
            . I adore the design aesthetic of the mid century period, and
            there&apos;s something immeasurably satisfying about working with
            wood, and bringing something old back to life. Particularly when
            you&apos;ve spent the majority of the working week in front of a
            screen!
          </Text>
        </div>
      </Flex>
    </section>
  );
};

export default About;
