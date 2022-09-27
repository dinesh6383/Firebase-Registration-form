import React from "react";
import { Backdrop } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = ({ loader }) => {
  return (
    <div>
      <Backdrop open={loader} style={{ color: "#fff", zIndex: "10" }}>
        <CircularProgress style={{ color: "black" }} />
      </Backdrop>
    </div>
  );
};

export default Loader;
