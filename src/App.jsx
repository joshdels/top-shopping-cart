import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navigation from "./components/Navigation";
import { Outlet, useParams } from "react-router";
import Shop from "./components/Shop";
import Home from "./components/Home";

function App() {
  const [userChoice, setUserChoice] = useState([]);

  return (
    <>
      <Navigation userChoice={userChoice} />

      <Outlet context={{ userChoice, setUserChoice }} />
    </>
  );
}

export default App;
