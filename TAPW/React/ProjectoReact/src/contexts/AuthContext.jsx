import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // AuthContext.jsx
  const login = async (authData) => {
    console.log(authData);

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);

      throw new Error(errorData.message || "Login failed: " + errorData);
    }

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));
    setUser({ role: data.role, firstame: data.firstName, email: data.email });

    return true;
  };
  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
