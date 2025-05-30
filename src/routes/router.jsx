import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PaymentCheckout from "../pages/PaymentCheckout/PaymentCheckout";
// Define your routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <div>Home Page</div>,
      },
      {
        path: "contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "payment",
        element: <PaymentCheckout />,
      },
    ],
  },
]);
