import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PaymentCheckout from "../pages/PaymentCheckout/PaymentCheckout";
import MobileLanding from "../pages/Home/Components/MobileView/MobileLanding";
import Attractions from "../pages/Home/Components/MobileView/Attractions";
import Accessibility from "../pages/Home/Components/MobileView/Accessibility";
import AttractionDetailModal from "../pages/Home/Components/MobileView/AttractionDetailModal";
import Mycart from "../pages/Home/Components/MobileView/Mycart";
import EmailVerification from "../pages/Home/Components/MobileView/EmailVerification";
import ConfirmEmail from "../pages/Home/Components/MobileView/ConfirmEmail";
import CheckOut from "../pages/Home/Components/MobileView/CheckOut";
import PromoCode from "../pages/Home/Components/MobileView/PromoCode";
import MakePayment from "../pages/Home/Components/MobileView/MakePayment";
import PaymentSuccessful from "../pages/Home/Components/MobileView/PaymentSuccessful";
import Experience1 from "../pages/Home/Components/MobileView/Experience1";
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
      // {
      //   path: "/",
      //   element: <MobileLanding />,
      // },
      {
        path: "attractions",
        element: <Attractions />,
        children: [
          {
            path: ":id",
            element: <AttractionDetailModal />,
          },
        ],
      },
      {
        path: "mobilelanding",
        element: <MobileLanding />,
      },
      {
        path: "accessibility",
        element: <Accessibility />,
      },
      {
        path: "mycart",
        element: <Mycart />,
      },
      {
        path: "emailverification",
        element: <EmailVerification />,
      },
      {
        path: "confirmemail",
        element: <ConfirmEmail />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "promocode",
        element: <PromoCode />,
      },
      {
        path: "makepayment",
        element: <MakePayment />,
      },
      {
        path: "paymentsuccess",
        element: <PaymentSuccessful />,
      },
      {
        path: "experience",
        element: <Experience1 />,
      },
    ],
  },
]);
