



import AmazonDataModeRoutes from './routers/AmazonDataModeRoutes'
import { Provider } from 'react-redux'
import { store } from './store/Store'




function App() {


  return (
    <>
       <Provider store={store}>
        <AmazonDataModeRoutes />
      </Provider> 
    

    </>
  )
}

export default App
