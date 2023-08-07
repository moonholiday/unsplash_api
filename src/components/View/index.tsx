import { Box, Grid, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import { ImagesInterface } from "../../schema";

interface Props {
  images: ImagesInterface[];
  isLoading?: boolean;
}

const View: React.FC<Props> = (props) => {
  const { images, isLoading } = props;

  if (isLoading) {
    return (
      <Grid placeItems="center" width="container.xl" height="80vh" p={4}>
        <Spinner size="lg" />
      </Grid>
    );
  }

  if (!images?.length) {
    return <div>Search a query!!</div>;
  }
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      {images?.map((item) => (
        <Box
          key={item.id}
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
