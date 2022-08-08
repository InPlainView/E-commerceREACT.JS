import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import swal from 'sweetalert';


const guardarOrden = (cart, orden) => {

    const batch = writeBatch(db)

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
                addDoc(collection(db, 'orders'), orden).then(({ id }) =>{
                    batch.commit().then(()=>{
                        swal("Orden generada!", "ID: " + id, "success");
                    })
                }).catch((err) =>{
                    swal(`Something happened`, "Ups", "error")
                })
            }else {
                let mensaje= '';
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                swal(`Out of stock`, `${mensaje}`, "error")
            }
        })
    })
}

export default guardarOrden