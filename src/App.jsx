import 'bootstrap/dist/css/bootstrap.min.css';
import Informacija from './Informacija/Informacija';
import Gebejimai from './Skills';
import DarbuSarasas from './Darbai';
import Footer from './Footeris';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",   
      element: <Informacija/>
    },
    {
      path: "/2",             
      element: <Gebejimai/>, 
    },
    {
      path: "/3",  
      element: <DarbuSarasas/>
    },
    {
      path: "/footer",      
      element: <Footer/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> 
      <Footer /> 
    </>
  );
}

export default App;
