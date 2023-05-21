import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MovieListSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        MOVIE LISTS
      </MenuButton>
      <MenuList>
        <MenuItem>Now Playing</MenuItem>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Top Rated</MenuItem>
        <MenuItem>Upcoming</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MovieListSelector;
