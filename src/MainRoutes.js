import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 2,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 3,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 4,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/details",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "/product",
      element: <ProductPage />,
      id: 7,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
