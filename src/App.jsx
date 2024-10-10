// import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


// import './App.css'
import Informacija from './Informacija/Informacija'
// import Header from './Header'
// import ClickCounter from './ClickCounter'


// eslint-disable-next-line no-unused-vars
import Gebejimai from './Skills'
// eslint-disable-next-line no-unused-vars
import DarbuSarasas from './Darbai';

// eslint-disable-next-line no-unused-vars
import Footer from './Footeris'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Informacija></Informacija>
      <Gebejimai/>
      <DarbuSarasas/>
      <Footer/>
    </>
  )
}

export default App