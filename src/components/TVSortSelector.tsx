import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarUp, BsChevronDown } from "react-icons/bs";
import useTVQueryStore from "../tvStore";

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
    value: "vote_count.desc",
    label: "Vote Count Descending",
  },

  {
    value: "primary_release_date.asc",
    label: "Primary Release Ascending",
  },

  {
    value: "primary_release_date.desc",
    label: "Primary Release Descending",
  },
];

const TVSortSelector = () => {
  const setSortOrder = useTVQueryStore((s) => s.setSortOrder);
  const sortOrder = useTVQueryStore((s) => s.tvQuery.sortOrder);
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
          <MenuItem key={order.label} onClick={() => setSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TVSortSelector;
