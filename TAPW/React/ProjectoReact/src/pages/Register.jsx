import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [passwordsAreNotEqual, setPasswordsNotEqual] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    //faz as validações
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);

    if (data.password != data.confirmPassword) {
      setPasswordsNotEqual(true);
    } else {
      //enviar dados para a API
      const user = {
        email: data.email,
        password: data.password,
        firstName: data["first-name"],
        lastName: data["last-name"],
      };
      const response = fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      // console.log(response);
      setPasswordsNotEqual(false);
      navigate("/login", { state: { message: "User successfully registered!" } });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="/backend">
        <h2>Welcome!</h2>
        <p>We just need a little bit of information from you to get you started </p>

        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required />
          </div>
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" name="confirmPassword" required />
            {passwordsAreNotEqual && <div>Passwords do not match</div>}
          </div>
        </div>

        <hr />

        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
        </div>
        <p className="form-actions">
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    </>
  );
}
