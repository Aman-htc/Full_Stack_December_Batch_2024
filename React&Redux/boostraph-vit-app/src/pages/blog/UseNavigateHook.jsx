
import { Button } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const UseNavigateHook = () => {

    const navigate = useNavigate()
    const stateData = {
        blogID: 123,
        blogTitle: "useNavigate Hook",
        category: "React Hooks",
    }

    const navigateToBlogPost = () => {
        navigate(
            "/navigate-page/1?comments=aman#detailssection",
            { state: stateData }
        );
    };




return (
    <div>
        <Button onClick={navigateToBlogPost}>Redirect to A Blog post</Button>
        {/* <Link to="/navigate-page"> navigate page</Link>

            <NavLink to="/navigate-page"> navigate page</NavLink> */ }

    </div>
)
}

export default UseNavigateHook
