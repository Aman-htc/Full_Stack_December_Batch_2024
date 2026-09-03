import { useContext } from "react";
// import { WishlistContext } from "../Context";
import {  Button, Row, Col, Image } from "react-bootstrap";
import { WishlistContext } from "../contexts/Context";

function AddWishList() {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  if (wishlistState.wishlistItems.length === 0) {
    return <h4>No items in wishlist</h4>;
  }

  return (
    <>
      <h3>My Wishlist</h3>

      {wishlistState.wishlistItems.map((item) => (
        <Row className="align-items-center  rounded-2 shadow-lg mb-3 ">
          <Col sm={6}>
            <Image src={item.thumbnail} className="thamneail" />
            <h6>{item.title}</h6>
            <p> price: {item.price}</p>

          </Col>
          <Col className="text-end">
            <Button
              variant="danger"
              size="sm"
              onClick={() =>
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: item.id,
                })
              }
            >
              Remove
            </Button>
          </Col>
        </Row>



      ))}





    </>
  );
}

export default AddWishList;
