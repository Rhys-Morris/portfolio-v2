import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import APP_COLORS from "../style/colorTheme";

const MotionImage = motion(Image);

const About = () => {
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
        <div style={{ zIndex: "0" }}>
          <MotionImage
            src="/photo.png"
            height="200px"
            zIndex="0"
            borderRadius="100%"
            float="left"
            margin="10px 30px"
            style={{ shapeOutside: "circle(50%)" }}
          />
          <Text zIndex="0" textAlign="justify" pr="100px">
            G'day! I'm Rhys, a software developer based in Sunbury, a suburb
            about 35km north-west of Melbourne, Victoria. I've recently started
            my first position as a developer after completing an intensive
            coding bootcamp through Coder Academy. I'm currently 30 years old
            and discovered a passion for programming whilst still employed in my
            initial career as a small animal veterinarian. I'm passionate about
            creating interactive, functional and accessible products. I aim to
            build applications and websites that provide a great user
            experience, whilst still being performant. In my spare time I
            restore mid century furniture - you can find my instagram with some
            of my work{" "}
            <a
              href="https://www.instagram.com/morrismodern/?hl=en"
              target="_blank"
              style={{ fontWeight: "bold", color: APP_COLORS.fontHighlight }}
            >
              here
            </a>
            . I love the design aesthetic of the mid century period, and there's
            something immeasurably satisfying about working with wood, and
            bringing something old back to life.
          </Text>
        </div>
      </Flex>
    </section>
  );
};

export default About;
