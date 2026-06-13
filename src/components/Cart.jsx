import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import BackspaceSharpIcon from "@mui/icons-material/BackspaceSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";

export default function Cart() {
  const { userChoice, setUserChoice } = useOutletContext();

  const handleUnique = () => {
    return userChoice.reduce((acc, item) => {
      const existing = acc.find((i) => i.id === item.id);

      if (existing) {
        existing.count++;
      } else {
        acc.push({ ...item, count: 1 });
      }

      return acc;
    }, []);
  };

  const unique = handleUnique();

  const rawTotalPrice = unique.reduce(
    (sum, item) => sum + item.count * item.price,
    0,
  );
  const totalPrice = rawTotalPrice.toFixed(2);

  const removeItem = (itemId) => {
    setUserChoice((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);

      if (index === -1) return prev;

      const updated = [...prev];
      updated.splice(index, 1);

      return updated;
    });
  };

  const addItem = (itemId) => {
    setUserChoice((prev) => {
      const item = prev.find((item) => item.id === itemId);

      if (!item) return prev;

      return [...prev, item];
    });
  };

  const removeGroupItem = (itemId) => {
    setUserChoice(userChoice.filter((item) => item.id !== itemId));
  };

  const removeAllItems = () => {
    setUserChoice([]);
  };

  return (
    <div className="cart-container">
      {unique.length > 0 && (
        <main>
          <div className="card-container">
            {unique.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="content">
                  <div className="header">
                    <h3>{item.title}</h3>
                    <button onClick={() => removeGroupItem(item.id)}>
                      <BackspaceSharpIcon />
                    </button>
                  </div>
                  <p>price: ${item.price}</p>
                  <p>total cost: ${item.price * item.count}</p>
                  <div className="buttons">
                    <p>Quantity:</p>
                    <button onClick={() => removeItem(item.id)}>
                      <DoNotDisturbOnOutlinedIcon />
                    </button>
                    <p>{item.count}</p>
                    <button onClick={() => addItem(item.id)}>
                      <AddCircleOutlineSharpIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {unique.length > 0 && (
              <button onClick={removeAllItems} className="empty-cart">
                empty cart
              </button>
            )}
          </div>
        </main>
      )}

      <aside>
        <div className="cart">
          {userChoice.length > 0 ? (
            <div className="checkout">
              <h1>Total Price: ${totalPrice}</h1>
              <button onClick={removeAllItems}>Checkout</button>
            </div>
          ) : (
            <div>
              <h1>Your cart is empty</h1>
              <p>Add more items to your cart.</p>
              <Link to="/shop">Shop Now!</Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
