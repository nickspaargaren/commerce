import React from "react";
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart, { useCart } from "../Cart";
import { renderHook } from "@testing-library/react-hooks";

test("Renders the cart component and adds a product", async () => {
  const { result } = renderHook(() =>
    useCart((state) => ({
      addProduct: state.addProduct,
    })),
  );

  render(
    <>
      <Cart />
      <button
        onClick={() => {
          result.current.addProduct({
            id: 1,
            title: "My product",
            price: 599,
          });
        }}
      >
        Add product
      </button>
    </>,
  );

  const addProductButton = screen.getByText(/Add product/i);

  expect(screen.getByText(/Amount: 0.00/i)).toBeDefined();

  fireEvent.click(addProductButton);

  expect(screen.getByText(/Amount: 5.99/i)).toBeDefined();

  fireEvent.click(addProductButton);

  expect(screen.getByText(/Amount: 11.98/i)).toBeDefined();
});
