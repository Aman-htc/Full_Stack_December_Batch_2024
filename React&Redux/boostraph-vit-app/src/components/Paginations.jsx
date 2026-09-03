// //import React from 'react';
// import { useState } from 'react';
// import Pagination from 'react-bootstrap/Pagination';

// function Paginations() {
//   let active = 2;
//   let items = [];

//   for (let number = 1; number <= 5; number++) {
//     items.push(
//       <Pagination.Item key={number} active={number === active}>
//         {number}
//       </Pagination.Item>
//     );
//   }
//    const[aman, setAman]=useState()




//   return (


//     <div>
//       counter: {aman}

//       <h3 className='text-primary'>Pagination</h3>
//       <hr />
//       <h4> Basic Pagination </h4>
//       <Pagination   onClick={() => setAman(1)}>{items}</Pagination>

//       <br />

//       <h4> Large Pagination </h4>
//       <Pagination size="lg">{items}</Pagination>

//       <br />

//       <h4> Small Pagination </h4>
//       <Pagination size="sm">{items}</Pagination>
//     </div>
//   );
// }

// export default Paginations;


import { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

function Paginations() {
  const [count, setCount] = useState(3);

  const totalPages = 5;

  const handleNext = () => {
    if (count < totalPages) {
      setCount(count + 1);
    }
  };

  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleFirst = () => {
    setCount(1);
  };

  const handleLast = () => {
    setCount(totalPages);
  };


  return (

    <>

     <Breadcrumb className="mb-5">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item > Non Interactive Components</Breadcrumb.Item>
        <Breadcrumb.Item  active>Pagination</Breadcrumb.Item>
      </Breadcrumb>
      <hr />



    


      <h3 className="text-primary mb-3">Pagination</h3>

      <h4 className="mb-3">Active page: {count} </h4>

      <Pagination>
        <Pagination.First onClick={handleFirst} />
        <Pagination.Prev onClick={handlePrev} />

        {[1, 2, 3, 4, 5].map((num) => (
          <Pagination.Item
            key={num}
            className={count === num ? "active-page" : ""}
            onClick={() => setCount(num)}
          >
            {num}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={handleNext} />
        <Pagination.Last onClick={handleLast} />
      </Pagination>
    </>
  );
}

export default Paginations;