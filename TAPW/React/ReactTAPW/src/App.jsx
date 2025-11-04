import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Contactos from "./pages/Contactos.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/rootLayout.jsx";
import Others from "./pages/Others.jsx";
import ReactDynamic from "./pages/ReactDynamic.jsx";

<img src={reactLogo} className="logo react" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contactos", element: <Contactos /> },
      { path: "/others", element: <Others /> },
      { path: "/eventos-dinamicos", element: <ReactDynamic /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
