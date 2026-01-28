import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Component/ErrorPage'
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import ServicesPage from './Pages/Services'
import ProductsPage from './Pages/Product'
import CapabilitiesPage from './Pages/Capabilities'
import StackPage from './Pages/StackPage'
import ContactPage from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/Terms'
import RefundPolicy from './Pages/RefundPolicy'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/services",
          element:<ServicesPage/>
        },
        {
          path:"/products",
          element:<ProductsPage/>
        },
        {
          path:"/capabilities",
          element:<CapabilitiesPage/>
        },
        {
          path:"/stack",
          element:<StackPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/privacy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms",
          element:<TermsAndConditions/>
        },
        {
          path:"/refund-policy",
          element:<RefundPolicy/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App