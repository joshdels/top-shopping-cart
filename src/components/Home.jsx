import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Save More, Fashion More</h1>
      <img
        src="https://thriftwallet.in/cdn/shop/articles/pexels-photo-6068971.jpg?v=1737105266&width=1100"
        alt="fashion"
      />

      <div>
        <p>One stop fashion within your budget</p>
        <Link to="shop"> Shop Now</Link>
      </div>
    </>
  );
}
