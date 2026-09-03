import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import WishlistProvider from './contexts/providers/WishlistProvider';
import AddToCardProvider from './contexts/providers/AddToCardProvider';
import DataModeRouter from './routers/DataModeRouter'
import UserProvider from './contexts/providers/UserProvider'


function App() {
    return (
        <>
            <UserProvider>
                <WishlistProvider>
                    <AddToCardProvider>
                        <DataModeRouter />
                    </AddToCardProvider>
                </WishlistProvider>
            </UserProvider>
        </>
    );
}

export default App;
