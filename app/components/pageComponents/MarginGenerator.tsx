import React from "react";

type MarginGeneratorProps = {
  marginpadding?: number;
  isHrTag?: boolean;
};

const MarginGenerator: React.FC<MarginGeneratorProps> = ({
  marginpadding = 20,
  isHrTag = false,
}) => {
  return <div style={{ height: marginpadding, minWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>{isHrTag && <hr />}</div>;
};

export default MarginGenerator;
