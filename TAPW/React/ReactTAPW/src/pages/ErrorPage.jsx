import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h3>
        Está perdido? Volte <Link to={"/"}>aqui</Link>
      </h3>
    </>
  );
}
