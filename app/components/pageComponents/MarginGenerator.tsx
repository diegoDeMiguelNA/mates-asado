import React from "react";

type MarginGeneratorProps = {
  marginpadding?: number;
};

const MarginGenerator: React.FC<MarginGeneratorProps> = ({
  marginpadding = 20,
}) => {
  return <div style={{ height: marginpadding }}></div>;
};

export default MarginGenerator;
