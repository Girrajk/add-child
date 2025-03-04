import React, { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <label htmlFor="password" style={{ display: "block", marginBottom: "10px" }}>
        Password:
      </label>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "200px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "-60px",
            padding: "8px 12px",
            fontSize: "14px",
            cursor: "pointer",
            border: "none",
            background: "#007BFF",
            color: "#fff",
            borderRadius: "4px",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
