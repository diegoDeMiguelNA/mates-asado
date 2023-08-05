import { Button } from "./button";
import { render } from "@testing-library/react";

describe("basic tests", () => {
  it("should be clickable", async () => {
    let counter = 0;
    const { findByTestId } = render(<Button onClick={() => counter++} />);

    const button = await findByTestId("button");

    button.click();
    expect(counter).toBeGreaterThan(0);
  });
});
