import React from "react";
import { Button } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

const FilterButton = ({ text }) => {
  return (
    <Button
      bsPrefix=" "
      size="sm"
      className="
        d-inline-flex 
        align-items-center 
        justify-content-between 
        bg-color 
        gray-100 
        Button-Small 
        gap-2 
        border-color 
        rounded 
        px-3 
        py-2 
       
      "
      style={{ minWidth: "fit-content", maxWidth: "150px" }}
    >
      <span className="text-truncate" style={{ maxWidth: "calc(100% - 20px)" }}>
        {text}
      </span>
      <ChevronDown color="#000" size={16} />
    </Button>
  );
};

export default FilterButton;
