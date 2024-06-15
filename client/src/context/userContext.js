import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// Tạo context
export const AuthContext = createContext();

// Tạo provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Hàm xử lý login
  const login = (userData) => {
    // Thực hiện logic login ở đây
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Hàm xử lý logout
  const logout = () => {
    // Thực hiện logic logout ở đây
    localStorage.removeItem("user");
    setUser(null);
    window.location = "/login";
  };

  // Hàm xử lý register
  const register = (userData) => {
    // Thực hiện logic register ở đây
    setUser(userData);
  };
  const action = { user, login, logout, register };

  return <AuthContext.Provider value={action}>{children}</AuthContext.Provider>;
};
