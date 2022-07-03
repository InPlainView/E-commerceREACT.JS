import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./ItemListContainer/itemListContainer";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Notfound from "./components/NotFound/Notfound";
import ItemDetailContainer from "./ItemListContainer/itemDetailContainer/ItemDetailContainer";

function App() {
    
    
    return(
       <div>
        <BrowserRouter>
        <Navbar>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route> 
              <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route> 
              <Route path="/detail/:productId" element={<ItemListContainer/>}></Route> 
              <Route path="*" element={<Notfound/>}></Route> 
            </Routes>
        </Navbar>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
        </BrowserRouter>
         
       </div>
    )
}




export default App;
