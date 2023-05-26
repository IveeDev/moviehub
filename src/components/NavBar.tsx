import { HStack, Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  // Determine the endpoint based on the current route
  const endpoint = currentPathname === "/explore/tv" ? "tvShows" : "movies";

  return (
    <>
      <HStack justifyContent="space-between" padding={2}>
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput endpoint={endpoint} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
