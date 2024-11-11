import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "next/navigation";

export default function PaginatedItems({ totalColleges, searchParams }) {
  const router = useRouter();

  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalColleges / itemsPerPage);

  function updateParams(page) {
    const params = new URLSearchParams({
      ...searchParams,
      page: page,
    });
    router.push(`/college/?${params.toString()}`);
  }

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    updateParams(selectedPage);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        activeClassName="active-pagination"
        containerClassName="react-paginate"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </div>
  );
}
