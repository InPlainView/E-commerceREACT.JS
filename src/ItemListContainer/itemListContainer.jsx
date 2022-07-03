import React from 'react';
// import ClickCounter from '../components/ClickCounter/click';
import { useEffect , useState } from "react";
import ItemList from '../components/ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    
    const [products , setProducts] = useState([])

   
        

        useEffect(() => {
            const getProducts = async() => {
                try {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const data = await response.json();
                    console.log(data);
                    setProducts(data);
                } catch (error) {
                    console.log("Hubo un error");
                    console.log(error);
                }
               
            }
            getProducts()
        }, [] )

        console.log(products)

   
 
    return(
        <div>
            <h2>{greeting}</h2>
            {/* <ClickCounter initial={1} stock={20}/> */}
            <ItemList char={products}/>
        </div>
    )

}

export default ItemListContainer