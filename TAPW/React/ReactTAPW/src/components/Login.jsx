import Botao from "./botao";
import userData from "../data/userData.js";
import "./auth.css";

export default function Login() {
  function doLogin(event) {
    event.preventDefault();
    console.log(userData.firstName);
  }

  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input></input>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"></input>
        </div>
      </div>
      <p className="form-actions">
        <Botao aoClicar={doLogin}>Login</Botao>
      </p>
    </form>
  );
}
