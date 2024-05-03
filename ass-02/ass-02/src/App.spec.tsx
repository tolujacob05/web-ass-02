import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should allow the user to enter their wish", async () => {
    const { getByLabelText } = render(<App />);
    const inputElement = getByLabelText("wish input");

    fireEvent.change(inputElement, { target: { value: "Test wish" } });

    expect(inputElement).toHaveValue("Test wish");
  });

  it("should enable button after a wish is entered", async () => {
    const { getByLabelText, getByText } = render(<App />);
    const inputElement = getByLabelText("wish input") as HTMLInputElement;
    const submitButton = getByText("Submit wish");

    fireEvent.change(inputElement, { target: { value: "Test wish" } });

    expect((submitButton as HTMLButtonElement).disabled).toBe(false);
  });

  it("should replace the wish entry area with the wish after submission", async () => {
    const { getByLabelText, getByText } = render(<App />);
    const inputElement = getByLabelText("wish input");
    const submitButton = getByText("Submit wish");

    fireEvent.change(inputElement, { target: { value: "Test wish" } });
    fireEvent.click(submitButton);

    expect(inputElement).not.toBeInTheDocument();
    expect(getByText("Your wish is")).toBeInTheDocument();
    expect(getByText("Test wish")).toBeInTheDocument();
  });
});
