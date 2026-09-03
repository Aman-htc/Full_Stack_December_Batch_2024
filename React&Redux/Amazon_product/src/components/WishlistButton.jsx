import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../store/slices/WishlistSlices";
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

const WishlistButton = ({ product }) => {
    const { wishlistItems } = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()



        const found = wishlistItems.some(
            (item) => item.id === product.id
        );

        const handleWishlist = () => {
            if (found) {

                toast.error('Item already added in the wishlist');
            } else {

                dispatch(addToWishlist(product))

                // toast.success('Item added to wishlist successfully');
            }
        };

        return (
            <Button size="sm" variant="outline-primary" className='tital' onClick={handleWishlist}>
                Add to Wishlist {found && <Check />}
            </Button>
        );
    };
    export default WishlistButton