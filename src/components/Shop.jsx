import { useEffect, useState } from "react";
import { useFashionData } from "../hooks/fakeapi";
import { useOutletContext } from "react-router";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

export default function Shop() {
  const [category, setCategory] = useState("jewelery");
  const { data, loading, error } = useFashionData(category);
  const { userChoice, setUserChoice } = useOutletContext();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChoice = (e) => {
    const choice = e.currentTarget.id;

    const selected = data.find((item) => item.id == choice);

    setUserChoice((prev) => [...prev, selected]);
  };

  return (
    <div className="shop">
      <div className="choices">
        <button
          className={category === "jewelery" ? "active" : ""}
          onClick={() => setCategory("jewelery")}
        >
          Jewelry
        </button>

        <button
          className={category === "men's clothing" ? "active" : ""}
          onClick={() => setCategory("men's clothing")}
        >
          Men
        </button>

        <button
          className={category === "women's clothing" ? "active" : ""}
          onClick={() => setCategory("women's clothing")}
        >
          Women
        </button>
      </div>

      <div className="card-container">
        {loading ? (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          data?.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>

              <div className="add-button">
                <p>${item.price}</p>

                <AddShoppingCartSharpIcon
                  id={item.id}
                  className="add-icon"
                  onClick={handleChoice}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
