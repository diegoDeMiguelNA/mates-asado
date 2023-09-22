type MarginGeneratorProps = {
  marginpadding?: number;
  isHrTag?: boolean;
};

function MarginGenerator({
  marginpadding = 20,
  isHrTag = false,
}: MarginGeneratorProps) {
  return (
    <div
      style={{
        height: marginpadding,
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isHrTag && <hr />}
    </div>
  );
}

export default MarginGenerator;
