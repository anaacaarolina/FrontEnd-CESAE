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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMaster />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/kitchen", element: <Kitchen /> },
      { path: "/login", element: <Login /> },
      { path: "/manager", element: <Manager /> },
      { path: "/menu", element: <Menu /> },
      { path: "/order", element: <Order /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
