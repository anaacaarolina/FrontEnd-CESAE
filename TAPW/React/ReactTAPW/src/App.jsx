import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Contactos from "./pages/Contactos.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Others from "./pages/Others.jsx";
import ReactDynamic from "./pages/ReactDynamic.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./pages/Course.jsx";
import PrendasPage from "./pages/PrendasPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contactos", element: <Contactos /> },
      { path: "/others", element: <Others /> },
      { path: "/eventos-dinamicos", element: <ReactDynamic /> },
      { path: "/cursos", element: <Courses /> },
      { path: "/curso/:nome_do_curso", element: <Course /> },
      { path: "/prendas", element: <PrendasPage /> },
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
