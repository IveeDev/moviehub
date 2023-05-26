import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useMovieQueryStore from "../store";
import useTVQueryStore from "../tvStore";

type Endpoint = "movies" | "tvShows";

interface SearchInputProps {
  endpoint: Endpoint;
}

const SearchInput = ({ endpoint }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText =
    endpoint === "movies"
      ? useMovieQueryStore((s) => s.setSearchText)
      : useTVQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(currentPathname);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = ""; // Clear the input field when the component mounts or updates
    }
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          ref.current.value = ""; // Clear the input field after submitting the form
          let targetRoute = "/"; // Default target route is the homepage

          if (currentPathname.includes("/explore/tv")) {
            targetRoute = "/explore/tv"; // Target route is the TV shows list if on "/explore/tv" route
          } else if (currentPathname.includes("/tvDetailPage")) {
            targetRoute = "/explore/tv"; // Target route is the TV shows list if on "/tvDetailPage" route
          }

          navigate(targetRoute);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={`Search ${
            endpoint === "movies" ? "movies" : "TV shows"
          }...`}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
