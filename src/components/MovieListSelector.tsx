import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieListSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        DISCOVER
      </MenuButton>
      <MenuList>
        <Link to={"/"}>
          <MenuItem>Movies</MenuItem>
        </Link>
        <Link to={"/explore/tv"}>
          <MenuItem>TV Shows</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MovieListSelector;
