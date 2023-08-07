import React, { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "./api";
import Search from "./components/Search";
import View from "./components/View";

const App: React.FC = () => {
  // State to hold the query data
  const [query, setQuery] = useState<string>("");

  const { data: images, isLoading } = useQuery({
    queryKey: ["images", query],
    queryFn: () => getImages(query),
  });

  return (
    <Container p="4rem" maxW="container.xl">
      <Flex direction="column" gap="2rem">
        <Search query={query} setQuery={setQuery} />
        <View images={images?.results} isLoading={isLoading} />
      </Flex>
    </Container>
  );
};

export default App;
