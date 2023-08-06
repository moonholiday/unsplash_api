import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import View from "../components/View";
import Search from "../components/Search";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Root: React.FC = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  return (
    <Container p="4rem" maxW="container.xl">
      <Flex direction="column" gap="2rem">
        <Search />
        <View />
      </Flex>
    </Container>
  );
};

export default Root;
