
import { useState } from 'react';

export const usePagination = (itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return { currentPage, setCurrentPage, nextPage, prevPage };
};