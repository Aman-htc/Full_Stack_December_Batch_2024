import React from 'react'
import { postsdata } from '../../data/BlogData'
import { Badge, Card, CardFooter, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CardImage } from 'react-bootstrap-icons'

function Blogs() {
    return (
        <div>
            <h1>Bolgs Post</h1>

            <Row>
                {postsdata.map((post, index) => {
                    return (
                        <Col key={index}>
                            <Card  className='mb-5'>
                                <Card sm={3}>
                                    <Card.Img src={"https://www.shutterstock.com/image-photo/blog-social-media-information-connect-260nw-451991974.jpg"}/>
                                    <Card.Body>
                                        <h5>{post.title}</h5>
                                        <NavLink to={`/blogs/${post.id}`} className={'text-decoration-none'}>Read more....</NavLink>
                                        {/* <NavLink to={`/blogs/${post.slug}`} className={'text-decoration-none'}>Read more....</NavLink> */}







                                    </Card.Body>
                                    <CardFooter className='d-flex'>
                                        {post.tags.map((item, index) => {
                                            return (

                                                <Badge key={index} className='me-3'>{item}</Badge>

                                            );
                                        })}

                                    </CardFooter>
                                    {/* {post.tags} */}
                                </Card>

                            </Card>
                        </Col>
                    )

                })}
            </Row>

        </div>
    )
}



export default Blogs

