// import React, { Fragment, useContext } from 'react';
// import { CameraProducts } from '../../../data/CctvCamers';
// import {
//   Breadcrumb,
//   Button,
//   Card,
//   Col,
//   Container,
//   Row
// } from 'react-bootstrap';
// import { Check } from 'react-bootstrap-icons';
// import { AddCardContext, WishlistContext } from '../../../contexts/Context';
// // import { toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';


// // ---------------- Wishlist Button ----------------
// const WishlistButton = ({ product }) => {
//   const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

//   const found = wishlistState.wishlistItems.some(
//     (item) => item.id === product.id
//   );

//   const handleWishlist = () => {
//     if (found) {
//       toast.error('Item already added in the wishlist');
//     } else {
//       wishlistDispatch({
//         type: "ADD_TO_WISHLIST",
//         payload: product,
//       });
//       toast.success('Item added to wishlist successfully');
//     }
//   };

//   return (
//     <Button size="sm" variant="outline-primary" className='tital' onClick={handleWishlist}>
//       Add to Wishlist {found && <Check />}
//     </Button>
//   );
// };


// // ---------------- Add To Cart Button ----------------
// const AddToCartButton = ({ product }) => {
//   const { cardsState, cardsDispatch } = useContext(AddCardContext);

//   const found = cardsState.cardsItems.some(
//     (item) => item.id === product.id
//   );

//   const handleCart = () => {
//     if (found) {
//       toast.error('Item already added in the cart');
//     } else {
//       cardsDispatch({
//         type: "ADD_TO_CART",
//         payload: product,
//       });
//       toast.success('Item added to cart successfully');
//     }
//   };

//   return (
//     <Button size='sm' variant="outline-warning" className=" me-4 p-1 " onClick={handleCart}>
//       Add to Cart {found && <Check />}
//     </Button>
//   );
// };


// // ---------------- Main Component ----------------
// function CctvCamers() {
//   return (
//     <Fragment>
//       <Breadcrumb className="mt-3">
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>Electronics</Breadcrumb.Item>
//         <Breadcrumb.Item active>CCTV Camera</Breadcrumb.Item>
//       </Breadcrumb>

//       <Container>
//         <Row className="g-4">
//           {CameraProducts.map((product) => (
//             <Col key={product.id} xs={12} sm={6} lg={4}>
//               <Card className="h-100 shadow-sm">

//                 <Card.Img variant="top" src={product.image} />

//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <small className="text-muted">
//                     Brand: {product.brand}
//                   </small>
//                   <p className="fw-bold mt-2">
//                     Price: ₹{product.price.toLocaleString()}
//                   </p>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <AddToCartButton product={product} />
//                   <WishlistButton product={product} />
//                 </Card.Footer>

//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//     </Fragment>
//   );
// }

// export default CctvCamers;
