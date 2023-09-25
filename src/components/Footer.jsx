import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineSend,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH="40" p="16" color="white">
      <Stack direction={["column", "row"]}>
        <VStack w="full" align={"stretch"} px="4">
          <Heading
            size="md"
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Subscribe to get updates
          </Heading>
          <HStack py="2">
            <Input placeholder="Enter email" type="email" />
            <Button p="0" variant={"ghost"} colorScheme="red">
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          borderRight={["none", "1px solid white"]}
          borderLeft={["none", "1px solid white"]}
          w="full"
          pt={["5", "0"]}
        >
          <Heading textTransform={"uppercase"}>video hub</Heading>
          <Text>All rights does not reserved</Text>
        </VStack>

        <VStack w="full" pt={["5", "0"]}>
          <Heading size="md" textTransform={"uppercase"}>
            social media
          </Heading>
          <Button p="0" variant="link" colorScheme="white">
            <AiOutlineInstagram
              style={{ marginRight: 2, transform: "translateY(1.15px)" }}
            />
            <a target="blank" href="https://instagram.com">
              Instagram
            </a>
          </Button>
          <Button variant="link" colorScheme="white">
            <AiOutlineFacebook
              style={{ marginRight: 2, transform: "translateY(1.15px)" }}
            />
            <a target="blank" href="https://facebook.com">
              Facebook
            </a>
          </Button>
          <Button variant="link" colorScheme="white">
            <AiOutlineTwitter
              style={{ marginRight: 2, transform: "translateY(1.15px)" }}
            />
            <a target="blank" href="https://twitter.com">
              Twitter
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};
export default Footer;
