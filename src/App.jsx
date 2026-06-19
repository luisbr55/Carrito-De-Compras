import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import UpdatePassword from "./pages/Auth/UpdatePassword";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

import { supabase } from "./lib/supabase";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


 
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);

      if (session) {
        setUser(session.user);
      }
      else{
        setUser(null);
      }
     
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />

      {/* Rutas privadas */}
      <Route
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Layout user = {user}/>
          </PrivateRoute>
        }
      >
        <Route path="/" element={<CatalogPage/>} />
        <Route path="/products/new" element={<CreateProductPage />} />
        <Route path="/products/:id/edit" element={<EditProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
