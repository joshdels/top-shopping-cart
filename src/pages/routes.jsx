import App from "../App";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
