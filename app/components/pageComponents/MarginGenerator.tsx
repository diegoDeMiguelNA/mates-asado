import React from "react";

type MarginGeneratorProps = {
  marginpadding?: number;
  isHrTag?: boolean;
};

const MarginGenerator: React.FC<MarginGeneratorProps> = ({
  marginpadding = 20,
  isHrTag = false,
}) => {
  return <div style={{ height: marginpadding, minWidth: "100%" }}>{isHrTag && <hr />}</div>;
};

export default MarginGenerator;
