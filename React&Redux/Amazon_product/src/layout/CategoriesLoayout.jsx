import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/Services";
import { ListGroup, ListGroupItem,  Spinner } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const CategoriesLoayout = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetchCategories();
                setProducts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading)
        return (
            <span>
                <Spinner size="sm" /> Please wait, products are on the way...
            </span>
        );

    if (error) return <pre>{error.message}</pre>;

    return (
        <Container fluid>
            <Row>
                <Col md={2}  className="py-3">
                    <ListGroup className="category-scroll">
                        {products?.map((categories, index) => (
                            <ListGroupItem key={index} className="category-item">
                                <NavLink  className='text-decoration-none text-dark fs-5 ' to={`category/${categories.slug}`}>
                                    {categories.name}
                                </NavLink>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>

                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default CategoriesLoayout;
