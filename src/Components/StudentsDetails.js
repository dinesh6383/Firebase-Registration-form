import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { rows, columns } from "./Data";
import db from "../firebase";
import { DataGrid } from "@mui/x-data-grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StudentsDetails = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let temp = [];
    db.collection("details").onSnapshot((snapshot) => {
      snapshot.docs.map((doc, index) =>
        temp.push({ ...doc.data(), id: index + 1 })
      );
      setDetail(temp);
      setLoader(false);
    });
  }, []);

  return (
    <div className="table-holder">
      <div
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon
          style={{
            fontSize: "30px",
            border: "1px solid grey",
            borderRadius: "50%",
          }}
        />
      </div>
      <p className="title">Registerd Student Details</p>
      <Loader loader={loader} />
      <DataGrid
        columns={columns}
        rows={detail}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default StudentsDetails;
