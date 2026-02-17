import React from "react";
import Playground from "../components/Playground";

const PlaygroundPage: React.FC = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 80px)", // Full viewport minus Navbar height
        display: "flex",
        flexDirection: "column",
        background: "#0a0a0a",
      }}
    >
      <Playground height="100%" />
    </div>
  );
};

export default PlaygroundPage;
