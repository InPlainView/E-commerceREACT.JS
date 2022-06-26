import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./ItemListContainer/itemlist";
import ClickCounter from "./components/ClickCounter/click";

function App() {
    
    
    return(
       <div>
         <Navbar/>
        <ItemListContainer greeting={"Aca van cositas"}/>
        <ClickCounter/>
       </div>
    )
}




export default App;
