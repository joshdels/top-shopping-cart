import { Link, NavLink, useOutletContext } from "react-router";

export default function Navigation({ userChoice }) {
  return (
    <>
      <nav>
        <Link className="brand-name" to="/">
          Trifty
        </Link>

        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart {userChoice.length > 0 && ` (${userChoice.length})`}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
