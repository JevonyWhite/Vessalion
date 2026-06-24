import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import RootLayout from './components/RootLayout/RootLayout'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Compliance from './Pages/Compliance/Compliance'
import Opportunities from './Pages/UpdatedOpportunities/Opportunities'
import Industries from './Pages/Industries/Industries'
import Markets from './Pages/Markets/Markets'
import FAQs from './Pages/FAQs/FAQs'
import Capabilities from './Pages/Capabilities/Capabilities'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse'
import TrafiguraWebsite from './components/Trafigura/TrafiguraWebsite'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="compliance" element={<Compliance/>}/>
        <Route path='opportunities' element={<Opportunities/>}/>
        <Route path="industries" element={<Industries/>}/>
         <Route path="markets" element={<Markets/>}/>
         <Route path='capabilities' element={<Capabilities/>}/>
         <Route path='frequently-asked-questions' element={<FAQs/>}/>
         <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
         <Route path='terms-of-use' element={<TermsOfUse/>}/>
      </Route>
    )
  )

function App() {
  
  

  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
