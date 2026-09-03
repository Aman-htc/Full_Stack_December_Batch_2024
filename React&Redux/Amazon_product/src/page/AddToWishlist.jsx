import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../store/slices/WishlistSlices'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

const AddToWishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
  const wishlistremoveitems = (id) => {
    dispatch(removeFromWishlist(id))

  }
  return (


    <Container>
     

      {wishlistItems.length === 0 && <h4>your wishlist is empty</h4>}
      <hr />



      {wishlistItems.map((item, index) => (

        <Row key={index} className="align-items-center  rounded-2 shadow-lg mb-3 ">
          <Col sm={6}>
            <Image src={item.thumbnail} className='w-25' />
            <h6>{item.title}</h6>
            <p> price: {item.price}</p>
          </Col>
          <Col className="text-end">
            <Button
              variant="danger"
              size="sm"
              onClick={() =>
                wishlistremoveitems(item.id)
              }
            >
              Remove
            </Button>
          </Col>
          
      

        </Row>))}
        <Button as={Link} to='/cart' variant="outline-primary">
        <ArrowLeft /> Move to cart list
      </Button>




    </Container>



  )
}

export default AddToWishlist
