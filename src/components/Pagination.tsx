interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pageNumbers: (number | string)[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage === 1) {
      pageNumbers.push(1, 2, 3, "...", totalPages);
    } else if (currentPage === totalPages) {
      pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else if (currentPage >= 2 && currentPage <= totalPages - 1) {
      if (currentPage === 2) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage === totalPages - 1) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage === 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage === totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
  }

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      window.scrollTo(0, 0);
      onPageChange(page);
    }
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      {currentPage > 1 && (
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className="relative w-[35px] h-[35px] flex justify-center items-center cursor-pointer
          after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:border-r after:border-t after:border-solid after:border-black dark:after:border-(--color-white) after:rotate-[-135deg] hover:after:border-(--color-light-hover) after:duration-300
          "
        ></div>
      )}
      {pageNumbers.map((number, index) => (
        <div
          key={index}
          onClick={() => handlePageChange(number)}
          className={` w-[35px] h-[35px] flex justify-center items-center duration-300 ${
            currentPage === number ? "text-[20px] font-bold" : ""
          } ${number === "..." ? "disabled" : ""}`}
          style={{
            pointerEvents: number === "..." ? "none" : "auto",
            cursor: number === "..." ? "default" : "pointer",
          }}
        >
          {number}
        </div>
      ))}
      {currentPage < totalPages && (
        <div
          onClick={() => handlePageChange(currentPage + 1)}
          className="relative w-[35px] h-[35px] flex justify-center items-center cursor-pointer
          after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:border-r after:border-t after:border-solid after:border-black dark:after:border-(--color-white) after:rotate-[45deg] hover:after:border-(--color-light-hover) after:duration-300
          "
        ></div>
      )}
    </div>
  );
}
