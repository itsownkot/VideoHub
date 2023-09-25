import React from "react";
import { Link } from "react-router-dom";
import ModeToggler from "./ModeToggler";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
  Button,
  DrawerFooter,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        pos="fixed"
        zIndex="999"
        bg="red.500"
        top="4"
        left="4"
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Some video hub</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button variant="ghost" onClick={onClose}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" onClick={onClose}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button variant="ghost" onClick={onClose}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button variant="ghost" onClick={onClose}>
                <Link to="/upload">Upload</Link>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack justify="space-evenly" w="full">
              <Button onClick={onClose} colorScheme="red">
                <Link to="/login">Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme="red" variant="outline">
                <Link to="/singup">Sing up</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <HeaderDrawer />
      <ModeToggler />
    </header>
  );
};
export default Header;
