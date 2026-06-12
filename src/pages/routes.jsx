import App from "../App";
import Shop from "../components/Shop";
import Cart from "../components/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
