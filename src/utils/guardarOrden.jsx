import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"


const guardarOrden = (cart, orden) => {

//primer paso: abrir un batch
    const batch = writeBatch(db)

//Array auxiliar que define si hya productos fuera de stock
    const outOfStock = []

//chequear el stock del producto en nuestra db y restarlo de la cantidad, si corresponde
    cart.forEach((productoEnCart) =>{
        getDoc(doc(db, "products", productoEnCart.id))
        .then(async (documentSnapshot) =>{
            //generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar.
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id}

            //hacemos un update en caso de que el stock supere a la cantidad
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db , "products", producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            }else {
                outOfStock.push(producto)
            }

            if(outOfStock.length === 0){
                addDoc(collection(db, "orders"), orden).then(({ id }) =>{
                    batch.commit().then(()=>{
                        alert("se genero la orden con id: " + id)
                    })
                }).catch((err) =>{
                    console.log(`Error ${err.mensaje}`)
                })
            }else {
                let mensaje= ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                alert(`productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden