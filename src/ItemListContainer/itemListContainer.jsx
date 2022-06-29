import React from 'react';
import ClickCounter from '../components/ClickCounter/click';
import { useEffect , useState } from "react";
import ItemList from '../components/ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    
    const [characters , setCharacters] = useState([])

   
        

        useEffect(() => {
            const getProducts = async() => {
                try {
                    const response = await fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]');
                    const data = await response.json();
                    console.log(data);
                    setCharacters(data);
                } catch (error) {
                    console.log("Hubo un error");
                    console.log(error);
                }
               
            }
            getProducts()
        }, [] )

        console.log(characters)

   
 
    return(
        <div>
            <h2>{greeting}</h2>
            {/* <ClickCounter initial={1} stock={20}/> */}
            <ItemList char={characters}/>
        </div>
    )

}

export default ItemListContainer