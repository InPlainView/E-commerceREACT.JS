import React, { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/loading/loading';
import { collection, query,  getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemListContainer = ({greeting}) => {
    
    const [products , setProducts] = useState([])
    const [productosFiltrados , setProductosFiltrados] = useState()
    const params = useParams()  

        useEffect(() => {
            const getProducts = async() => {
                try {
                    const q = query(collection(db, "products"));
                    const querySnapshot = await getDocs(q);
                    const productos =[]
                    querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    productos.push({id: doc.id, ...doc.data()})
                    });

                    setProducts(productos);
                    setProductosFiltrados(productos);
                } catch (error) {}
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

    return(
        <div className='divContainer'>
            {
            products.length !== 0 ?
            <ItemList char={productosFiltrados}/>
            : <Loading/>
            }
        </div>
    )
}

export default ItemListContainer