import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AddCardContext } from "../contexts/Context";
import { useContext, useState } from "react";



const { cardsState, cardsDispatch } = useContext(AddCardContext);


function AddToCardList() {




// const [countitems, setCount] = useState(1);

// const additem = () => {
//   setCount(prev => prev + 1);
// };

// const subitem = () => {
//   setCount(prev => (prev > 1 ? prev - 1 : 1));
// };

const totalPrice = cardsState.cardsItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);




if (cardsState.cardsItems.length === 0) {
  return <h4>No items in Cart list</h4>;
}



   <Container className="my-4">
  <Row className="g-4">


    <Col lg={8}>
      <div className="shadow-lg rounded-2 p-5">


        <Row className="border-bottom mb-3 pb-2">
          <Col>
            <h2>Shopping Cart</h2>
          </Col>
          <Col className="text-end">
            <h2>{cardsState.cardsItems.length} Items</h2>
          </Col>
        </Row>


        <Row className="fw-bold border-bottom pb-2 mb-3 text-center">
          <Col lg={5} className="text-start">Product Item</Col>
          <Col lg={2}>Quantity</Col>
          <Col lg={2}>Price</Col>
          <Col lg={2}>Total Price</Col>
          <Col lg={1}>Remove</Col>
        </Row>


        {cardsState.cardsItems.map((item) => (
          <Row
            key={item.id}
            className="align-items-center border-bottom mb-3 pb-3 text-center"
          >

            <Col lg={5} className="d-flex align-items-center gap-2 text-start">
              <Image
                src={item.image}
                fluid
                style={{ width: "60px" }}
              />
              <span>{item.name}</span>
            </Col>


            <Col lg={2} className="d-flex justify-content-center align-items-center">
              <Button
                className="fs-4 p-0 border-0 bg-light"
                bsPrefix=" "
                onClick={() =>
                  cardsDispatch({ type: "INCRESE_QUANTITY", payload: item.id })
                }
              >
                -
              </Button>

              <strong className="mx-2 border px-2">{item.quantity}</strong>

              <Button
                className="fs-4 p-0 border-0 bg-light"
                bsPrefix=" "
                onClick={() =>
                  cardsDispatch({ type: "ADD_QUANTITY", payload: item.id })
                }
              >
                +
              </Button>
            </Col>

            {/* Price */}
            <Col lg={2}>₹{item.price.toFixed(1)}</Col>

            {/* Total */}
            <Col lg={2}>
              ₹{(item.price * item.quantity).toFixed(1)}
            </Col>

            {/* Remove */}
            <Col lg={1}>
              <Button
                variant="danger"
                size="sm"
                onClick={() =>
                  cardsDispatch({
                    type: "REMOVE_FROM_CARD",
                    payload: item.id,
                  })
                }
              >
                Remove
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </Col>


    <Col lg={4}>
      <div className="bg-success text-white p-3 rounded-2">
        <h3>Order Summary</h3>
        <h5>Price Details</h5>
        <hr />
        <p>Total Items: {cardsState.cardsItems.length}</p>
        <h6>Grand Total: ₹{totalPrice.toFixed(1)}</h6>
        <Button variant="light" className="w-100 mt-2">
          Checkout
        </Button>
      </div>
    </Col>

  </Row>
</Container>


//   return (
//     <>



//       <Container className="my-4">
//         <Row className="g-4">


//           <Col lg={8}>
//             <div className="shadow-lg rounded-2 p-5">


//               <Row className="border-bottom mb-3 pb-2">
//                 <Col>
//                   <h2>Shopping Cart</h2>
//                 </Col>
//                 <Col className="text-end">
//                   <h2> Items</h2>
//                 </Col>
//               </Row>

//               <Row className="fw-bold border-bottom pb-2 mb-3 text-center">
//                 <Col lg={5} className="text-start">Product Item</Col>
//                 <Col lg={2}>Quantity</Col>
//                 <Col lg={2}>Price</Col>
//                 <Col lg={2}>Total Price</Col>
//                 <Col lg={1}>Remove</Col>
//               </Row>

//               <Row className="align-items-center border-bottom mb-3 pb-3 text-center">
//                 <Col lg={5} className="d-flex align-items-center gap-2 text-start">
//                   <Image
//                     src="https://m.media-amazon.com/images/I/61tD0bZGxXL.jpg"
//                     fluid
//                     style={{ width: "60px" }}
//                   />
//                   <span> Bluetooth</span>
//                 </Col>
//                 <Col>
//                   <div className="d-flex  border justify-content-center border-w p-1 rounded-5">
//                     <h6 className="me-3">
//                       -
//                     </h6>
//                     <h6>
//                       2
//                     </h6>
//                     <h6 className="ms-3">
//                       +
//                     </h6>

//                   </div>
//                 </Col>
//                 <Col lg={2}>
//                   <p>1300</p>
//                 </Col>


//                 <Col lg={1} className="">
//                   <p>2600</p>
//                 </Col>
//                 <Col lg={2} className="">
//                   <Button>
//                     Remove

//                   </Button>
//                 </Col>







//               </Row>
//               <Row className="align-items-center border-bottom mb-3 pb-3 text-center">
//                 <Col lg={5} className="d-flex align-items-center gap-2 text-start">
//                   <Image
//                     src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6udDgy8dVre4qoyup5JY-Tja4JwvPiwDBJ9Qu5DIcCi3dtZDGLi76ykE7DbseVpogbywYCj2VnXNC838HloNKdpy4YxdSsVFmlrbU4B_p6ikhnT_fNa2thQ"
//                     fluid
//                     style={{ width: "60px" }}
//                   />
//                   <span> Bluetooth</span>
//                 </Col>
//                 <Col>
//                   <div className="d-flex border justify-content-center border-w p-1 rounded-5">
//                     <h6 className="me-3">
//                       -
//                     </h6>
//                     <h6>
//                       2
//                     </h6>
//                     <h6 className="ms-3">
//                       +
//                     </h6>

//                   </div>
//                 </Col>
//                 <Col lg={2}>
//                   <p>1300</p>
//                 </Col>


//                 <Col lg={1} className="">
//                   <p>2600</p>
//                 </Col>
//                 <Col lg={2} className="">
//                   <Button>
//                     Remove

//                   </Button>
//                 </Col>







//               </Row>
//               <Row className="align-items-center border-bottom mb-3 pb-3 text-center">
//                 <Col lg={5} className="d-flex align-items-center gap-2 text-start">
//                   <Image
//                     src="https://m.media-amazon.com/images/I/61tD0bZGxXL.jpg"
//                     fluid
//                     style={{ width: "60px" }}
//                   />
//                   <span> Bluetooth</span>
//                 </Col>
//                 <Col>
//                   <div className="d-flex  border justify-content-center border-w p-1 rounded-5">
//                     <h6 className="me-3">
//                       -
//                     </h6>
//                     <h6>
//                       2
//                     </h6>
//                     <h6 className="ms-3">
//                       +
//                     </h6>

//                   </div>
//                 </Col>
//                 <Col lg={2}>
//                   <p>1300</p>
//                 </Col>


//                 <Col lg={1} className="">
//                   <p>2600</p>
//                 </Col>
//                 <Col lg={2} className="">
//                   <Button>
//                     Remove

//                   </Button>
//                 </Col>







//               </Row>

//             </div>
//           </Col>
//           <Col lg={4}>
//             <div className="bg-success text-white p-3 rounded-2">
//               <h3>Order Summary</h3>
//               <h5>Price Details</h5>
//               <hr />
//               <p>Total Items: 3</p>
//               <h6>Grand Total: ₹ 7800/</h6>
//               <Button variant="light" className="w-100 mt-2">
//                 Checkout
//               </Button>
//             </div>
//           </Col>

//         </Row>


//       </Container>
//     </>
//   )


}

export default AddToCardList;
