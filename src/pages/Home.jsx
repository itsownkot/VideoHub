import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  rGirl,
  brGirl,
  blGirl,
  fGirl,
  redBatman,
  smilingBatman,
} from "../assets";

const headingOpts = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={rGirl} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          do
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={brGirl} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          you
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={blGirl} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          wanna
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={fGirl} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          see
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={redBatman} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          some
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image h="100%" objectFit="cover" src={smilingBatman} />
        <Heading bgColor="blackAlpha.600" color={"white"} {...headingOpts}>
          videos??
        </Heading>
      </Box>
    </Carousel>
  );
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW="container.xl" minH="100vh" p="16">
        <Heading py="2" borderBottom="2px solid" w="fit-content" m="auto">
          Services
        </Heading>
        <Stack
          h="full"
          p="4"
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque vitae orci vel vestibulum. Aenean sit amet tellus
            sapien. Sed est nisl, convallis sit amet fringilla at, euismod quis
            orci. Cras laoreet dolor a ligula eleifend cursus. Praesent tempus
            pharetra lectus, tempus vulputate nunc dignissim sit amet. Vivamus
            faucibus, dui sit amet tincidunt laoreet, purus nisl pulvinar neque,
            at accumsan nulla ipsum vel odio. Curabitur pretium felis nec tempus
            ullamcorper. Aenean nec lacinia nunc, sit amet tempus enim.
            Vestibulum tempor diam vitae augue interdum, at vestibulum urna
            mattis. Cras lacinia, sapien sed semper efficitur, lacus ex
            fermentum dui, non dignissim tortor nisi in mauris. Aenean
            consectetur libero vel sem interdum scelerisque. Aliquam at aliquet
            orci. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aliquam ullamcorper ultrices enim,
            eget dictum urna posuere facilisis.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
export default Home;
