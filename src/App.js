import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./Container/itemListContainer/itemListContainer";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Notfound from "./components/NotFound/Notfound";
import ItemDetailContainer from "./Container/itemDetailContainer/ItemDetailContainer";
import Cart from "./Container/Cart/cart";
import CartProvider from "./context/cartProvider";

function App() {
    
    
    return(
       <div>
        <CartProvider>
            <BrowserRouter>
            <Navbar/>
             <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route> 
                <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route> 
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}></Route> 
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<Notfound/>}></Route> 
            </Routes>
            </BrowserRouter>
        </CartProvider>
         
       </div>
    )
}




export default App;
