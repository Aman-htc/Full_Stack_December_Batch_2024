import {Badge,Button,Card,CardFooter,Col,Container,Navbar,Row,} from "react-bootstrap";
import productsData from "../data/ProductsData";
import { AddCardContext, UserContext, WishlistContext } from "../contexts/Context";
// import { Link } from "react-router-dom";
import { Check } from "react-bootstrap-icons";
import { Fragment, useContext } from "react";
import { ToastContainer,toast } from "react-toastify";
import { Link } from "react-router-dom";

function Products() {
 

  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
  const { cardsState, cardsDispatch } = useContext(AddCardContext);
  const { name } = useContext(UserContext);

  const WishlistButton = ({ product }) => {
    const found = wishlistState.wishlistItems.some(
      (item) => item.id === product.id
    );

    return (
      <Button
      as={Link}
      to='/Product-Add-list'
        size="sm"
        variant="outline-primary"
        onClick={() =>
          {if(found){
            toast.error('Item already added in the  wishlist')
            
          }else{
         
            wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: product,
          })
            toast.success('The Items has been add to wishlist successfully')
          }
        }
      }
          
         
        
      >
        Add to Wishlist {found &&<Check/>}
      </Button>
    );
  };

  const AddToCartButton = ({ product }) => {
    const found = cardsState.cardsItems.some(
      (item) => item.id === product.id,
      
    );

    return (
      <Button
        size="sm"
        variant="warning"
        onClick={() =>
        {if(found){
          toast.error('Item already added in the  Cart')

        }else{
          cardsDispatch({
            type: "ADD_TO_CARD",
            payload: product,
          })
          toast.success('The Items has been add to Cart successfully')

        }
      }
    }
      >
        Add to Cart {found && <Check />  }
       
      </Button>
    );
  };

  return (
    <Fragment>
      
      

      <Container>
        <Row className="bg-dark p-3">
          {productsData.map((product) => (
            <Col md={4} key={product.id}>
              <Card className="mb-3 shadow">
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>₹{product.price}</Card.Text>
                </Card.Body>
                <CardFooter className="d-flex justify-content-between">
                  <WishlistButton product={product} />
                  <AddToCartButton product={product} />
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       <ToastContainer/>
    </Fragment>
  );
}

export default Products;
