import { Container, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container h="100vh" maxW={"container.xl"}>
      <Heading m="auto" my={"20"} w="fit-content">
        Sorry this page doesn't exist yet
      </Heading>
    </Container>
  );
};
export default NotFound;
