import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "initial",
        fontSize: "xx-large",
        justifyContent: "center",
        display: "flex",
        paddingTop: "6px",
        cursor: "pointer",
      }}
      onClick={() => navigate("/home")}
    >
      Job Application Portal
    </div>
  );
}
