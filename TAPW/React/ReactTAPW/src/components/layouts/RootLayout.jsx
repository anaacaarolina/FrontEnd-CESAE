import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <p>Menu de navegação</p>
      </nav>
      <h1>Layout Master</h1>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
