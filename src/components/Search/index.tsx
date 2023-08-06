import { Box, Input, InputGroup, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { getImages } from "../../api";
import { DebounceInput } from "react-debounce-input";

const Search: React.FC = () => {
  // State to hold the query data
  const [query, setQuery] = useState<string>("");
  console.log(query);

  const response = getImages(query);
  console.log(response);

  return (
    <>
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
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {/* {response.map((image) => ( */}
        <Box
          w="100%"
          h="300px"
          bg="gray"
          backgroundPosition="center"
          backgroundSize="cover"
        ></Box>
        {/* ))} */}
      </SimpleGrid>
    </>
  );
};

export default Search;
