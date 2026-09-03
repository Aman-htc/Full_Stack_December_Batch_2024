
import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import { ArrowLeft, CurrencyDollar, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  applyCoupan,
} from "../store/slices/AddCartSlices";

const AddToCart = () => {
  const {
    cartItems,
    cartTotal,
    shippingCost,
    tax,
    discountAmount,
    discountParcent,
    coupanNotAllowed
  } = useSelector((state) => state.addcart);

  const dispatch = useDispatch();
  const [promo, setPromo] = useState("");

  return (
    <Container className="my-5">
      <h3 className="mb-5">Your Shopping Cart</h3>
      <hr />


      {cartItems.length === 0 && <h5>Your cart is empty</h5>}

      {cartItems.length > 0 && (


        <Row>
          {/* LEFT SIDE */}

          <Col lg={8}>
            <Row className="fw-bold border-bottom pb-2 mb-text-center">
                         
              <Col lg={5} className="text-start">Product Item</Col>
              <Col lg={2}>Price</Col>
              <Col lg={2}>Quantity</Col>
              <Col lg={2}>Total Price</Col>
              <Col lg={1}>Remove</Col>
            </Row>
            <Card className="mb-4">
              <Card.Body>
                {cartItems.map((item, index) => (
                  <Fragment key={index}>
                    <Row className="align-items-center mb-3">
                      <Col md={2} className=" ">
                        <Image
                          src={item.thumbnail}
                          rounded
                          fluid
                          className=" Image"
                        />
                      </Col>

                      <Col md={3}>
                        <h6>{item.title}</h6>
                      </Col>
                      <Col md={2}>
                        <p><CurrencyDollar />{item.price}</p>
                      </Col>

                      <Col md={2}>
                        <InputGroup size="sm">
                          <Button
                            variant="outline-secondary"
                            onClick={() =>
                              dispatch(decreaseQty(item.id))
                            }
                          >
                            -
                          </Button>

                          <Form.Control
                            value={item.quantity}
                            readOnly
                            className="text-center"
                          />

                          <Button
                            variant="outline-secondary"
                            onClick={() =>
                              dispatch(increaseQty(item.id))
                            }
                          >
                            +
                          </Button>
                        </InputGroup>
                      </Col>

                      <Col md={2} className="text-end">
                        <p className="fw-bold">
                          <CurrencyDollar/>{item.price.toFixed(2) * item.quantity}
                        </p>
                        
                      </Col>
                      <Col md={1}>
                      <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() =>
                            dispatch(removeFromCart(item.id))
                          }
                        >
                          <Trash />
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                  </Fragment>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <h5 className="mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span><CurrencyDollar/>{cartTotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span><CurrencyDollar/>{shippingCost}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Discount :{ discountParcent}%</span>
                  <span> <CurrencyDollar/>{discountAmount.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Tax (18%)</span>
                  <span>
                    <CurrencyDollar/>{((cartTotal * tax) / 100).toFixed(2)}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>
                    <CurrencyDollar/>
                    {(
                      cartTotal +
                      shippingCost +
                      (cartTotal * tax) / 100 -
                      discountAmount
                    ).toFixed(2)}
                  </strong>
                </div>

                <Button variant="primary" className="w-100">
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>

            {/* PROMO CODE */}
            <Card>

              <Card.Body>

                <h5 className="mb-3">Apply Promo Code</h5>

                <InputGroup>
                  <Form.Control
                    placeholder="Enter promo code"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(applyCoupan(promo))}
                  >
                    Apply
                  </Button>
                </InputGroup>
                <h6>{coupanNotAllowed}</h6>
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Button as={Link} to="/product" variant="outline-primary">
        <ArrowLeft /> Continue Shopping
      </Button>
    </Container>
  );
};

export default AddToCart;

