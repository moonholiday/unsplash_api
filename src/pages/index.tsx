import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Search from "../components/Search";

const Root: React.FC = () => {
  return (
    <Container p="4rem" maxW="container.xl">
      <Flex direction="column" gap="2rem">
        <Search />
      </Flex>
    </Container>
  );
};

export default Root;
