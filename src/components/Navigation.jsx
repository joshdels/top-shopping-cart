import { Link, useOutletContext } from "react-router";

export default function Navigation({ userChoice }) {
  return (
    <>
      <nav>
        <h1>Trifty</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            Cart {userChoice.length > 0 && userChoice.length}{" "}
          </Link>
        </div>
      </nav>
    </>
  );
}
