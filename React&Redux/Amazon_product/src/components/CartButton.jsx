import React, { Fragment } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../store/slices/AddCartSlices";

const CartButton = ({ product }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.addcart);

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addTocart(product));
  };

  const handleIncrease = () => {
    dispatch(increaseQty(product.id));
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(decreaseQty(product.id));
    }
  };

  return (
    <Fragment>
      {cartItem ? (
        <Form className="input-w">
          <InputGroup size="sm">
            <Button variant="outline-secondary" onClick={handleDecrease}>
              -
            </Button>

            <Form.Control
              type="text"
              value={cartItem.quantity}
              readOnly
              className="text-center text-dark"
            />

            <Button variant="outline-secondary" onClick={handleIncrease}>
              +
            </Button>
          </InputGroup>
        </Form>
      ) : (
        <Button
          size="sm"
          variant="outline-primary"
          className="tital"
          onClick={handleAddToCart}
        >
          add to cart
        </Button>
      )}
    </Fragment>
  );
};

export default CartButton;
