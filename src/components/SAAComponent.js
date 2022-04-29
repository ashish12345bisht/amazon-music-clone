import React from "react";

function SAAComponent({ title }) {
  return (
    <div style={{ color: "white", width: "95vw", margin: "auto" }}>
      <h1 style={{ fontSize: "4em", margin: "1em 0em", fontWeight: "900" }}>
        {title}
      </h1>
      <p style={{ textAlign: "center" }}>
        You have not added any music yet
        <br />
        Add songs you like and they will show up here
      </p>
    </div>
  );
}

export default SAAComponent;
