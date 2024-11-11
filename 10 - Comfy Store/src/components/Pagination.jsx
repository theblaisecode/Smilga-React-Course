import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function Pagination() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const pageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            pageChange(prevPage);
          }}>
          Prev
        </button>

        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => {
                let nextPage = page + 1;
                if (nextPage > pageCount) nextPage = 1;
                pageChange(nextPage);
              }}>
              {pageNumber}
            </button>
          );
        })}

        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            pageChange("next");
          }}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Pagination;