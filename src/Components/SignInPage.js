import React, { useState } from "react";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";

const SignInPage = ({ signIn, setSignIn }) => {
  const [whoUser, setWhom] = useState("User");
  return (
    <div className="signIn-box">
      <div className="user-admin">
        <p
          onClick={() => setWhom("User")}
          style={{
            borderBottom: whoUser === "User" ? "3px solid black" : "none",
          }}
        >
          User
        </p>
        <p
          onClick={() => setWhom("Admin")}
          style={{
            borderBottom: whoUser === "Admin" ? "3px solid black" : "none",
          }}
        >
          Admin
        </p>
      </div>
      <div className="signIn-form">
        {whoUser === "User" ? (
          <UserLogin setSignIn={setSignIn} />
        ) : (
          <AdminLogin />
        )}
      </div>
    </div>
  );
};

export default SignInPage;
