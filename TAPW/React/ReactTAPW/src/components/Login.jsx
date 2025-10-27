import Botao from "./botao";
import "./login.css";

export default function Login() {
  function doLogin(nome) {
    console.log("Olá " + nome);
  }

  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input></input>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"></input>
        </div>
      </form>
      <p className="form-actions">
        <Botao aoClicar={() => doLogin("Carolina")}>Login</Botao>
      </p>
    </div>
  );
}
