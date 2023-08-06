import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const View: React.FC = () => {
  const images = 0;
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      <Box
        w="100%"
        h="300px"
        bg="gray"
        backgroundPosition="center"
        backgroundSize="cover"
      ></Box>
    </SimpleGrid>
  );
};

export default View;
