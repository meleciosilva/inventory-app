function Cart({ cartItems, handleRemove }) {
  
  return (
    <div>
      { cartItems && cartItems.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button onClick={() => handleRemove(item)}>Remove Cart</button>
        </div>
      )) }
    </div>
  )
}

export default Cart;