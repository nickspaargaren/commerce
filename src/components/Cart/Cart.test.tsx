import React from "react";

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../Cart";

test("Renders the cart component", async () => {
  render(<Cart />);

  const amount = screen.getByText(/Amount/i);

  expect(amount).toBeDefined();
});
