import Navbar from "./components/Navbar/NavBar";
import {BrowserRouter} from 'react-router-dom'
import CartProvider from "./context/cartProvider";
import RoutesPack from "./utils/RoutesPack";

function App() {
    
    
    return(
       <div>
        <CartProvider>
            <BrowserRouter>
                <Navbar/>
                <RoutesPack></RoutesPack>
            </BrowserRouter>
        </CartProvider>
         
       </div>
    )
}




export default App;
