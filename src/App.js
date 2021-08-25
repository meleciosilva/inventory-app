import { useEffect, useState } from 'react';
import Inventory from './Inventory';
import Cart from './Cart';
import { callApi } from './Utility';

function App() {

  
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    callApi().then((data) => {
      setItems(data)
    });
  }, [])
  
  const handleAdd = (item) => {
    setCart(prevCart => [...prevCart, item]);
    setItems(prevItems => prevItems.filter(it => it !== item))
  }

  const handleRemove = (item) => {
    setItems(prevItems => [...prevItems, item]);
    setCart(prevCart => prevCart.filter(car => car !== item));
  }

  return (
    <div className="App">
      <h1>Inventory</h1>
      <Inventory items={items} handleAdd={handleAdd} />
      <h1>Cart</h1>
      <Cart cartItems={cart} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
