import { HStack, Image } from "@chakra-ui/react";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { Endpoint } from "./SearchInput";

const NavBar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(currentPathname);

  let endpoint: Endpoint = "movies"; // Default endpoint value is "movies"

  if (currentPathname === "/" || currentPathname.startsWith("/movies/"))
    endpoint = "movies";

  if (
    currentPathname === "/explore/tv" ||
    currentPathname.startsWith("/explore/tv/")
  )
    endpoint = "tvShows";

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
