import { ChakraProvider } from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { Dispatch, SetStateAction } from "react";

interface Props {
  pageCount: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const ChakraPagination: React.FC<Props> = (props) => {
  const { pageCount, setPage } = props;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: pageCount,
    initialState: { currentPage: 1, pageSize: 15 },
    limits: {
      outer: 2,
      inner: 2,
    },
  });
  console.log("currentPage", currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };

  return (
    <ChakraProvider>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <PaginationContainer>
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup>
            {pages.map((page: number) => (
              <PaginationPage key={`pagination_page_${page}`} page={page} />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </ChakraProvider>
  );
};

export default ChakraPagination;
