import React from "react";
import Playground from "../components/Playground";

const PlaygroundPage: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        height: "calc(100vh - 160px)", // viewport - navbar - footer padding approximation
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="text-3xl font-bold mb-4">TejX Playground</h1>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Playground height="100%" />
      </div>
    </div>
  );
};

export default PlaygroundPage;
