import { Container, Flex } from "@chakra-ui/react";
import View from "../components/View";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { ImagesInterface } from "../schema";

export const Root = () => {
  // State to hold the response data
  const [images, setImages] = useState<ImagesInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // API call function
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos?page=2&client_id=G7alFg4s_Rx4pY1FFPsje98B40ZYtA0zYQ79zmbQlO8"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const imagesData: ImagesInterface[] = await response.json();
        setImages(imagesData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);
  return (
    <Container p="4rem" maxW="container.xl">
      <Flex direction="column" gap="2rem">
        <Search />
        <View images={images} />
      </Flex>
    </Container>
  );
};
