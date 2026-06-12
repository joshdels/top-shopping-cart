import { useState } from "react";
import { Link, Links, useOutletContext } from "react-router";

export default function Cart() {
  const { userChoice } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const unique = [];

  userChoice.forEach((item) => {
    const existing = unique.find((i) => i.id === item.id);

    if (existing) {
      existing.count++;
    } else {
      unique.push({ ...item, count: 1 });
    }
  });

  const removeItem = () => {

  }

  const addItem = () => {

  }

  const removeAllItem = () => {
    
  }

  return (
    <>
      <main>
        <div className="card-container">
          {unique.length > 0 &&
            unique.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.price}</p>
                <p>total cost: {}</p>
                <p>quantity</p>
                <p>{item.count}</p>
              </div>
            ))}
        </div>
      </main>

      <aside>
        {userChoice.length > 0 ? (
          <div>
            <button>Checkout</button>
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
