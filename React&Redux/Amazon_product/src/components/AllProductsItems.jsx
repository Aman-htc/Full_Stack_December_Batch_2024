import React, { Fragment, useState, } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';

import { Link } from 'react-router-dom';
import { productsToDetails } from '../store/slices/ProductsDetailsSlice';
import CartButton from './CartButton';
import WishlistButton from './WishlistButton';
import { CurrencyDollar, Eye } from 'react-bootstrap-icons';






const AllProductsItems = ({ product }) => {
    
   
   
   
    const dispatch = useDispatch()
    

    
    const Productsdetailshandal = ({ product }) => {
        const handleproduct = () => {
           dispatch(productsToDetails(product))
        };

        return (
            <Button size="sm" variant="outline-primary" as={Link} to='/product-list' className='tital' onClick={handleproduct}>
              <Eye/> 
            </Button>
        );
    };


    return (
        <div>
            <Card className="mb-3 shadow">

                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text><CurrencyDollar/>{product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <CartButton product={product} />
                    <Productsdetailshandal product={product}/>
                    
                   


                    <WishlistButton product={product} />


                </Card.Footer>

            </Card>
            <ToastContainer />

        </div>
    )

}
export default AllProductsItems
