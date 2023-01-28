import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactsPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import EmptyCartPage from "./pages/EmptyCartPage";
import SuccessfulOrderPage from "./pages/SuccessfulOrderPage";

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
    {
      link: "/cart",
      element: <CartPage />,
      id: 8,
    },
    {
      link: "/profile",
      element: <ProfilePage />,
      id: 9,
    },
    {
      link: "/menu",
      element: <MenuPage />,
      id: 10,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 11,
    },
    {
      link: "/contact",
      element: <ContactPage />,
      id: 12,
    },
    {
      link: "/suggestions",
      element: <SuggestionsPage />,
      id: 13,
    },
    {
      link: "/emptycart",
      element: <EmptyCartPage />,
      id: 14,
    },
    {
      link: "/successorder",
      element: <SuccessfulOrderPage />,
      id: 15,
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
