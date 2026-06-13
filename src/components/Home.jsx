import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home">

      <h1>Save More, Fashion More</h1>

      <div className="floating">
        <p>One stop fashion within your budget</p>
        <Link to="/shop"> Shop Now</Link>
      </div>

      <img
        src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg"
        alt="fashion"
      />
    </div>
  );
}
