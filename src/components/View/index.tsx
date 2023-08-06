import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ImagesInterface } from "../../schema";

interface Props {
  images: ImagesInterface[];
}

const View: React.FC<Props> = (props) => {
  const { images } = props;
  console.log(images);

  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      {images?.map((item) => (
        <Box
          w="100%"
          h="300px"
          backgroundImage={`url(${item?.urls?.regular})`}
          backgroundPosition="center"
          backgroundSize="cover"
        ></Box>
      ))}
    </SimpleGrid>
  );
};

export default View;
