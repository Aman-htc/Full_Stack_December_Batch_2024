
"use client";

import Link from "next/link";

function Breadcrumb({ items = [] }) {

  return (

    <nav aria-label="breadcrumb ">

      <ol className="breadcrumb ms-4">

        {items.map((item, index) => {

          const isLast = index === items.length - 1;

          return (

            <li
              key={index}
              className={`breadcrumb-item   ${
                isLast ? "active text-danger  body-lg-med " : ""
              }`}
              aria-current={isLast ? "page" : undefined}
            >

              {isLast ? (

                <span className="text-danger">
                  {item.label}
                </span>

              ) : (

                <Link
                  href={item.path}
                  className="text-warning text-decoration-none  body-lg-med"
                >
                  {item.label}
                </Link>

              )}

            </li>

          );
        })}

      </ol>

    </nav>
  );
}

export default Breadcrumb;