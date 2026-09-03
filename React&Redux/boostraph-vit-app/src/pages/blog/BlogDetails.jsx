import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import BlogData from '../../data/BlogData'
import { Badge, Card, CardFooter, Col, Container, Row } from 'react-bootstrap'
// import PropTypes from 'prop-types'

function BlogDetails() {
  const prams = useParams()
  const {pathname} = useLocation()
  const Blogsdetais = BlogData.filter((post) => post.id === parseInt(prams.id))
  return (
<Container>
      <NavLink to='/blogs'>
   back
      </NavLink>
      <br></br>
       pathnae :{pathname}

      <Row>
       
        {Blogsdetais.map((post, index) => {
          return (
            <Col key={index}>
              <Card className='mb-5' classNamew="w-50">
               
                  <Card.Img src={"https://www.shutterstock.com/image-photo/blog-social-media-information-connect-260nw-451991974.jpg"} className='image-fluid w-50' />
                  <Card.Body>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>

                    </Card.Body>
                  <CardFooter className='d-flex'>
                    {post?.tags?.map((item, index) => {
                      return (

                        <Badge key={index} className='me-3'>{item}</Badge>

                      );
                    })}

                  </CardFooter>
                  
                

              </Card>
            </Col>
          )

        })}
      </Row>
    </Container>











  )
}



export default BlogDetails

