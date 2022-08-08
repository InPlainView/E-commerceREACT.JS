const orderCreated = (buyer, cart, total) => {
  return {
      buyer: {
          nombre: buyer.names,
          phone: buyer.phone,
          email: buyer.email
      },
      items: cart,
      total: total,
      creado: new Date().toLocaleString(),
  }
}
export default orderCreated
