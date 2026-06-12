import { Link } from "react-router";

export default function Navigation() {
  return (
    <>
      <nav>
        <h1>Trifty</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </div>
      </nav>
    </>
  );
}
