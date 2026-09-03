import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchProductCategories } from "../api/Services";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import AllProductsItems from "../components/AllProductsItems";

const Categories = () => {
  
  const param =useParams()

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductCategories(param);
        setProducts(data); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [param.slug]);

  if (loading)
    return (
      <span>
        <Spinner size="sm" /> Please wait products are on the way...
      </span>
    );

  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h2>{param.slug}</h2>
      <Container>
        <Row className="bg-dark p-3">
          {products.map((product,index) => (
            <Col md={4} key={index}>
              <AllProductsItems product={product}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
