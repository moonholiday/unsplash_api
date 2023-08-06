import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ImagesInterface } from "../../schema";

const View: React.FC = () => {
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
