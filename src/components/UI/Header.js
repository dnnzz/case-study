import React from "react";
import profilePic from "../../Assets/profilephoto.jpg";
function Header(props) {
  return (
    <div className="flex justify-between">
      <div className="flex py-8 content-center">
        <div className="flex">
          <span
            style={{ marginTop: "6px", backgroundColor: "#acacac" }}
            className="dot"
          ></span>
          <p style={{ marginLeft: "5px" }}>Published</p>
        </div>
        <div className="flex ml-5">
          <span className="dot" style={{ marginTop: "6px" }}></span>
          <p style={{ marginLeft: "5px" }}>Scheduled</p>
        </div>
        <div className="flex  ml-5">
          <span
            className="dot"
            style={{ marginTop: "6px", backgroundColor: "#f7bf38" }}
          ></span>
          <p style={{ marginLeft: "5px" }}>Need Approval</p>
        </div>
        <div className="flex  ml-5">
          <span
            className="dot"
            style={{ marginTop: "6px", backgroundColor: "#fb6450" }}
          ></span>
          <p style={{ marginLeft: "5px" }}>Error</p>
        </div>
        <div className="flex  ml-5">
          <span
            className="dot"
            style={{ marginTop: "6px", backgroundColor: "#67b1f2" }}
          ></span>
          <p style={{ marginLeft: "5px" }}>Notes</p>
        </div>
      </div>
      <div className="profile-pic self-center">
        <img src={profilePic} alt="img profile" />
      </div>
    </div>
  );
}

export default Header;
