const orderCreated = (name, phonenumber, email, id, title, price, total) => {
  return {
      buyer: {
          nombre: name,
          telefono: phonenumber,
          email: email
      },
      items: {
        id: id,
        title: title,
        price: price
      },
      creado: new Date().toLocaleString(),
        total: total
  }
  
}

export default orderCreated