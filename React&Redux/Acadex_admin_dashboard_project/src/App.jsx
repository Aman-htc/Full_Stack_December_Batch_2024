
import './assets/scss/theme.scss'
import DateProvider from './contexts/providers/DateProviders'

import AcadexRouter from './router/AcadexRouter'


function App() {


  return (
    <>



      <DateProvider>
        <AcadexRouter />
      </DateProvider>




    </>
  )
}

export default App
