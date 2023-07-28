import React from "react";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Protected from "./features/auth/components/Protected";

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },

  {
    path: "/cart",
    element: <Protected>{<CartPage/>}</Protected>,
  },

  {
    path: "/checkout",
    element: <Protected>{<Checkout/>}</Protected>,
  },

  {
    path: "/product-detail/:id",
    element: <Protected>{<ProductDetailPage/>}</Protected>,
  },
]);

function App() {
  return (
    <div className="App">
    

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
