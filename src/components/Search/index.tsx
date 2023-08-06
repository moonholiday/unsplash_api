import { Box, Input, InputGroup, SimpleGrid } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { DebounceInput } from "react-debounce-input";
interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<Props> = (props) => {
  const { query, setQuery } = props;

  return (
    <InputGroup>
      <DebounceInput
        element={Input}
        minLength={2}
        debounceTimeout={1000}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        variant="flushed"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;
