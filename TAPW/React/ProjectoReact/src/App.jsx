import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Login from "./pages/Login.jsx";
import Manager from "./pages/Manager.jsx";
import Menu from "./pages/Menu.jsx";
import Order from "./pages/Order.jsx";
import Register from "./pages/Register.jsx";
import LayoutMaster from "./components/layouts/LayoutMaster.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./auth/protectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMaster />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/kitchen", element: <ProtectedRoute element={<Kitchen />} roles={["kitchen", "admin"]} /> },
      { path: "/login", element: <Login /> },
      { path: "/manager", element: <ProtectedRoute element={<Manager />} roles={["manager", "admin"]} /> },
      { path: "/menu", element: <Menu /> },
      { path: "/order", element: <ProtectedRoute element={<Order />} roles={["customer", "admin"]} /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
