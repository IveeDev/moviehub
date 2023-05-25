import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import useMovieQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

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
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search movies..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
