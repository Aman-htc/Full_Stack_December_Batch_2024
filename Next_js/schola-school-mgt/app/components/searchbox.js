

"use client";

import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { Search } from "lucide-react";

const SearchBox = ({
  value,
  onChange,
  placeholder = "Search...",
  

  rightIcon,         
  onRightIconClick 
}) => {
  return (
    <InputGroup
      className="rounded-pill input_size px-2 bg-light align-items-center"
      style={{  height: "40px" }}
    >
      {/* LEFT ICON (fixed) */}
      <InputGroup.Text className="bg-transparent border-0">
        <Search size={16} />
      </InputGroup.Text>

      {/* INPUT */}
      <Form.Control
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-0 bg-transparent shadow-none"
      />

      {/* RIGHT ICON (optional) */}
      {rightIcon && (
        <InputGroup.Text
          className="bg-transparent border-0 text-danger"
          style={{ cursor: onRightIconClick ? "pointer" : "default" }}
          onClick={onRightIconClick}
        >
          {rightIcon}
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};

export default SearchBox;