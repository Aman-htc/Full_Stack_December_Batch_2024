import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AddCardContext } from "../contexts/Context";
import { useContext, useState } from "react";


function AddToCardList() {
  const { cardsState, cardsDispatch } = useContext(AddCardContext);






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


  return (
    <Container >

      <div className="d-flex  justify-content-between">
        <div>
          <div className="shadow-lg rounded-2 p-3   widthcard">
            <div className="d-flex justify-content-between border-3 mb-3  border-bottom ">
              <h2>Shopping Cart</h2>
              <h2>{cardsState.cardsItems.length} Items</h2>
            </div>

            
            <div
              className="d-flex fw-bold   justify-content-between  border-bottom pb-2 mb-3"
            >
              <div className="w-50"> Product Item</div>
              <div >Quantity</div>
              <div >Price</div>
              <div>Total Price</div>
              <div >Remove</div>
            </div>

          
            {cardsState.cardsItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center border-bottom justify-content-between mb-3"

              >
              
                <div
                  className="d-flex align-items-center gap-2 w-50"
                >
                  <Image
                    src={item.thumbnail}
                    className="img-fluid thamneail"
                    
                  />
                  <span>{item.title}</span>
                </div>

                
                <div
                  className="d-flex align-items-center justify-content-center"
                  
                >
                  <Button
                    className="fs-4 p-0 border-0 bg-light"
                    bsPrefix=" "
                   onClick={()=>{cardsDispatch({type:"INCRESE_QUANTITY",payload:item.id})}}
                  >
                    -
                  </Button>

                  <strong className="mx-2 border p-1">{item.quantity}</strong>

                  <Button
                    className="fs-4 p-0 border-0 bg-light"
                    bsPrefix=" "
                    onClick={() => cardsDispatch({ type: "ADD_QUANTITY", payload: item.id })}
                  >
                    +
                  </Button>
                </div>

                
                <div >
                  ₹{(item.price).toFixed(1)}
                </div>
                <div >
                  ₹{(item.price* item.quantity).toFixed(1)}
                </div>

              
                <div >
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
                </div>
              </div>
            ))}
          </div>



        </div>



        <div className="bg-success text-white p-3 totalpricewidth">
          <h3>Order Summary</h3>
          <h5>Price Details</h5>
          <hr />
          <p>Total Items: {cardsState.cardsItems.length}</p>
          <h6>Grand Total: ₹{ totalPrice.toFixed(1)}</h6>
          <Button >Checkout</Button>
        </div>

      </div>

    </Container>
  );
}

export default AddToCardList;
