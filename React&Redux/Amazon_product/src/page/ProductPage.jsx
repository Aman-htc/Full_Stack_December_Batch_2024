import React, { useEffect, useState, Fragment } from "react";

import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { fetchProducts } from "../api/Services";
import AllProductsItems from "../components/AllProductsItems";

const ProductPage = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts()
        // console.log(response)
        setProducts(response.data.products); 
      } catch (err) {
        setError(err);
      } finally {
      setLoading(false)
      }
    };

    getProducts();
  }, []);

  if (loading)
    return (
      <div>
        <Spinner animation="border" /> Please wait products are on the way...
      </div>
    );

  if (error) return <pre>{error.message}</pre>;

  return (
    <Container>
         <h3>List of product</h3>
      <Row className="bg-dark p-3">
     
        {products?.map((product) => (
          <Col md={4} key={product.id}>
            <AllProductsItems product={product}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;





