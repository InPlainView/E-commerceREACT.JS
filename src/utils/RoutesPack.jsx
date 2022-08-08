import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from '../components/NotFound/Notfound'
import Cart from '../Container/Cart/cart'
import ItemDetailContainer from '../Container/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../Container/itemListContainer/itemListContainer'
import Inicio from '../Container/PaginaInicio/Inicio'

const RoutesPack = () => {
  return (
  
      <Routes>

          <Route path="/" element={<Inicio/>}></Route> 
          <Route path="/products" element={<ItemListContainer/>}></Route> 
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route> 
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}></Route> 
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<Notfound/>}></Route> 
      
      </Routes>
 
  )
}

export default RoutesPack