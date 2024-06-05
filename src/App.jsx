import { useState } from "react";
import Index from "./homePage/container";
import "./App.css";
import Input from "./homePage/input";
import image5 from "./assets/images/image2.png";
import image2 from "./assets/images/image6.png";
function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={image2}
          alt="Phone showcasing Instagram"
          style={{ height: "581px" }}
        />
        <img
          src={image5}
          alt="Phone showcasing Instagram"
          style={{
            height: "502px",
            position: "absolute",
            left: "142px",
            top: "21px",
          }}
        />
      </div>
      <Input />
    </div>
  );
}

export default App;
