import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const SucessPage = () => {
  return (
    <div className="sucess-box">
      <p>Thanks for your response</p>
      <TaskAltIcon
        style={{ fontSize: "70px", marginTop: "15px", color: "green" }}
      />
    </div>
  );
};

export default SucessPage;
