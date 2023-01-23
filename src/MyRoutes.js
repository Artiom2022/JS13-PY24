import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";
import Analytics from "./components/AdminPage/Analytics";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Login from "./components/register/Login";
import Register from "./components/register/Register";

const MyRoutes = () => {
  return (
    <div>

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar /> <Home />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <>
              <Navbar /> <Products />
            </>
          }
        />
        <Route
          path="/AdminPage"
          element={
            <>
              <Navbar /> <AdminPage />
            </>
          }
        />
        <Route
          path="/Analytics"
          element={
            <>
              <Navbar /> <Analytics />
            </>
          }
        />
      </Routes>

    </div>
  );
};

export default MyRoutes;
