import { useState } from "react";
import { Link, useOutletContext } from "react-router";

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
    <>
      <main>
        <div className="card-container">
          {unique.length > 0 &&
            unique.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.price}</p>
                <p>total cost: ${item.price * item.count}</p>
                <p>price: ${item.price}</p>
                <div>
                  <button onClick={() => removeItem(item.id)}>minus</button>
                  <p>{item.count}</p>
                  <button onClick={() => addItem(item.id)}>add</button>
                </div>

                <button onClick={() => removeGroupItem(item.id)}>remove</button>
              </div>
            ))}

          {unique.length > 0 && (
            <button onClick={removeAllItems}>empty cart</button>
          )}
        </div>
      </main>

      <aside>
        {userChoice.length > 0 ? (
          <div>
            <button onClick={removeAllItems}>Checkout</button>
          </div>
        ) : (
          <div>
            <h1>Your cart is empty</h1>
            <p>Add more items to your cart.</p>
            <Link to="/shop">Shop Now!</Link>
          </div>
        )}
      </aside>
    </>
  );
}
