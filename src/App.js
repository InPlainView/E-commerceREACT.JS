import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./Container/itemListContainer/itemListContainer";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Notfound from "./components/NotFound/Notfound";
import ItemDetailContainer from "./Container/itemDetailContainer/ItemDetailContainer";
import { CartShop } from "./context/cartContext";
import Cart from "./Container/Cart/cart";

function App() {
    
    
    return(
       <div>
        <CartShop.Provider>
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
        </CartShop.Provider>
         
       </div>
    )
}




export default App;
