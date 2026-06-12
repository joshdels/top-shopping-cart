import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navigation from "./components/Navigation";
import { useParams } from "react-router";
import Shop from "./components/Shop";
import Home from "./components/Home";

function App() {
  const { name } = useParams();

  return (
    <>
      <Navigation />

      {name === "shop" ? <Shop /> : name === "cart" ? <Cart /> : <Home />}
    </>
  );
}

export default App;
