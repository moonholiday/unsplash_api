import React, { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "./api";
import Search from "./components/Search";
import View from "./components/View";
import { ImagesListInterface } from "./schema";
import ChakraPagination from "./components/ChakraPagination";

const App: React.FC = () => {
  // State to hold the query data
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data: images, isLoading } = useQuery<ImagesListInterface>({
    queryKey: ["images", query, page],
    queryFn: () => {
      const data: any = { page: page, per_page: 15 };
      if (query) {
        data.query = query;
      }
      return getImages(data);
    },
  });

  return (
    <Container p="4rem" maxW="container.xl">
      <Flex direction="column" gap="2rem">
        <Search query={query} setQuery={setQuery} setCurrentPage={setPage} />
        {images?.results?.length && (
          <View images={images?.results} isLoading={isLoading} />
        )}
        <ChakraPagination
          page={page}
          pageCount={images?.total_pages!}
          setPage={setPage}
        />
      </Flex>
    </Container>
  );
};

export default App;
