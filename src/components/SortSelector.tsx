import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const sortOrders = [
  {
    value: "",
    label: "Relevance",
  },
  {
    value: "popularty.asc",
    label: "Popularity Ascending",
  },

  {
    value: "popularty.desc",
    label: "Popularity Descending",
  },

  {
    value: "revenue.asc",
    label: "Revenue Ascending",
  },

  {
    value: "revenue.desc",
    label: "Revenue Descending",
  },

  {
    value: "popularty.asc",
    label: "Popularity Ascending",
  },

  {
    value: "vote_average.asc",
    label: "Vote Average Ascending",
  },

  {
    value: "vote_average.desc",
    label: "Vote Average Descending",
  },

  {
    value: "vote_count.asc",
    label: "Vote Count Ascending",
  },

  {
    value: "vote_count.asc",
    label: "Vote Count Descending",
  },
];

const SortSelector = () => {
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);
  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        SortBy: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => setSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
