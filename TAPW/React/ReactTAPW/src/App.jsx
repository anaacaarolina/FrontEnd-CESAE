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
import AvailablePlaces from "./pages/PlacesIndex.jsx";
import StarWarsPeople from "./pages/StarWarsPeople.jsx";
import StarWarsFilms from "./pages/StarWarsFilms.jsx";
import Signup from "./pages/Signup.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RouteForStudents from "./protectedRoutes/RouteForStudents.jsx";

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
      { path: "/cursos", element: <RouteForStudents element={<Courses />} /> },
      { path: "/curso/:nome_do_curso", element: <Course /> },
      { path: "/prendas", element: <PrendasPage /> },
      { path: "/places", element: <AvailablePlaces /> },
      { path: "/star-wars-people", element: <StarWarsPeople /> },
      { path: "/star-wars-films", element: <StarWarsFilms /> },
      { path: "/register", element: <Signup /> },
      { path: "/login", element: <LoginPage /> },
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
