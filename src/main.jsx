
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import SingleProduct from './pages/SingleProduct.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/About.jsx'




let router = createBrowserRouter([
    {
        path : "/" ,
        element : <App />,
        children : [
           
            { path : "" , element : <Home /> } ,
            { path : "contact" , element : <Contact /> } ,
            { path : "About" , element : <About /> } ,


            {path : "singleProduct/:id" , element : <SingleProduct />}
        ]
    }
])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)
