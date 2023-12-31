import { ChakraProvider, Stack } from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  pageCount: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const ChakraPagination: React.FC<Props> = (props) => {
  const { pageCount, setPage, page } = props;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: pageCount,
    initialState: { currentPage: page, pageSize: 15 },
    limits: {
      outer: 2,
      inner: 2,
    },
  });
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return (
    <ChakraProvider>
      <Stack>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="space-between"
            p={4}
            w="full"
          >
            <PaginationPrevious>Previous</PaginationPrevious>
            <PaginationPageGroup>
              {pages.map((page: number) => (
                <PaginationPage
                  w={10}
                  m={2}
                  bg="gray.200"
                  key={`pagination_page_${page}`}
                  page={page}
                  fontSize="lg"
                  _hover={{
                    bg: "gray.400",
                  }}
                  _current={{
                    bg: "gray.600",
                    fontSize: "lg",
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext>Next</PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Stack>
    </ChakraProvider>
  );
};

export default ChakraPagination;
