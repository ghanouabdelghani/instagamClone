import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";

export default function Index() {
  return (
    <div>
      

      <div
        style={{
          display: "flex",
          height: "300px",
          widt: "600px",
        }}
      >
        {/* <img src={image3} /> */}
        <img src={image2} />
        <img src={image5} />
      </div>
      
    </div>
  );
}
