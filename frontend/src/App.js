import React, { useEffect, useState } from "react";
import { getMessage } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage().then((res) => setMessage(res.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>React App (S3 + CloudFront)</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;