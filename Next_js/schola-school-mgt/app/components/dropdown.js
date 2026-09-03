
"use client";

import { Dropdown } from "react-bootstrap";

function DropdownBtn({
  
  text1,
  text,
  icon: Icon,   
  value,
  setValue,
  options = [],
  options1=[]
}) {

  const selected = options?.find((opt) => opt.value === value);
  const selected1 = options1?.find((opt) => opt.value === value);

  return (
    <Dropdown>
      <Dropdown.Toggle
        
        className="bg-primary border-0 text-bark btn-sm py-2 rounded-2 d-flex align-items-center gap-2"
      >
        {/* ICON */}
        <span>{Icon && <Icon size={16} />}</span>
        

       {/* <span>{text1}</span> */}
        <span className="d-none d-lg-block">{selected?.label || text}</span>

        <span className=" body-lg-reg">{selected1?.label || text1}</span>
        
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-2 shadow-sm border-0 rounded-3">

        {options.map((item,index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setValue && setValue(item.value)}
            className="rounded-2 px-3 py-2 mb-1 d-flex align-items-center justify-content-between"
            style={{
           
              backgroundColor: value === item.value ? "#f3e8ff" : "bg-light"
            }}
          >
            <span>{item.label}</span>

            {value === item.value && (
              <span style={{ fontSize: "12px" }}></span>
            )}
          </Dropdown.Item>
        ))}

      </Dropdown.Menu>
      
      <Dropdown.Menu className="p-2 shadow-sm border-0 rounded-3">

        {options1.map((item,index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setValue && setValue(item.value)}
            className="rounded-2 px-3 py-2 mb-1 d-flex align-items-center justify-content-between"
            style={{
           
                backgroundColor: value === item.value ? "#f3e8ff" : "transparent",
            }}
          >
            <span>{item.label}</span>

            {value === item.value && (
              <span style={{ fontSize: "12px" }}></span>
            )}
          </Dropdown.Item>
        ))}

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBtn;