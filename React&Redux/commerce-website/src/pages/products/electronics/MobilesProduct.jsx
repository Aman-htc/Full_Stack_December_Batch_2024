import React, { useContext } from 'react'
import {MobileData} from '../../../data/MobileData'


import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AddCardContext, WishlistContext } from '../../../contexts/Context';
import { Check } from 'react-bootstrap-icons';

const WishlistButton = ({ product }) => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  const found = wishlistState.wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (found) {
      toast.error('Item already added in the wishlist');
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      toast.success('Item added to wishlist successfully');
    }
  };

  return (
    <Button size="sm" variant="outline-primary" className='' onClick={handleWishlist}>
      Add to Wishlist {found && <Check />}
    </Button>
  );
};


// ---------------- Add To Cart Button ----------------
const AddToCartButton = ({ product }) => {
  const { cardsState, cardsDispatch } = useContext(AddCardContext);

  const found = cardsState.cardsItems.some(
    (item) => item.id === product.id
  );

  const handleCart = () => {
    if (found) {
      toast.error('Item already added in the cart');
    } else {
      cardsDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      toast.success('Item added to cart successfully');
    }
  };

  return (
    <Button size='sm' variant="warning" className=" butt me-3" onClick={handleCart}>
      Add to Cart {found && <Check />}
    </Button>
  );
};


function MobilesProducts() {
  return (
    <div>

      <Breadcrumb className="mt-3">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Electronics</Breadcrumb.Item>
        <Breadcrumb.Item active>Mobile</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row className="g-4">
          {MobileData.map((product) => (
            <Col key={product.id} sm={3} lg={4}>
              <Card className="h-100 shadow-sm">

                <Card.Img variant="top" src={product.image} className='' />

                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <small className="text-muted">Brand: {product.brand}</small>
                  <p className="fw-bold mt-2">
                    Price: ₹{product.price.toLocaleString()}
                  </p>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <AddToCartButton product={product} />
                  <WishlistButton product={product} />
                </Card.Footer>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}




export default MobilesProducts;
