import React from 'react';
import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    
    const [products , setProducts] = useState([])
    const [productosFiltrados , setProductosFiltrados] = useState()

    const params = useParams()  

        useEffect(() => {
            const getProducts = async() => {
                try {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const data = await response.json();
                    console.log(data);
                    setProducts(data);
                    setProductosFiltrados(data);
                } catch (error) {
                    console.log("Hubo un error");
                    console.log(error);
                }
               
            }
            getProducts()
        }, [] )
        
        useEffect(() => {
                if (params?.categoryId){
                    const productosFiltrados = products.filter(product => product.category === params.categoryId)
                    setProductosFiltrados(productosFiltrados)
                } else {
                    setProductosFiltrados(products)
                }
        }, [params , products])

        console.log(products)

   
 
    return(
        <div className='divContainer'>
            <h2>{greeting}</h2>
            <ItemList char={productosFiltrados}/>
        </div>
    )

}

export default ItemListContainer