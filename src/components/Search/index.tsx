import { Input, InputGroup } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { DebounceInput } from "react-debounce-input";
interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Search: React.FC<Props> = (props) => {
  const { query, setQuery, setCurrentPage } = props;

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <InputGroup>
      <DebounceInput
        element={Input}
        minLength={2}
        debounceTimeout={1000}
        type="text"
        value={query}
        onChange={handleQueryChange}
        variant="flushed"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;
