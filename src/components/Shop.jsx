import { useEffect, useState } from "react";
import { useFashionData } from "../hooks/fakeapi";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [category, setCategory] = useState("jewelery");
  const { data, loading, error } = useFashionData(category);
  const { userChoice, setUserChoice } = useOutletContext();

  const handleChoice = (e) => {
    const choice = e.currentTarget.id;

    const selected = data.find((item) => item.id == choice);

    setUserChoice((prev) => [...prev, selected]);
  };

  return (
    <>
      <h1>Shop</h1>

      <div className="choices">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>

      <div id="card-container">
        {data &&
          data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <p>${item.price}</p>
              <button
                className="add-button"
                id={item.id}
                onClick={handleChoice}
              >
                add
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
