"use client";

import Link from "next/link";
import { Form, Table, InputGroup } from "react-bootstrap";
import { flexRender } from "@tanstack/react-table";
import { FiSearch, FiSliders, FiChevronDown, FiPlus } from "react-icons/fi";
import { LuChevronsUpDown } from "react-icons/lu";
import SmartPagination from "@/app/components/smartpagination";
import { FiMoreHorizontal } from "react-icons/fi";

export default function StudentsTable({
    title = "Table",
    table,
    columns,
    page,
    setPage,
    showSearch = true,
    showPagination = true,
    showHeaderDots = false,
    pageSize,
    setPageSize,
    pageCount,
    filteredData = [],
    globalFilter,
    setGlobalFilter,
    filters = [],
    searchPlaceholder = "Search",
    addButtonText,
    addButtonHref,
    emptyMessage = "No data found",
    onRowClick,
    headerAction,
}) {
    const handleSearchChange = (event) => {
        setGlobalFilter(event.target.value);
        setPage(1);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(Number(event.target.value));
        setPage(1);
    };

    return (
        <>
            <div className="students-table-top d-flex align-items-center justify-content-between gap-3 mb-3">
                <h2 className="card-heading mb-0 flex-shrink-0">{title}</h2>
                
                  {headerAction}

                <div className="student-table-actions d-flex align-items-center gap-2 ms-auto">
                    {showSearch && (
                        <InputGroup className="students-search">
                            <InputGroup.Text className="border-0 rounded-start-3">
                                <FiSearch size={18} />
                            </InputGroup.Text>

                            <Form.Control
                                size="sm"
                                value={globalFilter || ""}
                                placeholder={searchPlaceholder}
                                className="border-0 shadow-none px-0"
                                onChange={handleSearchChange}
                            />

                            <InputGroup.Text className="border-0 rounded-end-3">
                                <FiSliders size={18} />
                            </InputGroup.Text>
                        </InputGroup>
                    )}

                    {filters.map((filter, index) => (
                        <div className="students-status-select-wrap" key={index}>
                            <Form.Select
                                size="sm"
                                value={filter.value}
                                className="students-table-select shadow-none"
                                onChange={(event) => {
                                    filter.onChange(event.target.value);
                                    setPage(1);
                                }}
                            >
                                {filter.options.map((item) => (
                                    <option key={item.value || item} value={item.value || item}>
                                        {item.label || item}
                                    </option>
                                ))}
                            </Form.Select>

                            <FiChevronDown size={16} className="students-select-icon" />
                        </div>
                    ))}
                    {showHeaderDots && (
                        <button
                            type="button"
                            className="btn btn-light border-0 rounded-3 p-2 d-inline-flex align-items-center justify-content-center"
                        >
                            <FiMoreHorizontal size={18} />
                        </button>
                    )}

                    {addButtonText && addButtonHref && (
                        <Link
                            href={addButtonHref}
                            className="btn btn-secondary add-student-btn flex-shrink-0"
                        >
                            <FiPlus size={16} />
                            {addButtonText}
                        </Link>
                    )}
                </div>
            </div>

            <div className="table-responsive flex-grow-1">
                <Table hover className="align-middle students-table mb-0">
                    <thead className="table-light">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className={header.column.getCanSort() ? "cursor-pointer" : ""}
                                    >
                                        <span className="d-inline-flex align-items-center gap-1">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}

                                            {header.column.getCanSort() && (
                                                <LuChevronsUpDown size={14} />
                                            )}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row) => (

                                <tr
                                    key={row.id}
                                    onClick={() => {

                                        onRowClick?.(row.original.StudentID);
                                    }}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-5">
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

            {showPagination && (
                <div className="students-pagination-row d-flex align-items-center justify-content-between flex-wrap gap-3 mt-3">
                    <div className="d-flex align-items-center gap-2">
                        <span className="body-xs-reg text-secondary-dark">Show</span>

                        <Form.Select
                            size="sm"
                            value={pageSize}
                            className="students-page-size-select"
                            onChange={handlePageSizeChange}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </Form.Select>

                        <span className="body-xs-reg text-secondary-dark">
                            of {filteredData.length} results
                        </span>
                    </div>

                    <SmartPagination page={page} setPage={setPage} totalPages={pageCount} />
                </div>
            )}
        </>
    );
}
