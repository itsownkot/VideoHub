import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading size={"lg"}>Oh sh!t here we go again...</Heading>
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
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to="/forgetpass">Forget password?</Link>
          </Button>
          <Button type="submit" colorScheme="red">
            Log In
          </Button>
          <Text textAlign={"right"}>
            New user?{" "}
            <Button variant={"link"} colorScheme="red">
              <Link to="/singup">Sing up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};
export default Login;
