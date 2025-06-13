import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Options } from "nuqs";
export function PaginationDemo({
  totalPages,
  setPage,
  page,
  totalCount,
}: {
  totalPages: number;
  setPage: (
    value: number | ((old: number) => number | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
  page: number;
  totalCount: number;
}) {
  const showDisplayePage = Math.min(totalPages);

  const displayPages = Array.from(
    { length: showDisplayePage },
    (_, index) => index + 1
  );
  const handleSetPage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const handlePlus = () => {
    setPage(page + 1);
  };
  const handleMinus = () => {
    setPage(page - 1);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handleMinus} href="#" />
        </PaginationItem>
        {displayPages.map((showPage, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={showPage === page}
              href="#"
              onClick={() => handleSetPage(showPage)}
            >
              {showPage}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem></PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={totalCount === page}
            href="#"
            onClick={() => handleSetPage(totalCount)}
          >
            {totalCount}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={handlePlus} href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
