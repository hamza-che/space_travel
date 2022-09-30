import React from "react";
// Components
import Colors from "./Colors";
import InteractiveElements from "./InteractiveElements";
import Typography from "./Typography";

const DesignSystem = () => {
  return (
    <section className="container">
      <h1 className="ff-serif fs-700" style={{ marginBottom: "1rem" }}>
        Design system
      </h1>
      <Colors />
      <Typography />
      <InteractiveElements />
    </section>
  );
};

export default DesignSystem;
