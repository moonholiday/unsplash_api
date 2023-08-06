import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { getImages } from "../../api";

const Search = () => {
  // State to hold the query data
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
  };

  console.log(query);
  const response = getImages(query);
  console.log(response);

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          variant="flushed"
          placeholder="Search"
        />
      </InputGroup>
    </Stack>
  );
};

export default Search;
export { response };
