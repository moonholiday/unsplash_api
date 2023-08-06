import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ImagesInterface } from "../../schema";

interface Props {
  images: ImagesInterface[];
}

const View: React.FC<Props> = (props) => {
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
