import React from "react";
import { Button } from "react-bootstrap";

const SmartPagination = ({ page, setPage, totalPages }) => {

  const getPages = () => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (page > 3) pages.push("...");

      for (let i = page - 1; i <= page + 1; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }

      if (page < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mt-4 flex-wrap">

      {/* Prev */}
      <Button
        size="sm"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-3 px-3"
        variant="light"
      >
        ‹
      </Button>

      {/* Pages */}
      {getPages().map((p, i) => (
        <Button
          key={i}
          size="sm"
          disabled={p === "..."}
          onClick={() => typeof p === "number" && setPage(p)}
          className="rounded-3 px-3 border-0"
          style={{
            backgroundColor:
              p === page ? "#e9b3d6" : p === "..." ? "transparent" : "#d9edf2",
            color: "#000",
            cursor: p === "..." ? "default" : "pointer"
          }}
        >
          {p}
        </Button>
      ))}

      {/* Next */}
      <Button
        size="sm"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded-3 px-3"
        variant="light"
      >
        ›
      </Button>

    </div>
  );
};

export default SmartPagination;

