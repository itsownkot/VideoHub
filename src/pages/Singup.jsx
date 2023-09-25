import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <Container p="16" maxW={"container.xl"} minH="100vh">
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "96"]}
          m="auto"
          my="16"
          spacing={"8"}
        >
          <Heading size={"lg"}>Welcome friend, want to join?;)</Heading>
          <Avatar boxSize={"32"} alignSelf={"center"} />
          <Input
            required
            type="text"
            placeholder="Username"
            focusBorderColor="red.500"
          />
          <Input
            required
            type="email"
            placeholder="Email"
            focusBorderColor="red.500"
          />
          <Input
            required
            type="password"
            placeholder="Password"
            focusBorderColor="red.500"
          />
          <Button variant={"link"} alignSelf={"flex-end"}></Button>
          <Button type="submit" colorScheme="red">
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already signed up?{" "}
            <Button variant={"link"} colorScheme="red">
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};
export default Singup;
