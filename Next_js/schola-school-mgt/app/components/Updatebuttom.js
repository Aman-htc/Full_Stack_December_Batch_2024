


import React from "react";
import { Image, Button } from "react-bootstrap";

const Updatebutton = () => {
  return (
    <div className="px-2 mt-auto">

      <div className="position-relative bg-primary rounded-4 text-center px-3 pt-5 pb-4 shadow-sm">

        {/* Floating Image */}
        <div className="position-absolute top-0 start-50 translate-middle">
          <Image
            src="/image/updateimage.svg"
            alt="update"
            width={125}
            height={125}
            className="img-fluid"
          />
        </div>

        {/* Title */}
        <h6 className="text-danger-subtle mt-12 mb-2 ">
          New Tools Available
        </h6>

        {/* Description */}
        <p className="text-danger cap-lg-med mb-3 px-2">
          Smarter updates for easier school management
        </p>

        {/* Button */}
        <Button
          className="w-100  text-danger-subtle btn-lg bg-secondary rounded-3 border-0"
       
        >
          See Updates
        </Button>

      </div>

    </div>
  );
};

export default Updatebutton;