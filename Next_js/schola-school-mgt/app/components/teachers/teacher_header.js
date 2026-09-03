"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import { ArrowUpDown, Filter, Plus, Search } from "lucide-react";
import { teacherFilters } from "@/app/data";
import DropdownBtn from "../dropdown";
import SearchBox from "../searchbox";
import Link from "next/link";
import { getDepartments } from "@/services/teacherService";

const TeacherHeader = ({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort
}) => {

  
  const [departments, setDepartments] = useState([]);
  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data.data);

  };
  useEffect(() => {
    fetchDepartments()

  }, [])


  return (
    <Row className="align-items-center mb-3">

      {/* TITLE */}
      <Col xs={3} >
        <h5 className="h6-alt text-danger-subtle mt-5">
          Teachers
        </h5>
      </Col>

      {/* CONTROLS */}
      <Col xs={9} >
        <div className="d-flex flex-wrap gap-2 justify-content-md-end align-items-center">

          {/* SEARCH */}
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={teacherFilters.searchPlaceholder}
            width="223px"
          />

          {/* FILTER */}
          <div className="d-none d-md-block">

           
            <DropdownBtn
              text="Filter"
              value={filter}
              setValue={setFilter}
              options={[
                { label: "All department", value: "all" },
                ...departments.map((dept) => ({
                  label: dept.DepartmentName,
                  value: String(dept.DepartmentID),
                })),
              ]}
              icon={Filter}
            />
          </div>

          {/* SORT */}

          <span className="text-dangere d-none d-md-block">Sort by:</span>
          <div className="d-none d-md-block">

            <DropdownBtn

              text="Sort"
              value={sort}
              setValue={setSort}
              options={teacherFilters.sortOptions}
              icon={ArrowUpDown}

            />
          </div>

          {/* ADD BUTTON */}
          <Link href="/teachers/teacherform" className="text-decoration-none">
            <Button className="bg-secondary border-0 btn-sm p-2 text-danger-subtle d-flex align-items-center gap-2">
              <Plus size={16}  className="d-block d-lg-none"/>
              <span className="d-none d-lg-block ">Add Teacher</span>
            </Button>
          </Link>

        </div>
      </Col>

    </Row>
  );
};

export default TeacherHeader;


