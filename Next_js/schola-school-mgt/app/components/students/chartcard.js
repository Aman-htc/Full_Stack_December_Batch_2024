// "use client";

import { useEffect } from "react";
// import { Dropdown } from "react-bootstrap";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

// export default function ChartCard({
//     title,
//     buttonText,
//     dropdownOptions = [],
//     defaultDropdownValue = "",
//     options,
//     series,
//     type = "bar",
//     height = 245,
//     chartClassName = "",
// }) {
//     const [selectedDropdown, setSelectedDropdown] = useState(
//         defaultDropdownValue || buttonText || dropdownOptions[0] || ""
//     );

//     const hasDropdown = dropdownOptions.length > 0;

//     return (
//         <Card className="border-0 rounded-4 shadow-sm bg-white h-100 chart-card">
//             <Card.Body>
//                 <div className="chart-card-header d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
//                     <h2 className="card-heading mb-0">{title}</h2>

//                     {hasDropdown ? (
//                         <Dropdown align="end">
//                             <Dropdown.Toggle
//                                 as={Button}
//                                 variant="primary"
//                                 size="sm"
//                                 className="rounded-3 d-inline-flex align-items-center gap-2 chart-filter-btn"
//                             >
//                                 {selectedDropdown}
//                                 <FiChevronDown size={14} />
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu className="border-0 shadow-sm rounded-3">
//                                 {dropdownOptions.map((item) => (
//                                     <Dropdown.Item
//                                         key={item}
//                                         active={selectedDropdown === item}
//                                         onClick={() => setSelectedDropdown(item)}
//                                     >
//                                         {item}
//                                     </Dropdown.Item>
//                                 ))}
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     ) : (
//                         buttonText && (
//                             <Button
//                                 variant="primary"
//                                 size="sm"
//                                 className="rounded-3 d-inline-flex align-items-center gap-2 chart-filter-btn"
//                             >
//                                 {buttonText}
//                                 <FiChevronDown size={14} />
//                             </Button>
//                         )
//                     )}
//                 </div>

//                 <div className={`chart-card-body ${chartClassName}`}>
//                     {options && series && (
//                         <Chart
//                             options={options}
//                             series={series}
//                             type={type}
//                             height={height}
//                         />
//                     )}
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// }


export default function ChartCard({
  title,
  dropdownOptions = [],
  defaultDropdownValue = "",
  onDropdownChange,
  options,
  series,
  type = "bar",
  height = 245,
  chartClassName = "",
}) {
  const [selectedDropdown, setSelectedDropdown] = useState(
    defaultDropdownValue || dropdownOptions[0] || ""
  );

  useEffect(() => {
    setSelectedDropdown(defaultDropdownValue);
  }, [defaultDropdownValue]);

  const handleChange = (item) => {
    setSelectedDropdown(item);
    if (onDropdownChange) onDropdownChange(item);
  };

  return (
    <Card className="border-0 rounded-4 shadow-sm bg-white h-100">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <h2 className="card-heading">{title}</h2>

          <Dropdown>
            <Dropdown.Toggle>{selectedDropdown}</Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdownOptions.map((item) => (
                <Dropdown.Item
                  key={item}
                  active={selectedDropdown === item}
                  onClick={() => handleChange(item)}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className={chartClassName}>
          {options && series && (
            <Chart options={options} series={series} type={type} height={height} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}