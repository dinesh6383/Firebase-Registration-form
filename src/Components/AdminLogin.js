import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AdminDetail = {
  userId: "dineshravi9787@gmail.com",
  password: "sisterdhanu@007",
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      adminEmail === AdminDetail.userId &&
      adminPass === AdminDetail.password
    ) {
      navigate("/studentdetails");
    } else {
      setError(true);
    }
  };

  return (
    <form className="form-admin" onSubmit={handleSubmit}>
      {error && (
        <p
          style={{
            fontSize: "13px",
            position: "absolute",
            top: "-25px",
            left: "25px",
            fontWeight: "500",
            color: "red",
          }}
        >
          Invalid Email and Pass!
        </p>
      )}
      <TextField
        name="Email"
        label="Email"
        type="text"
        autoComplete="off"
        required={true}
        onChange={(e) => setAdminEmail(e.target.value)}
        style={{ marginTop: "-5px" }}
      />
      <TextField
        name="Password"
        label="Password"
        type={visibility ? "text" : "password"}
        autoComplete="off"
        required={true}
        onChange={(e) => setPass(e.target.value)}
        style={{ marginTop: "15px" }}
      />
      <div
        onClick={() => setVisibility(!visibility)}
        style={{
          position: "absolute",
          right: "3px",
          top: "79px",
          cursor: "pointer",
        }}
      >
        {visibility ? (
          <VisibilityIcon style={{ fontSize: "20px" }} />
        ) : (
          <VisibilityOffIcon style={{ fontSize: "20px" }} />
        )}
      </div>
      <Button
        type="submit"
        variant="contained"
        style={{ color: "white", background: "rgb(93, 239, 93)" }}
      >
        Login
      </Button>
    </form>
  );
};

export default AdminLogin;
