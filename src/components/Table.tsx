import React from "react";
import imgTable from "../assets/img/tabla.png";
export const Table = () => {
  return (
    <div className="tabla flex flex-col items-center justify-center">
      <h4
        className="h4 mb-0  color-secondary w-2/3"
        style={{ textAlign: "center" }}
      >
        A continuación algunos ejemplos de nuestros grandes ahorros:
      </h4>
      <img
        src={imgTable}
        style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
      />
    </div>
  );
};
