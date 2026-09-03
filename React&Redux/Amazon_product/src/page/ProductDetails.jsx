import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { removeFromWishlist } from '../store/slices/WishlistSlices'
import { Link } from 'react-router-dom'
import { ArrowLeft, CurrencyDollar } from 'react-bootstrap-icons'
import AddToCart from './AddToCart'

import CartButton from '../components/CartButton'
import WishlistButton from '../components/WishlistButton'


const ProductDetails = () => {
    const { productslist } = useSelector((state) => state.detailspage)
    //   const dispatch = useDispatch()
    //   const wishlistremoveitems = (id) => {
    //     dispatch(removeFromWishlist(id))

    //   }
    return (


        <Container>


            {/* {wishlistItems.length === 0 && <h4>your wishlist is empty</h4>} */}
            <hr />



            {productslist.map((item, index) => (

                <Row key={index} className="  rounded-2 shadow-lg mb-3 p-4 ">
                    <Col sm={6}>

                        <Image src={item.thumbnail} className='w-75 p-4 border border-3 border-dark mb-3' />
                        <Button as={Link} to='/product' variant="outline-primary">
                            <ArrowLeft /> Continue Shopping
                        </Button>
                    </Col>
                    <Col>
                        <h4 className='mb-3'>{item.title}</h4>
                        <h5 className='mb-3'> price: <CurrencyDollar /> {item.price}</h5>






                        <h6 className='mb-3'> {item.description}</h6>

                        <div className='d-flex justify-content-between w-50'>

                            <CartButton product={item} />
                            <WishlistButton product={item} />
                        </div>
                    </Col>




                </Row>))}





        </Container>



    )
}

export default ProductDetails
