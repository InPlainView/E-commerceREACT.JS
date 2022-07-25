const orderCreated = (nombre, phonenumber, email, id, title, price, total) => {
  return {
      buyer: {
          name: nombre,
          phone: phonenumber,
          email: email
      },
      items: {
        id: id,
        name: title,
        price: price
      },
      creado: new Date().toLocaleString(),
        total: total
  }
  
}

export default orderCreated