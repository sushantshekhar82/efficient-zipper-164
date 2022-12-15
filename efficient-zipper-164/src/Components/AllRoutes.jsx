import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Men from './Men'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Admin from './Admin'
function AllRoutes() {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
     </Routes>
  )
}

export default AllRoutes
