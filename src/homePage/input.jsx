import React from "react";
import TextField from "@mui/material/TextField";
import image4 from "../assets/images/image4.png";
import image1 from "../assets/images/image1.png";
import image5 from "../assets/images/image5.png";
import image2 from "../assets/images/image2.png";

export default function Input() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          border: "1px solid #dbdbdb",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ width: "350px", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Grand Hotel', cursive",
              fontSize: "50px",
              margin: "0 0 20px 0",
              color: "#262626",
            }}
          >
            Instagram
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Phone number, username, or email"
              variant="filled"
              fullWidth
            />
            <TextField label="Password" variant="filled" fullWidth />
          </div>
          <button
            style={{
              backgroundColor: "#0095F6",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              width: "100%",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Log In
          </button>
          <div style={{ marginTop: "10px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#0095F6",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img
          style={{ height: "30px", margin: "0 10px" }}
          src={image1}
          alt="App Store"
        />
        <img
          style={{ height: "30px", margin: "0 10px" }}
          src={image4}
          alt="Google Play"
        />
      </div>
    </div>
  );
}
