import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import UpdatePassword from "./pages/Auth/UpdatePassword";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Privadas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <CatalogPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/products/new"
        element={
          <PrivateRoute>
            <CreateProductPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/products/:id/edit"
        element={
          <PrivateRoute>
            <EditProductPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/update-password"
        element={
          <PrivateRoute>
            <UpdatePassword />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
