import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@material-ui/core";
import { googleSignUp } from "../firebase";

const UserLogin = ({ setSignIn }) => {
  async function handleGoogleSignUp() {
    try {
      await googleSignUp();
      setSignIn(true);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="user-box">
      <GoogleIcon style={{ fontSize: "80px" }} />
      <Button
        onClick={handleGoogleSignUp}
        variant="contained"
        style={{ color: "black" }}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default UserLogin;
