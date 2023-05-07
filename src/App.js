import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//import pages from pages folder
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Products from "./pages/Products";

//import header and footer components
import Header from "./components/Header";
import Footer from "./components/Footer";

//create layout compoent to store header and footer
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//create router
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
