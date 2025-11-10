import { useState } from "react";
import Cards from "./plants/Cards";
import PLANTS from "./data";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([])

  const increaseQty = (id) => {
    setCart(
      cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    )
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const addToCart = (plant) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === plant.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );


  return (

    <>
      <header>
        <h1>Welcome to Proper Plants</h1>
      </header>

      <main>
        <div className="cards-container">
          <Cards Plants={PLANTS} addToCart={addToCart} />
          </div>
            <div className="cart">
            <h1> Shopping Cart</h1>

            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id}>
                  <span>{item.name} - Quantity: {item.quantity}
                  </span>

                  <div>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
              ))
            )}

            <h2> Total Items: {totalItems}</h2>
            </div>
          </main>
        </>
        );

}

