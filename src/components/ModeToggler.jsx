import {
  useColorMode,
  Switch,
  Box,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      pos="fixed"
      zIndex="overlay"
      bottom="4"
      left="4"
      onClick={toggleColorMode}
      icon={<Icon />}
    />
    // <Box>
    //   <SunIcon />
    //   <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
    //   <MoonIcon />
    // </Box>
  );
};
export default ModeToggler;
